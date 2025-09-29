// components/survey/steps/MetabolicStep.tsx
"use client";
import Card from "@/components/survey/Card";
import Segment from "@/components/survey/Segment";
import NumberInput from "@/components/survey/NumberInput";
import { Label, Help } from "@/components/survey/Label";
import { LIMITS } from "@/lib/surveyConfig";
import type { FormState, YesNo } from "@/lib/surveyTypes";
import HoverCard from "@/components/survey/HoverCard";
import { Info } from "lucide-react";

export default function MetabolicStep({
  form,
  set,
}: {
  form: FormState;
  set: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
}) {
  return (
    <Card>
      <Label>Stoffwechsel &amp; Blutfette</Label>

      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Diabetes */}
        <div>
          <Label>Diabetes-Diagnose</Label>
          <div className="mt-2">
            <Segment<YesNo>
              value={form.diabetes_dx}
              onChange={(v) => set("diabetes_dx", v)}
              options={[
                { label: "Nein", value: "no" },
                { label: "Ja", value: "yes" },
              ]}
            />
          </div>
        </div>

        {/* HbA1c (nur wenn keine bekannte Diagnose) */}
        {form.diabetes_dx === "no" && (
          <div>
            <div className="flex items-center gap-2">
              <Label>HbA1c</Label>
              <HoverCard
                trigger={<Info className="h-4 w-4 text-font-secondary" />}
                placement="top"
              >
                <div className="font-semibold mb-1">Was ist HbA1c?</div>
                <p className="text-font-secondary">
                  HbA1c misst den durchschnittlichen Blutzucker der letzten
                  2-3&nbsp;Monate. Der Wert wird zur Diagnose und
                  Verlaufskontrolle von Diabetes genutzt.
                </p>
              </HoverCard>
            </div>
            <div className="mt-2">
              <NumberInput
                value={form.hba1c}
                onChange={(v) => set("hba1c", v)}
                placeholder="z. B. 5.6"
                min={LIMITS.hba1c.min}
                max={LIMITS.hba1c.max}
                unit="%"
              />
            </div>
            <Help>Typische Bereiche: &lt;5,7 · 5,7-6,4 · ≥6,5.</Help>
          </div>
        )}

        {/* LDL */}
        <div>
          <div className="flex items-center gap-2">
            <Label>LDL</Label>
            <HoverCard
              trigger={<Info className="h-4 w-4 text-font-secondary" />}
              placement="top"
            >
              <div className="font-semibold mb-1">Was ist LDL?</div>
              <p className="text-font-secondary">
                LDL („schlechtes“ Cholesterin) kann sich in den Arterien
                ablagern und das Herz-Kreislauf-Risiko erhöhen.
              </p>
            </HoverCard>
          </div>
          <div className="mt-2">
            <NumberInput
              value={form.ldl}
              onChange={(v) => set("ldl", v)}
              placeholder="z. B. 110"
              min={LIMITS.ldl.min}
              max={LIMITS.ldl.max}
              unit="mg/dL"
            />
          </div>
        </div>

        {/* HDL */}
        <div>
          <div className="flex items-center gap-2">
            <Label>HDL</Label>
            <HoverCard
              trigger={<Info className="h-4 w-4 text-font-secondary" />}
              placement="top"
            >
              <div className="font-semibold mb-1">Was ist HDL?</div>
              <p className="text-font-secondary">
                HDL („gutes“ Cholesterin) hilft, überschüssiges Cholesterin aus
                dem Blut zu entfernen.
              </p>
            </HoverCard>
          </div>
          <div className="mt-2">
            <NumberInput
              value={form.hdl}
              onChange={(v) => set("hdl", v)}
              placeholder="z. B. 50"
              min={LIMITS.hdl.min}
              max={LIMITS.hdl.max}
              unit="mg/dL"
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
