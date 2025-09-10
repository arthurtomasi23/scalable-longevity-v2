// components/survey/ResultsPreview.tsx
"use client";
import Card from "@/components/ui/Card";
import type { ScoreResult } from "@/lib/surveyTypes";

export default function ResultsPreview({ preview }: { preview: ScoreResult }) {
  return (
    <div className="mx-auto w-full max-w-5xl px-4 pb-6">
      <Card>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-font-primary">
            Your preview results
          </h3>
          <div
            className={
              preview.totalDelta <= 0 ? "text-emerald-600" : "text-amber-600"
            }
          >
            Δ Biological age:{" "}
            <span className="font-bold">{preview.totalDelta.toFixed(1)}</span>{" "}
            yrs
          </div>
        </div>

        {typeof preview.bmi === "number" && (
          <p className="mt-1 text-sm text-font-secondary">BMI: {preview.bmi}</p>
        )}

        <div className="mt-4 grid gap-2 sm:grid-cols-2">
          {preview.breakdown.map((b, i) => (
            <div
              key={i}
              className="flex items-center justify-between rounded-xl border border-card-border bg-white px-3 py-2 text-sm"
            >
              <span className="text-font-primary">
                {b.rule}: <span className="text-font-secondary">{b.label}</span>
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
      </Card>
    </div>
  );
}
