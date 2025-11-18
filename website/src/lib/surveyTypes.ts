// lib/surveyTypes.ts
export type Gender = "female" | "male" | "diverse";
export type YesNo = "yes" | "no";
export type Freq = "0/Wo." | "1-2/Wo." | "3-4/Wo." | "5-7/Wo.";
export type Stress = "low" | "medium" | "high";
export type Smoking = "never" | "former" | "current_<10" | "current_10_20" | "current_>20";
export type Fastfood = "never" | "1-2/Wo." | "3-4/Wo." | "5+/Wo.";
export type FruitsVeg = "0-1/Tag" | "2-3/Tag" | "4-5/Tag" | "6+/Tag";
export type Fish = "0/Wo." | "1/Wo." | "2/Wo." | "3+/Wo.";
export type AgeOfOnset = "<55" | "55-64" | ">=65" | "unknown";

export type FormState = {
  age: number | "";
  gender: Gender | "";
  height_cm: number | "";
  weight_kg: number | "";
  waist_cm: number | "";

  daily_movement: Freq | "";
  sport: Freq | "";

  mi_stroke_personal: YesNo | "";
  family_mi_stroke: YesNo | "";
  family_mi_stroke_onset: AgeOfOnset | "";

  stress: Stress | "";
  smoking: Smoking | "";
  fastfood: Fastfood | "";

  systolic_bp: number | "";
  fruits_veg: FruitsVeg | "";
  fish: Fish | "";

  diabetes_dx: YesNo | "";
  hba1c: number | "";

  ldl: number | "";
  hdl: number | "";
  share_data: boolean | null;
};

export type ScoreRule = { rule: string; label: string; delta: number };
export type ScoreResult = { totalDelta: number; bmi?: number; breakdown: ScoreRule[] };
