// lib/score.ts
export type Gender = "female" | "male" | "diverse";
export type YesNo = "yes" | "no";

export type FormState = {
  age: number;                 // yrs
  gender: Gender;
  height_cm: number;           // cm
  weight_kg: number;           // kg
  waist_cm: number;            // cm

  daily_movement: "0/Wo." | "1-2/Wo." | "3-4/Wo." | "5-7/Wo.";
  sport: "0/Wo." | "1-2/Wo." | "3-4/Wo." | "5-7/Wo.";

  mi_stroke_personal: YesNo;
  family_mi_stroke: YesNo;
  family_mi_stroke_onset: "<55" | "55-64" | ">=65" | "unknown";

  stress: "low" | "medium" | "high";

  // Your UI options; mapped to Excel bands in mappers below
  smoking: "never" | "former" | "current_<10" | "current_10_20" | "current_>20";

  fastfood: "never" | "1-2/Wo." | "3-4/Wo." | "5+/Wo.";
  systolic_bp: number;         // mmHg

  fruits_veg: "0-1/Tag" | "2-3/Tag" | "4-5/Tag" | "6+/Tag";
  fish: "0/Wo." | "1/Wo." | "2/Wo." | "3+/Wo.";

  diabetes_dx: YesNo;
  hba1c?: number;              // %, only if diabetes_dx === "no"

  ldl: number;                 // mg/dL
  hdl: number;                 // mg/dL

  // Optional toggles we can add to the UI later:
  bp_treated?: boolean;        // adds +2 if treated (per sheet)
  ldl_treated?: boolean;       // sheet has "behandelt" band (+2)
};

export type RuleDelta = {
  rule: string;
  label: string;
  delta: number;
};

export type ScoreResult = {
  totalDelta: number;     // sum of deltas
  breakdown: RuleDelta[]; // per-rule details
  bmi?: number;
};

const bmiOf = (h_cm: number, w_kg: number) => +(w_kg / Math.pow(h_cm / 100, 2)).toFixed(1);

// ---- Mappers: convert raw inputs -> Excel bands, then to deltas ----

// REGEL 2 — BMI (from sheet Frauen)
function rBMI(h_cm: number, w_kg: number): RuleDelta {
  const bmi = bmiOf(h_cm, w_kg);
  let label: string;
  let delta: number;
  if (bmi < 25) { label = "<25"; delta = -1; }
  else if (bmi < 30) { label = "25-<30"; delta = 0; }
  else { label = ">30"; delta = 2; }
  return { rule: "REGEL 2 (BMI)", label: `${label} (BMI ${bmi})`, delta };
}

// REGEL 3 — Waist (female from sheet; male clinical cut points)
function rWaist(waist_cm: number, gender: Gender): RuleDelta {
  let label: string;
  let delta: number;
  if (gender === "female") {
    // Frauen sheet: <80 => -2; >80-<88 => +2; >88 => +4
    if (waist_cm < 80) { label = "<80"; delta = -2; }
    else if (waist_cm < 88) { label = ">80-<88"; delta = 2; }
    else { label = ">88"; delta = 4; }
  } else {
    // Male (typical): <94 good; 94–102 mid; >102 high
    if (waist_cm < 94) { label = "<94"; delta = -2; }
    else if (waist_cm <= 102) { label = "94-102"; delta = 2; }
    else { label = ">102"; delta = 4; }
  }
  return { rule: "REGEL 3 (Waist)", label: `${label} cm`, delta };
}

// REGEL 4 — Daily movement >30min (per sheet)
function rDailyMove(val: FormState["daily_movement"]): RuleDelta {
  const map = { "0/Wo.": 4, "1-2/Wo.": 2, "3-4/Wo.": 0, "5-7/Wo.": -3 } as const;
  return { rule: "REGEL 4 (Alltag >30min)", label: val, delta: map[val] };
}

// REGEL 5 — Sport >30min (per sheet)
function rSport(val: FormState["sport"]): RuleDelta {
  const map = { "0/Wo.": 2, "1-2/Wo.": 0, "3-4/Wo.": -3, "5-7/Wo.": -5 } as const;
  return { rule: "REGEL 5 (Sport >30min)", label: val, delta: map[val] };
}

// REGEL 6 — Personal MI/Stroke
function rMI_Stroke_Personal(val: YesNo): RuleDelta {
  return { rule: "REGEL 6 (MI/Stroke personal)", label: val, delta: val === "yes" ? 12 : 0 };
}

