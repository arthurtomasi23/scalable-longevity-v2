// components/survey/steps/ProfileStep.tsx
"use client";
import Card from "@/components/ui/Card";
import NumberInput from "@/components/ui/NumberInput";
import Segment from "@/components/ui/Segment";
import { Label, Help } from "@/components/ui/Label";
import { LIMITS } from "@/lib/surveyConfig";
import type { FormState, Gender } from "@/lib/surveyTypes";

export default function ProfileStep({
  form,
  set,
}: {
  form: FormState;
  set: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
}) {
  return (
    <Card>
      <Label>Age</Label>
      <div className="mt-2">
        <NumberInput
          value={form.age}
          onChange={(v) => set("age", v)}
          placeholder="e.g., 34"
          min={LIMITS.age.min}
          max={LIMITS.age.max}
          unit="years"
        />
      </div>

      <div className="mt-5">
        <Label>Gender</Label>
        <Help>
          Used for sex-specific thresholds (e.g., waist circumference).
        </Help>
        <div className="mt-2">
          <Segment<Gender>
            value={form.gender}
            onChange={(v) => set("gender", v)}
            options={[
              { label: "Female", value: "female" },
              { label: "Male", value: "male" },
              { label: "Diverse", value: "diverse" },
            ]}
          />
        </div>
      </div>
    </Card>
  );
}
