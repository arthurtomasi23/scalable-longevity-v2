"use client";

import Image from "next/image";
import Segment from "@/components/survey/Segment";
import type { FormState, Fastfood, FruitsVeg, Fish } from "@/lib/surveyTypes";

export default function LifestyleNutritionStep({
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
        <div className="flex-1 h-[460px] max-h-[600px] rounded-[30px] border border-card-border bg-card p-8 flex flex-col justify-between">
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-medium text-font-primary mb-4">
              Ernährung
            </h2>

            {/* Fastfood */}
            <div className="flex flex-col gap-2">
              <p className="text-sm text-font-secondary">
                Fastfood - wie häufig pro Woche?
              </p>
              <Segment<Fastfood>
                value={form.fastfood}
                onChange={(v) => set("fastfood", v)}
                options={[
                  { label: "Nie", value: "never" },
                  { label: "1-2/Wo.", value: "1-2/Wo." },
                  { label: "3-4/Wo.", value: "3-4/Wo." },
                  { label: "5+/Wo.", value: "5+/Wo." },
                ]}
              />
            </div>

            {/* Fruits & Veg */}
            <div className="flex flex-col gap-2 mt-2">
              <p className="text-sm text-font-secondary">
                Obst & Gemüse - Portionen pro Tag
              </p>
              <Segment<FruitsVeg>
                value={form.fruits_veg}
                onChange={(v) => set("fruits_veg", v)}
                options={[
                  { label: "0-1/Tag", value: "0-1/Tag" },
                  { label: "2-3/Tag", value: "2-3/Tag" },
                  { label: "4-5/Tag", value: "4-5/Tag" },
                  { label: "6+/Tag", value: "6+/Tag" },
                ]}
              />
            </div>

            {/* Fish */}
            <div className="flex flex-col gap-2 mt-2">
              <p className="text-sm text-font-secondary">Fisch - pro Woche</p>
              <Segment<Fish>
                value={form.fish}
                onChange={(v) => set("fish", v)}
                options={[
                  { label: "0/Wo.", value: "0/Wo." },
                  { label: "1/Wo.", value: "1/Wo." },
                  { label: "2/Wo.", value: "2/Wo." },
                  { label: "3+/Wo.", value: "3+/Wo." },
                ]}
              />
            </div>
          </div>

          <p className="text-xs text-font-secondary mt-4">
            Ernährung beeinflusst Entzündung, Blutzucker und Lipide - und damit
            deinen Lifepath.
          </p>
        </div>

        {/* RIGHT (hide on mobile) */}
        <div className="hidden lg:block flex-1 h-[460px] relative overflow-hidden rounded-[30px]">
          <Image
            src="/data-sharing.jpg"
            alt="Survey Illustration"
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
