"use client";

import Image from "next/image";
import Segment from "../../survey/components/Segment";
import type { FormState, Stress, Smoking } from "@/lib/surveyTypes";

export default function LifestyleMindsetStep({
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
              Stress & Gewohnheiten
            </h2>

            {/* Stress */}
            <div className="flex flex-col gap-2">
              <p className="text-sm text-font-secondary">
                Wie hoch empfindest du dein aktuelles Stressniveau?
              </p>
              <Segment<Stress>
                value={form.stress}
                onChange={(v) => set("stress", v)}
                options={[
                  { label: "Niedrig", value: "low" },
                  { label: "Mittel", value: "medium" },
                  { label: "Hoch", value: "high" },
                ]}
              />
            </div>

            {/* Smoking */}
            <div className="flex flex-col gap-2 mt-2">
              <p className="text-sm text-font-secondary">Rauchst du aktuell?</p>
              <Segment<Smoking>
                value={form.smoking}
                onChange={(v) => set("smoking", v)}
                options={[
                  { label: "Nie", value: "never" },
                  { label: "Früher", value: "former" },
                  { label: "<10/Tag", value: "current_<10" },
                  { label: "10-20/Tag", value: "current_10_20" },
                  { label: ">20/Tag", value: "current_>20" },
                ]}
              />
            </div>
          </div>

          <p className="text-xs text-font-secondary mt-4">
            Stress & Rauchen haben einen direkten Einfluss auf Herz,
            Stoffwechsel und Schlaf.
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex-1 h-[460px] relative overflow-hidden rounded-[30px]">
          <Image
            src="/survey-images/stress.jpg"
            alt="stress Illustration"
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
