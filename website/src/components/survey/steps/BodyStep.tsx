// components/survey/steps/BodyStep.tsx
"use client";
import Card from "@/components/ui/Card";
import NumberInput from "@/components/ui/NumberInput";
import { Label, Help } from "@/components/ui/Label";
import { LIMITS } from "@/lib/surveyConfig";
import type { FormState } from "@/lib/surveyTypes";
import { useMemo } from "react";

export default function BodyStep({
  form,
  set,
}: {
  form: FormState;
  set: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
}) {
  const bmi = useMemo(() => {
    if (!form.height_cm || !form.weight_kg) return null;
    const h = Number(form.height_cm) / 100;
    const w = Number(form.weight_kg);
    if (!h || !w) return null;
    return +(w / (h * h)).toFixed(1);
  }, [form.height_cm, form.weight_kg]);

  return (
    <Card>
      <Label>Body Metrics</Label>
      <div className="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div>
          <Label>Height</Label>
          <NumberInput
            value={form.height_cm}
            onChange={(v) => set("height_cm", v)}
            placeholder="e.g., 176"
            min={LIMITS.height_cm.min}
            max={LIMITS.height_cm.max}
            unit="cm"
          />
        </div>
        <div>
          <Label>Weight</Label>
          <NumberInput
            value={form.weight_kg}
            onChange={(v) => set("weight_kg", v)}
            placeholder="e.g., 72"
            min={LIMITS.weight_kg.min}
            max={LIMITS.weight_kg.max}
            unit="kg"
          />
        </div>
        <div>
          <Label>Waist Circumference</Label>
          <NumberInput
            value={form.waist_cm}
            onChange={(v) => set("waist_cm", v)}
            placeholder="e.g., 84"
            min={LIMITS.waist_cm.min}
            max={LIMITS.waist_cm.max}
            unit="cm"
          />
          <Help>
            Measure at the belly button. Thresholds differ: &lt;80cm (F) /
            &lt;94cm (M).
          </Help>
        </div>
      </div>

      <div className="mt-4 text-sm text-font-secondary">
        BMI:{" "}
        {bmi ? (
          <span className="font-semibold text-font-primary">{bmi}</span>
        ) : (
          "—"
        )}
      </div>
    </Card>
  );
}
