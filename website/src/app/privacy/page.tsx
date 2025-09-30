// app/datenbestimmungen/page.tsx
"use client";

export default function DatenbestimmungenPage() {
  return (
    <main className="relative min-h-screen w-full bg-background">
      <section className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12 pt-28 pb-24">
        <h1 className="text-4xl md:text-5xl font-medium mb-10">
          Datenbestimmungen
        </h1>

        <div className="prose prose-lg max-w-none text-font-primary gap-2">
          <h2>1. Verantwortlicher</h2>
          <p>
            Anschrift: The Knowledge House GmbH <br /> E-Mail:
            kontakt@scalable-longevity.com
          </p>

          <h2>2. Erhobene Daten</h2>
          <p>Wir erheben und verarbeiten ausschließlich folgende Daten:</p>
          <ul>
            <li>
              E-Mail-Adresse (z. B. für Newsletter, Produkt-Updates,
              Beta-Zugang)
            </li>
            <li>
              Antworten aus dem Umfrage-Tool zur Verbesserung unseres
              Algorithmus und zur Bereitstellung Ihrer Ergebnisse
            </li>
          </ul>

          <h2>3. Zwecke der Verarbeitung</h2>
          <p>Ihre Daten werden verarbeitet, um:</p>
          <ul>
            <li>
              die Dienste bereitzustellen (Umfrage, Auswertungen, Ergebnisse),
            </li>
            <li>Ihnen Produkt-Updates und Newsletter zuzusenden,</li>
            <li>den Algorithmus des Tests fortlaufend zu verbessern.</li>
          </ul>

          <h2>4. Speicherdauer</h2>
          <p>
            Wir speichern Ihre Daten, solange Sie ein Konto bei uns haben oder
            bis Sie Ihre Einwilligung widerrufen.
          </p>

          <h2>5. Rechtsgrundlage</h2>
          <p>
            Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. a DSGVO
            (Einwilligung) und lit. b DSGVO (Vertragserfüllung).
          </p>

          <h2>6. Ihre Rechte</h2>
          <p>Sie haben nach DSGVO jederzeit das Recht auf:</p>
          <ul>
            <li>Auskunft über Ihre gespeicherten Daten,</li>
            <li>Berichtigung unrichtiger Daten,</li>
            <li>Löschung Ihrer Daten,</li>
            <li>Einschränkung der Verarbeitung,</li>
            <li>Datenübertragbarkeit,</li>
            <li>Beschwerde bei einer Aufsichtsbehörde.</li>
          </ul>

          <h2>7. Hosting & Dienste</h2>
          <p>
            Unsere Website wird bei <strong>Vercel Inc.</strong> gehostet. Ihre
            Daten werden in <strong>Supabase</strong> gespeichert und
            verarbeitet. Mit beiden Dienstleistern bestehen DSGVO-konforme
            Vereinbarungen zur Auftragsverarbeitung.
          </p>

          <h2>8. Kontakt</h2>
          <p>
            Bei Fragen zur Verarbeitung Ihrer personenbezogenen Daten oder zur
            Ausübung Ihrer Rechte wenden Sie sich bitte an:
            <br />
            E-Mail: datenschutz@beispiel.de
          </p>
        </div>
      </section>
    </main>
  );
}
