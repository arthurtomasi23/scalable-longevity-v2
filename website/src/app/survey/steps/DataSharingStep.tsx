// components/survey/steps/DataSharingStep.tsx
"use client";

import { useEffect } from "react";
import Image from "next/image";
import type { FormState } from "@/lib/surveyTypes";

export default function DataSharingStep({
  form,
  set,
  onStart,
}: {
  form: FormState;
  set: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
  onStart: () => void;
}) {
  const choice = form.share_data;

  useEffect(() => {
    if (choice === null) set("share_data", true);
  }, [choice, set]);

  const share = choice ?? true;

  return (
    <div className="w-full h-full flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-4xl flex flex-col lg:flex-row gap-5">
        {/* LEFT */}
        <div className="flex-1 h-[460px] rounded-[30px] border border-card-border bg-card p-8 flex flex-col justify-between">
          <div>
            <h1 className="text-2xl font-semibold mb-4">
              Hilf uns den Lifepath Analyzer noch besser zu machen...
            </h1>
            <p className="text-sm text-font-secondary">
              Der Selbsttest ist mit beiden Auswahlen möglich
            </p>
          </div>

          <div>
            <div className="bg-background p-1 rounded-full flex items-center gap-1">
              <button
                type="button"
                onClick={() => set("share_data", false)}
                className={[
                  "cursor-pointer w-full rounded-full py-3 text-sm transition",
                  !share ? "bg-primary text-white" : "bg-transparent",
                ].join(" ")}
              >
                Nicht Teilen
              </button>

              <button
                type="button"
                onClick={() => set("share_data", true)}
                className={[
                  "cursor-pointer w-full rounded-full py-3 text-sm transition",
                  share ? "bg-primary text-white" : "bg-transparent",
                ].join(" ")}
              >
                Teilen
              </button>
            </div>

            <p className="mt-4 text-xs text-font-secondary text-center">
              Deine Antworten helfen zukünftige Empfehlungen noch genauer und
              hilfreicher zu machen
            </p>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex-1 h-[460px] relative overflow-hidden rounded-[30px]">
          <Image
            src="/survey-images/start.jpg"
            alt="Data Sharing Illustration"
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
      </div>
      <div className="flex mt-5 justify-end">
        <button
          type="button"
          onClick={onStart}
          className="py-3 px-6 bg-primary text-white rounded-full cursor-pointer"
        >
          Test Starten
        </button>
      </div>
    </div>
  );
}
