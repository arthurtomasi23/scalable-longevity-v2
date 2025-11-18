// components/survey/ResultsPreview.tsx
"use client";

import Card from "@/components/survey/Card";
import { PillCTA } from "@/components/ui/PillCTA";
import HoverCard from "@/components/survey/HoverCard";
import { Info, Check } from "lucide-react";
import type { ScoreResult } from "@/lib/surveyTypes";
import { useRouter } from "next/navigation";

export default function ResultsPreview({
  preview,
  chronoAge,
}: {
  preview: ScoreResult;
  chronoAge: number;
}) {
  const bioAge = chronoAge + preview.totalDelta;
  const delta = preview.totalDelta; // + = älter, - = jünger
  const absDelta = Math.abs(delta);
  const router = useRouter();

  // ---- Gauge (halbkreis) ----
  // map delta in [-20,+20] Jahren auf [0..1] (rechts..links)
  const RANGE = 20; // map delta in [-20, +20] -> [0..1]
  const t = Math.max(0, Math.min(1, (delta + RANGE) / (2 * RANGE)));

  const cx = 160,
    cy = 160,
    r = 130; // center & radius (bigger)
  const C = Math.PI * r;
  const segLen = C / 3;

  const colors = ["#FDE2E2", "#FFE8CC", "#E0F3E8"];
  const dotColors = ["#E06363", "#E7A04E", "#4A8F74"];
  // invert index so positive delta (left) is red, negative (right) is green
  const segIndex = Math.min(2, Math.floor((1 - t) * 3));

  // indicator position along arc: t=0 (right) -> 0, t=1 (left) -> pi
  const theta = Math.PI * t;
  const ix = cx + r * Math.cos(theta);
  const iy = cy - r * Math.sin(theta);

  const stealers = [...preview.breakdown]
    .filter((b) => b.delta > 0)
    .sort((a, b) => b.delta - a.delta)
    .slice(0, 3);

  return (
    <div className="mx-auto w-full max-h-screen flex-col max-w-6xl flex items-center justify-center">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 pt-10">
        {/* LEFT: Ergebnisse */}
        <Card>
          {/* Gauge */}
          <div className="flex flex-col items-center">
            <div className="relative w-[320px] h-[200px]">
              <svg
                viewBox="0 0 320 200"
                className="absolute inset-0 w-full h-full"
                aria-hidden
              >
                {/* 3 colored background segments */}
                {[0, 1, 2].map((i) => (
                  <path
                    key={i}
                    d={`M${cx - r},${cy} A${r},${r} 0 0,1 ${cx + r},${cy}`}
                    fill="none"
                    stroke={colors[i]}
                    strokeWidth="20"
                    strokeLinecap="round"
                    strokeDasharray={`${segLen} ${C - segLen}`}
                    strokeDashoffset={-(i * segLen)}
                  />
                ))}

                {/* indicator dot */}
                <circle
                  cx={ix}
                  cy={iy}
                  r="13"
                  fill="#fff"
                  stroke={dotColors[segIndex]}
                  strokeWidth="7"
                  style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.25))" }}
                />

                {/* Center number inside the circle */}
                <text
                  x={cx}
                  y={cy - 10}
                  textAnchor="middle"
                  fontSize="56"
                  fontWeight="bold"
                  fill="#2E4A3F"
                  style={{ fontFamily: "inherit" }}
                >
                  {absDelta.toFixed(1)}
                </text>
                <text
                  x={cx}
                  y={cy + 30}
                  textAnchor="middle"
                  fontSize="20"
                  fill="#6B7A7A"
                  style={{ fontFamily: "inherit" }}
                >
                  Pace of Aging <br />
                </text>
              </svg>
            </div>
          </div>

          {/* Bio / Chrono */}
          <div className="mt-8 grid grid-cols-2 gap-6 text-center">
            <div>
              <div className="text-xl font-semibold text-font-primary">
                {bioAge.toFixed(0)}
              </div>
              <div className="text-base text-font-secondary">
                Biologisches Alter
              </div>
            </div>
            <div>
              <div className="text-xl font-semibold text-font-primary">
                {chronoAge.toFixed(0)}
              </div>
              <div className="text-base text-font-secondary">
                Chronologisches Alter
              </div>
            </div>
          </div>

          {/* Top 3 Räuber */}
          <div className="mt-8">
            <div className="text-base font-semibold text-font-primary text-center">
              Deine Top&nbsp;3 Lebenszeit-Räuber
            </div>
            <div className="mt-3 space-y-2">
              {stealers.map((b, i) => (
                <div
                  key={`${b.rule}-${i}`}
                  className="flex items-center justify-between rounded-[30px] border border-card-border bg-card pl-4 pr-2 py-2"
                >
                  <div className="flex items-center pl-auto">
                    <span className="text-base text-font-primary">
                      {b.rule}
                    </span>
                    <HoverCard
                      trigger={
                        <Info className="w-4 h-4 text-font-secondary flex" />
                      }
                      placement="top"
                    >
                      <div className="font-semibold mb-1">Warum zählt das?</div>
                      <p className="text-font-secondary">
                        Diese Gewohnheit bzw. dieser Faktor erhöht dein
                        biologisches Alter in unserem Modell.
                      </p>
                    </HoverCard>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-[#E06363]/15 text-[#B33636] text-base font-semibold">
                    {b.delta.toFixed(0)}&nbsp;Jahre
                  </span>
                </div>
              ))}
              {stealers.length === 0 && (
                <div className="text-base text-font-secondary text-center">
                  Keine negativen Faktoren gefunden - stark!
                </div>
              )}
            </div>
          </div>
        </Card>

        {/* RIGHT: Abo-Karte */}
        <div className="relative w-full max-w-md rounded-[30px] p-8 bg-primary text-white flex flex-col md:ml-auto">
          <span className="absolute top-5 right-5 px-3 py-1 rounded-full bg-white/15 text-white text-sm font-semibold">
            Monatlich
          </span>

          <div className="flex flex-col my-5">
            <div className="text-3xl font-semibold">9,99€</div>
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
                event: "register_from_results_click",
                from: "survey_results",
                variant: "primary",
              }}
            />
            <p className="mt-3 text-base text-white/85 text-center">
              Monatlich kündbar
            </p>
          </div>
        </div>
      </div>
      <button
        className="mt-10 p-5 cursor-pointer hover:text-primary text-white underline font-semibold"
        onClick={() => router.push("/")}
      >
        Zurück zur Startseite
      </button>
    </div>
  );
}
