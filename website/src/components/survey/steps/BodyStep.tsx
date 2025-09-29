// components/survey/steps/BodyStep.tsx
"use client";
import Card from "@/components/survey/Card";
import NumberInput from "@/components/survey/NumberInput";
import { Label, Help } from "@/components/survey/Label";
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
      <Label>Körpermaße</Label>
      <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div>
          <Label>Größe</Label>
          <NumberInput
            value={form.height_cm}
            onChange={(v) => set("height_cm", v)}
            placeholder="z. B. 176"
            min={LIMITS.height_cm.min}
            max={LIMITS.height_cm.max}
            unit="cm"
          />
        </div>
        <div>
          <Label>Gewicht</Label>
          <NumberInput
            value={form.weight_kg}
            onChange={(v) => set("weight_kg", v)}
            placeholder="z. B. 72"
            min={LIMITS.weight_kg.min}
            max={LIMITS.weight_kg.max}
            unit="kg"
          />
        </div>
        <div>
          <Label>Taillenumfang</Label>
          <NumberInput
            value={form.waist_cm}
            onChange={(v) => set("waist_cm", v)}
            placeholder="z. B. 84"
            min={LIMITS.waist_cm.min}
            max={LIMITS.waist_cm.max}
            unit="cm"
          />
          <Help>
            Am Bauchnabel messen. Grenzwerte: &lt;80&nbsp;cm (F) /
            &lt;94&nbsp;cm (M).
          </Help>
        </div>
      </div>

      {/* BMI pill */}
      <div className="mt-6 flex items-center gap-2 text-base">
        <span className="text-font-secondary">BMI:</span>
        {bmi ? (
          <span className="px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold">
            {bmi}
          </span>
        ) : (
          <span className="text-font-secondary">—</span>
        )}
      </div>
    </Card>
  );
}
