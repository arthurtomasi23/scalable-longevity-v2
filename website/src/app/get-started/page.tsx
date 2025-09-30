// app/get-started/page.tsx
"use client";

import { PillCTA } from "@/components/ui/PillCTA";
import { PillInput } from "@/components/ui/PillInput";

export default function GetStartedPage() {
  return (
    <main className="relative min-h-screen w-full">
      {/* Background image + blur + overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/background.jpg')" }}
      />
      <div className="absolute inset-0 bg-white/10 backdrop-blur-xl" />

      <section className="relative z-10 flex flex-col items-center justify-center text-center px-6 pt-32 pb-24 h-screen">
        {/* Heading */}
        <h1 className="text-4xl text-white md:text-5xl font-medium max-w-3xl">
          Sei einer der Ersten - sichere dir Zugang zur Beta-App
        </h1>
        <p className="mt-4 text-xl max-w-2xl text-primary">
          Unsere App befindet sich noch in der Entwicklung. Trage dich jetzt ein
          und erhalte Updates sowie exklusiven Zugang zur ersten Beta-Version.
        </p>

        {/* Input + Button */}
        <div className="mt-10 w-full max-w-xl flex flex-col sm:flex-row gap-3">
          <PillInput
            type="email"
            placeholder="Ihre E-Mail-Adresse"
            pillSize="md"
            bgClass="bg-black/10"
            textClass="text-font-primary placeholder-font-secondary"
            autoComplete="email"
            aria-label="E-Mail-Adresse"
            className="text-white"
          />
          <PillCTA
            as="button"
            label="Benachrichtigen"
            size="md"
            bgClass="bg-primary hover:bg-primary/80"
            textClass="text-white"
            noIcon
            track={{
              event: "newsletter_subscribe_click",
              from: "get_started_page",
              variant: "primary",
            }}
            className="sm:w-auto w-full"
          />
        </div>

        {/* Disclaimer */}
        <p className="mt-4 text-base text-font-secondary">
          Wir melden uns nur mit relevanten Updates - kein Spam.
        </p>
      </section>
    </main>
  );
}