// REGEL 7/8 — Family history + age of onset
function rFamily(val: YesNo, onset: FormState["family_mi_stroke_onset"]): RuleDelta[] {
  const base = { rule: "REGEL 7 (Family MI/Stroke)", label: val, delta: val === "yes" ? 2 : 0 };
  if (val !== "yes") return [base];
  const onsetDelta = (onset === "<55") ? 4 : 0; // sheet has <55 => +4, ≥55 => 0
  const onsetLabel = onset === "<55" ? "<55 Jahre" : "55 oder älter/unknown";
  return [base, { rule: "REGEL 8 (Family onset)", label: onsetLabel, delta: onsetDelta }];
}

// REGEL 9 — Stress (map low/medium/high to sheet labels)
function rStress(val: FormState["stress"]): RuleDelta {
  const map = { low: 0, medium: 1, high: 3 } as const; // Gelegentlich/nie=0, Häufig=1, Immer=3
  return { rule: "REGEL 9 (Stress)", label: val, delta: map[val] };
}

// REGEL 10 — Smoking (map your UI to sheet bands)
function rSmoking(val: FormState["smoking"]): RuleDelta {
  // Sheet bands:
  // Nie: 0
  // Vergangenheit <10 Jahre: +2
  // Vergangenheit >10 Jahre: +4
  // Aktueller Raucher <8 Z./Wo.: +4
  // Aktueller Raucher <1 Sch./Tag: +6
  // Aktueller Raucher >1 Sch./Tag: +8
  let label = "";
  let delta = 0;
  switch (val) {
    case "never":
      label = "Nie"; delta = 0; break;
    case "former":
      // Without years-since-quit we choose the conservative (worse) band per your “assume worst” rule.
      label = "Vergangenheit >10 Jahre"; delta = 4; break;
    case "current_<10":
      // ~<10/day maps between <8/week and <1/day; use +6 as middle-high risk
      label = "Aktueller Raucher <1Sch./Tag"; delta = 6; break;
    case "current_10_20":
      label = "Aktueller Raucher >1Sch./Tag"; delta = 8; break;
    case "current_>20":
      label = "Aktueller Raucher >1Sch./Tag"; delta = 8; break;
  }
  return { rule: "REGEL 10 (Rauchen)", label, delta };
}

// REGEL 11 — Fastfood
function rFastfood(val: FormState["fastfood"]): RuleDelta {
  // Sheet: nie:-1, selten:0, 1/Wo.:+1, mehrmals/Wo.:+2
  let label = "", delta = 0;
  if (val === "never") { label = "nie"; delta = -1; }
  else if (val === "1-2/Wo.") { label = "selten"; delta = 0; }
  else if (val === "3-4/Wo.") { label = "1/Wo."; delta = 1; }
  else { label = "mehrmals/Wo."; delta = 2; }
  return { rule: "REGEL 11 (Fastfood)", label, delta };
}

// REGEL 12 — Systolic BP (with optional 'treated' +2)
function rSystolicBP(sys: number, treated?: boolean): RuleDelta[] {
  let band: string, delta: number;
  if (sys > 160) { band = ">160"; delta = 6; }
  else if (sys >= 140) { band = "140-160"; delta = 4; }
  else if (sys >= 130) { band = "130-139"; delta = 2; }
  else { band = "<129"; delta = 0; }
  const res: RuleDelta[] = [{ rule: "REGEL 12 (Systolic BP)", label: band, delta }];
  if (treated) res.push({ rule: "REGEL 12 (Treated)", label: "behandelt", delta: 2 });
  return res;
}

// REGEL 13 — Fruits & Vegetables
function rFruitsVeg(val: FormState["fruits_veg"]): RuleDelta {
  // Sheet: 1x/Wo.: +3, 3x/Wo.: +1, täglich: -2, mehrmals tägl.: -4
  // Map your daily choices:
  const map: Record<FormState["fruits_veg"], { label: string; delta: number }> = {
    "0-1/Tag": { label: "1x/Wo.", delta: 3 },
    "2-3/Tag": { label: "3x/Wo.", delta: 1 },
    "4-5/Tag": { label: "täglich", delta: -2 },
    "6+/Tag":  { label: "mehrmals tägl.", delta: -4 },
  };
  const m = map[val];
  return { rule: "REGEL 13 (Obst & Gemüse)", label: m.label, delta: m.delta };
}

