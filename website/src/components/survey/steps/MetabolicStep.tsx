// components/survey/steps/MetabolicStep.tsx
"use client";
import Card from "@/components/ui/Card";
import Segment from "@/components/ui/Segment";
import NumberInput from "@/components/ui/NumberInput";
import { Label, Help } from "@/components/ui/Label";
import { LIMITS } from "@/lib/surveyConfig";
import type { FormState, YesNo } from "@/lib/surveyTypes";

export default function MetabolicStep({
  form, set,
}: {
  form: FormState;
  set: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
}) {
  return (
    <Card>
      <Label>Metabolic & Lipids</Label>
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <Label>Diabetes diagnosis</Label>
          <div className="mt-2">
            <Segment<YesNo>
              value={form.diabetes_dx}
              onChange={(v) => set("diabetes_dx", v)}
              options={[{ label: "No", value: "no" }, { label: "Yes", value: "yes" }]}
            />
          </div>
        </div>

        {form.diabetes_dx === "no" && (
          <div>
            <Label>HbA1c</Label>
            <NumberInput
              value={form.hba1c}
              onChange={(v) => set("hba1c", v)}
              placeholder="e.g., 5.6"
              min={LIMITS.hba1c.min}
              max={LIMITS.hba1c.max}
              unit="%"
            />
            <Help>Typical bands: &lt;5.7, 5.7–6.4, ≥6.5.</Help>
          </div>
        )}

        <div>
          <Label>LDL</Label>
          <NumberInput
            value={form.ldl}
            onChange={(v) => set("ldl", v)}
            placeholder="e.g., 110"
            min={LIMITS.ldl.min}
            max={LIMITS.ldl.max}
            unit="mg/dL"
          />
        </div>

        <div>
          <Label>HDL</Label>
          <NumberInput
            value={form.hdl}
            onChange={(v) => set("hdl", v)}
            placeholder="e.g., 50"
            min={LIMITS.hdl.min}
            max={LIMITS.hdl.max}
            unit="mg/dL"
          />
        </div>
      </div>
    </Card>
  );
}
