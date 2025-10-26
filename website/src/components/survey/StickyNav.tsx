// components/survey/StickyNav.tsx
"use client";

import { PillCTA } from "@/components/ui/PillCTA";

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
    <div className="fixed bottom-0 right-0">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-end md:justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <PillCTA
            as="button"
            label="Zurück"
            noIcon
            onClick={onBack}
            disabled={!canBack}
            bgClass="bg-white/80  hover:bg-white cursor-pointer hover:text-font-primarydisabled:opacity-60"
            textClass="text-font-primary"
          />

          {!atEnd ? (
            <PillCTA
              as="button"
              label="Weiter"
              noIcon
              onClick={onNext}
              disabled={!canNext}
              bgClass="bg-primary/80 hover:bg-primary disabled:opacity-60"
              textClass="text-white"
            />
          ) : (
            <PillCTA
              as="button"
              label="Vorschau anzeigen"
              noIcon
              onClick={onSubmit}
              disabled={!canNext}
              bgClass="bg-primary/80 hover:bg-primary disabled:opacity-60"
              textClass="text-white"
            />
          )}
        </div>
      </div>
    </div>
  );
}
