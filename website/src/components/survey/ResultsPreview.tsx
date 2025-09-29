// components/survey/ResultsPreview.tsx
"use client";
import Card from "@/components/survey/Card";
import type { ScoreResult } from "@/lib/surveyTypes";

export default function ResultsPreview({
  preview,
  chronoAge,
}: {
  preview: ScoreResult;
  chronoAge: number;
}) {
  const bioAge = chronoAge + preview.totalDelta;
  const younger = preview.totalDelta < 0;
  const absDelta = Math.abs(preview.totalDelta);

  return (
    <div className="mx-auto w-full max-w-5xl px-4 pb-6">
      <h3 className="text-2xl font-semibold text-font-primary mb-4">
        Your Results
      </h3>

      {/* Hero numbers */}
      <Card>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:items-center">
          {/* Big Biological Age */}
          <div className="md:col-span-2">
            <div className="text-sm text-font-secondary">Biological Age</div>
            <div className="mt-1 flex items-baseline gap-3">
              <span className="text-6xl font-extrabold tracking-tight text-font-primary">
                {bioAge.toFixed(1)}
              </span>
              <span className="text-base text-font-secondary">years</span>
            </div>

            {/* Delta badge */}
            <div className="mt-3">
              <span
                className={[
                  "inline-flex items-center rounded-full px-3 py-1 text-sm font-semibold",
                  younger
                    ? "bg-emerald-50 text-emerald-700"
                    : "bg-amber-50 text-amber-700",
                ].join(" ")}
              >
                {younger ? "Younger by " : "Older by "}
                {absDelta.toFixed(1)} yrs vs. chronological
              </span>
            </div>
          </div>

          {/* Chronological Age */}
          <div className="md:justify-self-end">
            <div className="text-sm text-font-secondary">Chronological Age</div>
            <div className="mt-1 text-3xl font-bold text-font-primary">
              {chronoAge.toFixed(1)}
              <span className="ml-2 text-sm font-normal text-font-secondary">
                years
              </span>
            </div>
          </div>
        </div>

        {/* Optional BMI line */}
        {typeof preview.bmi === "number" && (
          <p className="mt-5 text-sm text-font-secondary">BMI: {preview.bmi}</p>
        )}

        {/* Givers & Takers */}
        <div className="mt-6">
          <h4 className="text-sm font-semibold text-font-primary mb-2">
            Year givers & takers
          </h4>
          <div className="grid gap-2 sm:grid-cols-2">
            {preview.breakdown.map((b, i) => (
              <div
                key={i}
                className="flex items-center justify-between rounded-xl border border-card-border bg-white px-3 py-2 text-sm"
              >
                <span className="text-font-primary">
                  {b.rule}:{" "}
                  <span className="text-font-secondary">{b.label}</span>
                </span>
                <span
                  className={
                    b.delta < 0
                      ? "text-emerald-600"
                      : b.delta > 0
                      ? "text-amber-700"
                      : "text-font-secondary"
                  }
                >
                  {b.delta > 0 ? "+" : ""}
                  {b.delta}
                </span>
              </div>
            ))}
          </div>
        </div>
      </Card>
    </div>
  );
}
