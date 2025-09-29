"use client";

import { Check, X } from "lucide-react";
import { PillCTA } from "@/components/ui/PillCTA";

export default function SurveyCTA() {
  return (
    <section
      id="survey"
      className="scroll-mt-[15vh] flex flex-col gap-10 text-black w-full px-6 md:px-20 min-h-screen"
    >
      {/* Heading + lead */}
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl md:text-5xl font-medium">
          Du willst jetzt schon eine Kostprobe unseres Tests?
        </h2>
        <p className="font-medium text-xl max-w-4xl mt-6">
          Wir möchten dir ermöglichen, auch ganz ohne Bezahlung unseren Test zu
          nutzen. Starte jetzt den Fragebogen und erfahre mehr über deinen
          Körper und deine Gesundheit!
        </p>
      </div>

      {/* Cards: same height, buttons aligned, cards hug content */}
      <div className="mt-12 flex flex-col md:flex-row justify-center items-stretch gap-8">
        {/* Paid / Subscription */}
        <div className="relative w-full max-w-md rounded-[30px] p-8 bg-primary text-white flex flex-col">
          <span className="absolute top-5 right-5 px-3 py-1 rounded-full bg-white/15 text-white text-sm font-semibold">
            Monatlich
          </span>
          {/* Price */}
          <div className="flex flex-col my-5">
            <div className="text-3xl md:text-3xl font-semibold">29,99€</div>
            <div className="text-base text-white/80">/Monat</div>
          </div>

          <p className="text-base mb-3">Du erhältst:</p>
          <ul className="space-y-2">
            {[
              "Speicherung deiner Umfrage-Daten",
              "Voller Zugriff auf alle Habit-Building-Tools",
              "Voller Zugriff auf unsere Mobile-App",
              "Erweiterte Auswertungen & Updates",
            ].map((txt, i) => (
              <li key={i} className="flex items-center text-base">
                <span className="mr-2 flex items-center justify-center w-6 h-6 rounded-full bg-white/20 text-white">
                  <Check className="w-4 h-4" />
                </span>
                <span>{txt}</span>
              </li>
            ))}
          </ul>

          {/* Button pinned to bottom; full width & centered text */}
          <div className="mt-auto">
            <PillCTA
              as="link"
              href="/get-started"
              label="Jetzt abonnieren"
              size="md"
              bgClass="bg-white hover:bg-white/90"
              textClass="text-[#2E4A3F]"
              noIcon
              className="w-full justify-center mt-10"
              track={{
                event: "register_from_survey_click",
                from: "home_surveyCTA",
                variant: "primary",
              }}
            />
            <p className="mt-3 text-base text-white/85 text-center">
              Monatlich kündbar
            </p>
          </div>
        </div>

        {/* Free / Umfrage (not a plan) */}
        <div className="relative w-full max-w-md rounded-[30px] p-8 border border-card-border bg-card flex flex-col">
          <span className="absolute top-5 right-5 px-3 py-1 rounded-full bg-black/10 text-font-primary text-sm font-semibold">
            Umfrage (kostenlos)
          </span>
          <div className="flex items-center justify-between mb-6">
            {/* Price */}
            <div className="flex flex-col my-5">
              <div className="text-3xl md:text-3xl font-semibold">0€</div>
              <div className="text-base text-font-secondary">einmalig</div>
            </div>
          </div>

          <p className="text-base mb-3">Du erhältst:</p>
          <ul className="space-y-2">
            <li className="flex items-center text-base">
              <span className="mr-2 flex items-center justify-center w-6 h-6 rounded-full bg-primary/15 text-primary">
                <Check className="w-4 h-4" />
              </span>
              <span>Erstauswertung deiner Antworten</span>
            </li>

            {[
              "Speicherung deiner Umfrage-Daten",
              "Voller Zugriff auf alle Habit-Building-Tools",
              "Voller Zugriff auf unsere Mobile-App",
            ].map((txt, i) => (
              <li
                key={i}
                className="flex items-center text-base text-font-secondary"
              >
                <span className="mr-2 flex items-center justify-center w-6 h-6 rounded-full bg-card-border text-font-secondary">
                  <X className="w-4 h-4" />
                </span>
                <span>{txt}</span>
              </li>
            ))}
          </ul>

          {/* Button pinned to bottom; full width & centered text */}
          <div className="mt-auto">
            <PillCTA
              as="link"
              href="/survey"
              label="Umfrage starten"
              size="md"
              bgClass="bg-transparent border border-primary hover:bg-primary/10"
              textClass="text-font-primary"
              noIcon
              className="w-full justify-center mt-10"
              track={{
                event: "test_start_click",
                from: "home_surveyCTA",
                variant: "secondary",
              }}
            />
            <p className="mt-3 text-base text-font-secondary text-center">
              Die Umfrage ist kein Abo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
