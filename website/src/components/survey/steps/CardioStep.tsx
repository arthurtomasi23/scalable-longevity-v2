// components/survey/steps/CardioStep.tsx
"use client";
import Card from "@/components/ui/Card";
import Segment from "@/components/ui/Segment";
import NumberInput from "@/components/ui/NumberInput";
import { Label, Help } from "@/components/ui/Label";
import { LIMITS } from "@/lib/surveyConfig";
import type { FormState, YesNo, AgeOfOnset } from "@/lib/surveyTypes";

export default function CardioStep({
  form,
  set,
}: {
  form: FormState;
  set: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
}) {
  return (
    <Card>
      <Label>Cardio & Family History</Label>
      <div className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <Label>Personal history of MI/Stroke</Label>
          <div className="mt-2">
            <Segment<YesNo>
              value={form.mi_stroke_personal}
              onChange={(v) => set("mi_stroke_personal", v)}
              options={[
                { label: "No", value: "no" },
                { label: "Yes", value: "yes" },
              ]}
            />
          </div>
        </div>

        <div>
          <Label>Family history: MI/Stroke</Label>
          <Help>Parent or sibling.</Help>
          <div className="mt-2">
            <Segment<YesNo>
              value={form.family_mi_stroke}
              onChange={(v) => set("family_mi_stroke", v)}
              options={[
                { label: "No", value: "no" },
                { label: "Yes", value: "yes" },
              ]}
            />
          </div>
        </div>

        {form.family_mi_stroke === "yes" && (
          <div>
            <Label>Age of onset (youngest)</Label>
            <div className="mt-2">
              <Segment<AgeOfOnset>
                value={form.family_mi_stroke_onset}
                onChange={(v) => set("family_mi_stroke_onset", v)}
                options={[
                  { label: "<55", value: "<55" },
                  { label: "55–64", value: "55-64" },
                  { label: "≥65", value: ">=65" },
                  { label: "Unknown", value: "unknown" },
                ]}
              />
            </div>
          </div>
        )}

        <div>
          <Label>Systolic BP</Label>
          <Help>
            Systolic blood pressure is the top number in a blood pressure
            reading. It measures the pressure in your arteries when your heart
            beats. You can measure it using a home blood pressure monitor or at
            a clinic.
          </Help>
          <div className="mt-2">
            <NumberInput
              value={form.systolic_bp}
              onChange={(v) => set("systolic_bp", v)}
              placeholder="e.g., 120"
              min={LIMITS.systolic_bp.min}
              max={LIMITS.systolic_bp.max}
              unit="mmHg"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
