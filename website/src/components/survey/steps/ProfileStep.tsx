// components/survey/steps/ProfileStep.tsx
"use client";
import Card from "@/components/survey/Card";
import NumberInput from "@/components/survey/NumberInput";
import Segment from "@/components/survey/Segment";
import { Label, Help } from "@/components/survey/Label";
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
      <Label>Alter</Label>
      <div className="mt-2">
        <NumberInput
          value={form.age}
          onChange={(v) => set("age", v)}
          placeholder="z. B. 34"
          min={LIMITS.age.min}
          max={LIMITS.age.max}
          unit="Jahre"
        />
      </div>

      <div className="mt-6">
        <Label>Geschlecht</Label>
        <Help>
          Wird für geschlechtsspezifische Grenzwerte genutzt (z. B.
          Taillenumfang).
        </Help>
        <div className="mt-2">
          <Segment<Gender>
            value={form.gender}
            onChange={(v) => set("gender", v)}
            options={[
              { label: "Weiblich", value: "female" },
              { label: "Männlich", value: "male" },
              { label: "Divers", value: "diverse" },
            ]}
          />
        </div>
      </div>
    </Card>
  );
}