// REGEL 14 — Fish
function rFish(val: FormState["fish"]): RuleDelta {
  // Sheet: selten:+2, 1x/Wo.:0, 2-3x/Wo.:-1, 4x/Wo.:-2
  let label = "", delta = 0;
  if (val === "0/Wo.") { label = "selten"; delta = 2; }
  else if (val === "1/Wo.") { label = "1x/Wo."; delta = 0; }
  else if (val === "2/Wo.") { label = "2-3x/wo."; delta = -1; }
  else { label = "4x/Wo."; delta = -2; }
  return { rule: "REGEL 14 (Fisch)", label, delta };
}

// REGEL 15/16 — Diabetes diagnosis / HbA1c (if no Dx)
function rDiabetes(diabetes_dx: YesNo, hba1c?: number): RuleDelta[] {
  const out: RuleDelta[] = [{ rule: "REGEL 15 (Diabetes Dx)", label: diabetes_dx, delta: diabetes_dx === "yes" ? 6 : 0 }];
  if (diabetes_dx === "no" && typeof hba1c === "number") {
    let label = "", delta = 0;
    if (hba1c < 4.0) { label = "<4,0%"; delta = 3; }
    else if (hba1c < 4.5) { label = "4,0-4,4%"; delta = 1; }
    else if (hba1c < 5.5) { label = "4,5-5,4"; delta = 0; }
    else if (hba1c < 5.7) { label = "5,5-5,6%"; delta = 1; }
    else { label = "5,7-6,4"; delta = 4; }
    out.push({ rule: "REGEL 16 (HbA1c falls keine Dx)", label, delta });
  }
  return out;
}

// REGEL 17 — LDL (or treated)
function rLDL(ldl: number, treated?: boolean): RuleDelta {
  if (treated) return { rule: "REGEL 17 (LDL behandelt)", label: "behandelt", delta: 2 };
  let label = "", delta = 0;
  if (ldl >= 190) { label = "<190"; delta = 8; }        // sheet order label is odd; keep deltas
  else if (ldl >= 160) { label = "160-190"; delta = 6; }
  else if (ldl >= 130) { label = "130-159"; delta = 4; }
  else { label = "<130"; delta = 0; }
  return { rule: "REGEL 17 (LDL)", label: `${label} (mg/dL)`, delta };
}

// REGEL 18 — HDL
function rHDL(hdl: number): RuleDelta {
  let label = "", delta = 0;
  if (hdl > 60) { label = ">60"; delta = -4; }
  else if (hdl >= 50) { label = "50-60"; delta = -2; }
  else if (hdl >= 40) { label = "40-59"; delta = 0; }
  else { label = "<40"; delta = 4; }
  return { rule: "REGEL 18 (HDL)", label: `${label} (mg/dL)`, delta };
}

// ---- Main API ----
export function scoreSurvey(form: FormState): ScoreResult {
  const breakdown: RuleDelta[] = [];

  // REGEL 2 (BMI)
  breakdown.push(rBMI(form.height_cm, form.weight_kg));

  // REGEL 3 (Waist)
  breakdown.push(rWaist(form.waist_cm, form.gender));

  // REGEL 4 & 5
  breakdown.push(rDailyMove(form.daily_movement));
  breakdown.push(rSport(form.sport));

  // REGEL 6, 7, 8
  breakdown.push(rMI_Stroke_Personal(form.mi_stroke_personal));
  breakdown.push(...rFamily(form.family_mi_stroke, form.family_mi_stroke_onset));

  // REGEL 9
  breakdown.push(rStress(form.stress));

  // REGEL 10
  breakdown.push(rSmoking(form.smoking));

  // REGEL 11
  breakdown.push(rFastfood(form.fastfood));

  // REGEL 12 (+treated?)
  breakdown.push(...rSystolicBP(form.systolic_bp, form.bp_treated));

  // REGEL 13/14
  breakdown.push(rFruitsVeg(form.fruits_veg));
  breakdown.push(rFish(form.fish));

  // REGEL 15/16
  breakdown.push(...rDiabetes(form.diabetes_dx, form.hba1c));

  // REGEL 17/18 (+treated?)
  breakdown.push(rLDL(form.ldl, form.ldl_treated));
  breakdown.push(rHDL(form.hdl));

  const totalDelta = breakdown.reduce((s, b) => s + b.delta, 0);
  return {
    totalDelta,
    breakdown,
    bmi: bmiOf(form.height_cm, form.weight_kg),
  };
}
