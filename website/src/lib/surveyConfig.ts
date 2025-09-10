// lib/surveyConfig.ts
import type { FormState } from "./surveyTypes";

export const LIMITS = {
  age: { min: 18, max: 100 },
  height_cm: { min: 100, max: 200 },
  weight_kg: { min: 30, max: 200 },
  waist_cm: { min: 50, max: 200 },
  systolic_bp: { min: 80, max: 250 },
  hba1c: { min: 4, max: 14 },
  ldl: { min: 40, max: 400 },
  hdl: { min: 10, max: 120 },
} as const;

export const STEPS: { key: string; title: string; fields: (keyof FormState)[] }[] = [
  { key: "profile",   title: "Your Profile",         fields: ["age", "gender"] },
  { key: "body",      title: "Body Metrics",         fields: ["height_cm", "weight_kg", "waist_cm"] },
  { key: "activity",  title: "Activity",             fields: ["daily_movement", "sport"] },
  { key: "cardio",    title: "Cardio & Family",      fields: ["mi_stroke_personal","family_mi_stroke","family_mi_stroke_onset","systolic_bp"] },
  { key: "lifestyle", title: "Lifestyle",            fields: ["stress","smoking","fastfood","fruits_veg","fish"] },
  { key: "metabolic", title: "Metabolic & Lipids",   fields: ["diabetes_dx","hba1c","ldl","hdl"] },
];

export function visibleFieldsForStep(stepIndex: number, form: FormState): (keyof FormState)[] {
  const base = STEPS[stepIndex].fields;
  return base.filter((f) => {
    if (f === "family_mi_stroke_onset" && form.family_mi_stroke !== "yes") return false;
    if (f === "hba1c" && form.diabetes_dx !== "no") return false;
    return true;
  });
}
