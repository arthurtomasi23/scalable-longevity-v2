"use client";

import { useMemo } from "react";
import Image from "next/image";
import NumberInput from "../../survey/components/NumberInput";
import Segment from "../../survey/components/Segment";
import { LIMITS } from "@/lib/surveyConfig";
import type { FormState, Gender } from "@/lib/surveyTypes";

export default function ProfileBodyStep({
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
    <div className="w-full h-full flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-4xl flex flex-col lg:flex-row gap-5">
        {/* LEFT: inputs */}
        <div className="flex-1 h-[460px] rounded-[30px] border border-card-border bg-card p-8 flex flex-col justify-between">
          <div className="flex flex-col gap-2">
            <h2 className="text-xl font-medium text-font-primary mb-4">
              Dein Biologisches Profil
            </h2>
            {/* Gender */}
            <Segment<Gender>
              value={form.gender}
              onChange={(v) => set("gender", v)}
              options={[
                { label: "Weiblich", value: "female" },
                { label: "Männlich", value: "male" },
              ]}
            />
            {/* Age */}
            <NumberInput
              value={form.age}
              onChange={(v) => set("age", v)}
              placeholder="Alter"
              min={LIMITS.age.min}
              max={LIMITS.age.max}
              unit="Jahre"
            />

            {/* Body measurements */}
            <NumberInput
              value={form.height_cm}
              onChange={(v) => set("height_cm", v)}
              placeholder="Größe"
              min={LIMITS.height_cm.min}
              max={LIMITS.height_cm.max}
              unit="cm"
            />
            <NumberInput
              value={form.weight_kg}
              onChange={(v) => set("weight_kg", v)}
              placeholder="Gewicht"
              min={LIMITS.weight_kg.min}
              max={LIMITS.weight_kg.max}
              unit="kg"
            />

            <NumberInput
              value={form.waist_cm}
              onChange={(v) => set("waist_cm", v)}
              placeholder="Taillenumfang"
              min={LIMITS.waist_cm.min}
              max={LIMITS.waist_cm.max}
              unit="cm"
            />
          </div>

          {/* Bottom: BMI */}
          <div className="mt-2 flex items-center justify-between">
            <div className="flex items-center gap-2 text-base">
              <span className="text-font-secondary">BMI:</span>
              {bmi ? (
                <span className="px-4 py-1 rounded-full bg-primary/10 text-primary font-semibold">
                  {bmi}
                </span>
              ) : (
                <span className="text-font-secondary">—</span>
              )}
            </div>
          </div>
        </div>

        {/* RIGHT: image */}
        <div className="flex-1 h-[460px] relative overflow-hidden rounded-[30px]">
          <Image
            src="/survey-images/bio-profile.jpg"
            alt="bio-profile Illustration"
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
