// app/about/page.tsx
import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto w-full max-w-5xl px-4 pt-28 pb-20">
        {/* Aufmacher */}
        <h1 className="text-4xl font-bold text-font-primary mb-4">
          Mehr Lebenszeit
        </h1>
        <p className="text-lg max-w-2xl">Einfach gesünder Leben Tag für Tag.</p>

        {/* Warum wir */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-font-primary mb-4">
            Warum wir?
          </h2>
          <ul className="space-y-3">
            <li>
              • Keine Pillen oder Nahrungsergänzungsmittel - nur bessere
              Alltagsentscheidungen.
            </li>
            <li>
              • Einfach einzurichten und zu nutzen - egal, ob du gerade erst
              beginnst oder nach neuen Wegen zur Verbesserung suchst.
            </li>
            <li>
              • Wissenschaftlich fundiert, gemacht für deinen Alltag - keine
              komplizierten Routinen oder spezielle Ausrüstung.
            </li>
          </ul>
        </section>

        {/* Für dich */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-font-primary mb-4">
            Für dich
          </h2>
          <p className="max-w-2xl">
            Du arbeitest daran, deine Gesundheit zu verbessern? Wir machen den
            Einstieg und das Dranbleiben einfach. Unser Ziel ist, dass du dich
            befähigt, unterstützt und sicher fühlst, die Gewohnheiten
            aufzubauen, die wirklich zählen.
          </p>
        </section>

        {/* Dein nächster Schritt */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-font-primary mb-4">
            Dein nächster Schritt
          </h2>
          <p className="max-w-2xl">
            Starte heute mit einer kleinen Veränderung - und sieh, wie sich
            deine täglichen Entscheidungen zu einem gesünderen, längeren Leben
            summieren. Wir sind da, um dich zu begleiten, zu ermutigen und jeden
            Schritt nach vorn zu feiern.
          </p>
        </section>

        {/* Unsere Mission */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-font-primary mb-4">
            Unsere Mission
          </h2>
          <p className="max-w-2xl">
            Wir wollen dir helfen, länger und gesünder zu leben - beginnend mit
            den Gewohnheiten, die du jeden Tag aufbaust. Unsere App ist darauf
            ausgelegt, gesundes Leben einfach und übersichtlich zu machen, damit
            du genau weißt, welche Schritte du gehen kannst, um dich besser zu
            fühlen und dich ohne Überforderung stetig weiterzuentwickeln.
          </p>
        </section>
      </div>
    </div>
  );
}
