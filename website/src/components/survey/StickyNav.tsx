// components/survey/StickyNav.tsx
"use client";
import clsx from "clsx";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

export default function StickyNav({
  canBack,
  canNext,
  atEnd,
  onBack,
  onNext,
  onSubmit,
}: {
  canBack: boolean;
  canNext: boolean;
  atEnd: boolean;
  onBack: () => void;
  onNext: () => void;
  onSubmit: () => void;
}) {
  return (
    <div className="fixed inset-x-0 bottom-0 bg-white/80 backdrop-blur border-t border-card-border">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-3">
        <div className="text-xs text-font-secondary">
          Need to stop? You can create an account on the next screen to save
          progress.
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onBack}
            disabled={!canBack}
            className={clsx(
              "inline-flex items-center gap-2 rounded-full border border-card-border bg-card px-4 py-2 text-sm font-medium text-font-primary transition",
              !canBack ? "opacity-50 cursor-not-allowed" : "hover:bg-white"
            )}
          >
            <ArrowLeft className="h-4 w-4" />
            Back
          </button>

          {!atEnd ? (
            <button
              onClick={onNext}
              disabled={!canNext}
              className={clsx(
                "inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white transition",
                !canNext
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-primary/90"
              )}
            >
              Next
              <ArrowRight className="h-4 w-4" />
            </button>
          ) : (
            <button
              onClick={onSubmit}
              disabled={!canNext}
              className={clsx(
                "inline-flex items-center gap-2 rounded-full bg-secondary px-5 py-2 text-sm font-semibold text-white transition",
                !canNext
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-secondary/90"
              )}
            >
              <Check className="h-4 w-4" />
              See my preview results
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
