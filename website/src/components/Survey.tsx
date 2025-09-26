"use client";
import Link from "next/link";
import { Check } from "lucide-react";
import { track } from "@vercel/analytics/server";

export default function SurveyCTA() {
  return (
    <section className="flex flex-col gap-10 text-black w-full px-6 md:px-20 min-h-screen">
      <div className="flex flex-col bg-card p-[80px] rounded-[30px]">
        <div className="flex flex-col justify-center items-center">
          <h2 className="text-[50px] font-medium text-center">
            Du willst jetzt schon eine Kostprobe unseres Tests?
          </h2>
          <p className="font-medium text-[20px] max-w-4xl pb-15 text-center">
            Wir möchten dir ermöglichen auch ganz ohne Bezahlung unseren Test zu
            nutzen. Starte jetzt den Fragebogen und erfahre mehr über deinen
            Körper und deine Gesundheit!
          </p>
        </div>

        <div className="flex justify-center items-center flex-row gap-10">
          {/* sign Up */}
          <div className="flex flex-col p-[40px] bg-primary/40 rounded-[30px]">
            <h3 className="flex flex-row text-[30px] font-mediium items-baseline pb-10 justify-center text-center">
              29.99€<p className="text-sm flex font-medium">/Monat</p>
            </h3>
            <p className="pb-2">Was dir zur Verfügung steht:</p>
            <div className="flex flex-row">
              <Check className="inline mr-2" />
              <p>jede menge Optionen</p>
            </div>
            <div className="flex flex-row">
              <Check className="inline mr-2" />
              <p>jede menge Optionen</p>
            </div>
            <div className="flex flex-row">
              <Check className="inline mr-2" />
              <p>jede menge Optionen</p>
            </div>
            <div className="flex flex-row">
              <Check className="inline mr-2" />
              <p>jede menge Optionen</p>
            </div>
            <Link
              href="/get-started"
              className="mt-10 group inline-flex items-center justify-center rounded-full bg-primary px-5 py-3 text-md font-semibold text-white transition hover:translate-y-[-1px] hover:bg-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              onClick={() =>
                track("register_from_survey_click", {
                  from: "home_hero",
                  variant: "primary",
                })
              }
            >
              Jetzt Registrieren
            </Link>
          </div>
          {/* free trial */}
          <div className="flex flex-col p-[40px] bg-primary/10 border border-primary rounded-[30px]">
            <h3 className="flex flex-row text-[30px] font-mediium items-baseline pb-10 justify-center text-center">
              Kostenslos
            </h3>
            <p className="pb-2">Was dir zur Verfügung steht:</p>
            <div className="flex flex-row">
              <Check className="inline mr-2" />
              <p>jede menge Optionen</p>
            </div>
            <div className="flex flex-row text-font-primary">
              <Check className="inline mr-2" />
              <p>jede menge Optionen</p>
            </div>
            <div className="flex flex-row text-font-primary">
              <Check className="inline mr-2" />
              <p>jede menge Optionen</p>
            </div>
            <div className="flex flex-row text-font-primary">
              <Check className="inline mr-2" />
              <p>jede menge Optionen</p>
            </div>
            <Link
              href="/survey"
              className="mt-10 group inline-flex items-center justify-center rounded-full border border-primary px-5 py-3 text-md font-semibold  transition hover:translate-y-[-1px] hover:bg-primary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              onClick={() =>
                track("test_start_click", {
                  from: "home_hero",
                  variant: "primary",
                })
              }
            >
              Test Starten
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
