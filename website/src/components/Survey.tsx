"use client";

import { Check } from "lucide-react";
import { PillCTA } from "@/components/ui/PillCTA";

export default function SurveyCTA() {
  return (
    <section className="flex flex-col gap-10 text-black w-full px-6 md:px-20 min-h-screen">
      <div className="flex flex-col bg-card p-10 md:p-20 rounded-[30px]">
        <div className="flex flex-col justify-center items-center text-center">
          {/* Section heading → 50px target */}
          <h2 className="text-4xl md:text-5xl font-medium">
            Du willst jetzt schon eine Kostprobe unseres Tests?
          </h2>
          {/* Lead → 20px */}
          <p className="font-medium text-xl max-w-4xl mt-6">
            Wir möchten dir ermöglichen auch ganz ohne Bezahlung unseren Test zu
            nutzen. Starte jetzt den Fragebogen und erfahre mehr über deinen
            Körper und deine Gesundheit!
          </p>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-center items-stretch gap-10">
          {/* Paid plan */}
          <div className="flex flex-col flex-1 p-8 bg-primary/40 rounded-[30px]">
            {/* Price */}
            <h3 className="flex flex-row items-baseline justify-center text-2xl md:text-3xl font-semibold pb-10">
              29.99€
              <span className="ml-1 text-base font-medium">/Monat</span>
            </h3>

            <p className="text-base pb-2">Was dir zur Verfügung steht:</p>
            {Array(4)
              .fill("jede menge Optionen")
              .map((opt, i) => (
                <div key={i} className="flex flex-row text-base mb-1">
                  <Check className="inline mr-2" />
                  <p>{opt}</p>
                </div>
              ))}

            <div className="mt-10 flex justify-center">
              <PillCTA
                as="link"
                href="/get-started"
                label="Jetzt Registrieren"
                size="md"
                bgClass="bg-primary"
                textClass="text-white"
                iconBgClass="bg-white"
                iconColorClass="text-primary"
                track={{
                  event: "register_from_survey_click",
                  from: "home_surveyCTA",
                  variant: "primary",
                }}
              />
            </div>
          </div>

          {/* Free trial */}
          <div className="flex flex-col flex-1 p-8 bg-primary/10 border border-primary rounded-[30px]">
            <h3 className="text-2xl md:text-3xl font-semibold pb-10 text-center">
              Kostenlos
            </h3>

            <p className="text-base pb-2">Was dir zur Verfügung steht:</p>
            <div className="flex flex-row text-base mb-1">
              <Check className="inline mr-2" />
              <p>jede menge Optionen</p>
            </div>
            {Array(3)
              .fill("jede menge Optionen")
              .map((opt, i) => (
                <div
                  key={i}
                  className="flex flex-row text-base text-font-secondary mb-1"
                >
                  <Check className="inline mr-2" />
                  <p>{opt}</p>
                </div>
              ))}

            <div className="mt-10 flex justify-center">
              <PillCTA
                as="link"
                href="/survey"
                label="Test Starten"
                size="md"
                bgClass="bg-transparent border border-primary"
                textClass="text-font-primary"
                iconBgClass="bg-primary"
                iconColorClass="text-white"
                track={{
                  event: "test_start_click",
                  from: "home_surveyCTA",
                  variant: "secondary",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
