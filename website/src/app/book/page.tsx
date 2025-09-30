// app/produkte/page.tsx
"use client";

import Image from "next/image";
import { PillCTA } from "@/components/ui/PillCTA";
import { Check } from "lucide-react";

export default function ProduktePage() {
  return (
    <main className="relative min-h-screen w-full">
      {/* Background image + blur + 10% white overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/background.jpg')" }}
      />
      <div className="absolute inset-0 bg-white/10 backdrop-blur-xl" />

      <section className="relative z-10 mx-auto px-12 pt-28 pb-24">
        {/* Hero */}
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl font-medium">
            Das Buch - dein System für mehr Lebenszeit
          </h1>
          <p className="mt-4 text-xl">
            Das kompakte Handbuch mit den Erkenntnissen aus deiner Umfrage -
            klar, praxisnah und sofort umsetzbar.
          </p>
        </div>

        {/* Two-column: left cover, right content */}
        <div className="mt-6 flex justify-center">
          <div className="inline-flex items-center gap-10 bg-card border border-card-border rounded-[30px] p-5">
            {/* LEFT: Book cover */}
            <Image
              src="/book/book-cover.png"
              alt="Buchcover"
              width={280}
              height={360}
              className="rounded-lg aspect-auto shadow-lg"
            />

            {/* RIGHT: Book text + CTA */}
            <div className="flex flex-col max-w-lg">
              <h2 className="text-2xl md:text-3xl font-semibold">
                Die Anti Bullshit Formel
              </h2>
              <p className="mt-3 text-base">
                Alle Grundlagen aus dem Fragebogen, klare Empfehlungen und
                Schritt-für-Schritt-Pläne für Bewegung, Ernährung, Schlaf und
                Mindset. Wissenschaftlich fundiert und alltagstauglich.
              </p>

              <ul className="mt-5 space-y-2">
                {[
                  "Deine wichtigsten Einflussfaktoren verständlich erklärt",
                  "Konkrete Wochen- und 30-Tage-Pläne",
                  "Checklisten, Routinen und Quick-Wins",
                ].map((txt, i) => (
                  <li key={i} className="flex items-center text-base">
                    <span className="mr-2 flex items-center justify-center w-6 h-6 rounded-full bg-primary/15 text-primary">
                      <Check className="w-4 h-4" />
                    </span>
                    <span>{txt}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <PillCTA
                  as="link"
                  href="https://example.com/book"
                  label="Buch kaufen"
                  size="md"
                  bgClass="bg-primary hover:bg-primary/80"
                  textClass="text-white"
                  iconBgClass="bg-white"
                  iconColorClass="text-primary"
                  track={{
                    event: "book_buy_click",
                    from: "products_page",
                    variant: "primary",
                  }}
                />
                <p className="mt-2 text-base text-font-secondary">
                  Als Hardcover &amp; E-Book erhältlich.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
