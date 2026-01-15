"use client";

import Image from "next/image";
import Segment from "../../survey/components/Segment";
import NumberInput from "../../survey/components/NumberInput";
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
    <div className="w-full h-full flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-4xl flex flex-col lg:flex-row gap-5">
        {/* LEFT */}
        <div className="flex-1 h-[460px] rounded-[30px] border border-card-border bg-card p-8 flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-medium text-font-primary mb-4">
              Herz-Kreislauf
            </h2>

            {/* Personal history */}
            <div className="flex flex-col gap-2">
              <p className="text-sm text-font-secondary">
                Eigene Vorgeschichte: Herzinfarkt / Schlaganfall
              </p>
              <Segment<YesNo>
                value={form.mi_stroke_personal}
                onChange={(v) => set("mi_stroke_personal", v)}
                options={[
                  { label: "Nein", value: "no" },
                  { label: "Ja", value: "yes" },
                ]}
              />
            </div>

            {/* Family history */}
            <div className="flex flex-col gap-2 mt-2">
              <p className="text-sm text-font-secondary">
                Familienanamnese: Herzinfarkt / Schlaganfall
              </p>
              <Segment<YesNo>
                value={form.family_mi_stroke}
                onChange={(v) => set("family_mi_stroke", v)}
                options={[
                  { label: "Nein", value: "no" },
                  { label: "Ja", value: "yes" },
                ]}
              />
            </div>

            {/* Age of onset (conditional) */}
            {form.family_mi_stroke === "yes" && (
              <div className="flex flex-col gap-2 mt-2">
                <p className="text-sm text-font-secondary">
                  Erkrankungsalter (jüngstes Familienmitglied)
                </p>
                <Segment<AgeOfOnset>
                  value={form.family_mi_stroke_onset}
                  onChange={(v) => set("family_mi_stroke_onset", v)}
                  options={[
                    { label: "<55", value: "<55" },
                    { label: "55–64", value: "55-64" },
                    { label: "≥65", value: ">=65" },
                    { label: "Unbekannt", value: "unknown" },
                  ]}
                />
              </div>
            )}

            {/* Blood pressure */}
            <div className="flex flex-col gap-2 mt-2">
              <p className="text-sm text-font-secondary">
                Systolischer Blutdruck
              </p>
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

          {/* Bottom helper line (keeps vertical rhythm consistent) */}
          <p className="text-xs text-font-secondary mt-4">
            Blutdruck und familiäre Risiken sind zentrale Treiber der
            Herzgesundheit.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex-1 h-[460px] relative overflow-hidden rounded-[30px]">
          <Image
            src="/survey-images/cardio.jpg"
            alt="cardio Illustration"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
    </div>
  );
}
