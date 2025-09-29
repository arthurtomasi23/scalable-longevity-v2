// components/survey/steps/CardioStep.tsx
"use client";
import Card from "@/components/survey/Card";
import Segment from "@/components/survey/Segment";
import NumberInput from "@/components/survey/NumberInput";
import { Label, Help } from "@/components/survey/Label";
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
      <Label>Herz-Kreislauf &amp; Familienanamnese</Label>

      <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <Label>Eigene Vorgeschichte: Herzinfarkt/Schlaganfall</Label>
          <div className="mt-2">
            <Segment<YesNo>
              value={form.mi_stroke_personal}
              onChange={(v) => set("mi_stroke_personal", v)}
              options={[
                { label: "Nein", value: "no" },
                { label: "Ja", value: "yes" },
              ]}
            />
          </div>
        </div>

        <div>
          <Label>Familienanamnese: Herzinfarkt/Schlaganfall</Label>
          <Help>Elternteil oder Geschwister.</Help>
          <div className="mt-2">
            <Segment<YesNo>
              value={form.family_mi_stroke}
              onChange={(v) => set("family_mi_stroke", v)}
              options={[
                { label: "Nein", value: "no" },
                { label: "Ja", value: "yes" },
              ]}
            />
          </div>
        </div>

        {form.family_mi_stroke === "yes" && (
          <div>
            <Label>Erkrankungsalter (jüngstes)</Label>
            <div className="mt-2">
              <Segment<AgeOfOnset>
                value={form.family_mi_stroke_onset}
                onChange={(v) => set("family_mi_stroke_onset", v)}
                options={[
                  { label: "<55", value: "<55" },
                  { label: "55-64", value: "55-64" },
                  { label: "≥65", value: ">=65" },
                  { label: "Unbekannt", value: "unknown" },
                ]}
              />
            </div>
          </div>
        )}

        <div>
          <Label>Systolischer Blutdruck</Label>
          <Help>
            Oberer Wert der Blutdruckmessung (Druck beim Herzschlag). Zuhause
            mit Messgerät oder in der Praxis messbar.
          </Help>
          <div className="mt-2">
            <NumberInput
              value={form.systolic_bp}
              onChange={(v) => set("systolic_bp", v)}
              placeholder="z. B. 120"
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
