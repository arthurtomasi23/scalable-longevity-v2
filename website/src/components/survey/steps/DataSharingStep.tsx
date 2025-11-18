// components/survey/steps/DataSharingStep.tsx
"use client";

import { useEffect } from "react";
import Card from "@/components/survey/Card";
import type { FormState } from "@/lib/surveyTypes";

export default function DataSharingStep({
  form,
  set,
}: {
  form: FormState;
  set: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
}) {
  const choice = form.share_data;

  // Make "Yes" the real default on first load
  useEffect(() => {
    if (choice === null) {
      set("share_data", true);
    }
  }, [choice, set]);

  return (
    <Card>
      <div className="flex flex-col items-center text-center space-y-4 px-6">
        <h2 className="text-2xl font-semibold">
          Hilf uns, den LifePathAnalyzer noch besser zu machen
        </h2>

        <p className="max-w-xl text-font-secondary">
          Deine Antworten können - vollständig anonym - dazu beitragen, unseren
          Algorithmus zu verbessern. So werden zukünftige Empfehlungen noch
          genauer und hilfreicher.
        </p>

        <ul className="space-y-1 text-sm">
          <li>
            • <strong>Besser für dich:</strong> Wir erkennen Muster in den Daten
            und können dein Risiko besser einschätzen.
          </li>
          <li>
            • <strong>Besser für andere:</strong> Deine Antworten helfen auch
            zukünftigen Nutzer:innen, ihre „Healthspan“ zu verlängern.
          </li>
          <li>
            • <strong>Datenschutz first:</strong> Keine E-Mail, kein Name, keine
            Identifikation - nur anonyme Antwortmuster.
          </li>
        </ul>
      </div>

      {/* Selection Cards */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 max-w-lg mx-auto">
        {/* YES CARD */}
        <div
          onClick={() => set("share_data", true)}
          className={[
            "cursor-pointer rounded-xl px-6 py-5 text-center shadow-sm transition border",
            choice === true
              ? "bg-primary text-white border-primary shadow-md scale-[1.02]"
              : "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20",
          ].join(" ")}
        >
          <p className="text-base font-semibold">Ja, anonym teilen</p>
          <p className="text-xs opacity-80 mt-1">
            Empfohlen - hilft uns, bessere Analysen zu erstellen.
          </p>
        </div>

        {/* NO CARD */}
        <div
          onClick={() => set("share_data", false)}
          className={[
            "cursor-pointer rounded-xl px-6 py-5 text-center shadow-sm transition border",
            choice === false
              ? "bg-primary text-white border-primary shadow-md scale-[1.02]"
              : "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20",
          ].join(" ")}
        >
          <p className="text-base font-semibold">Nein, nicht teilen</p>
          <p className="text-xs opacity-80 mt-1">
            Du kannst trotzdem den gesamten Selbsttest machen.
          </p>
        </div>
      </div>

      <p className="mt-6 text-[11px] text-font-secondary text-center max-w-md mx-auto">
        Deine Auswahl gilt erst, wenn du „Weiter“ klickst. Beide Optionen
        ermöglichen die volle Nutzung des Selbsttests.
      </p>
    </Card>
  );
}
