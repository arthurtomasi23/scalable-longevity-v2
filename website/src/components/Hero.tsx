"use client";

import { PillCTA } from "@/components/ui/PillCTA";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[70vh] md:min-h-screen bg-cover bg-center flex justify-center items-center text-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/30" />

      {/* content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 flex flex-col items-center text-center">
        {/* Heading */}
        <h1 className="text-white font-semibold leading-tight tracking-tight w-5xl text-5xl md:text-7xl">
          Du entscheidest, wie alt dein Körper wirklich ist
        </h1>

        {/* Lead */}
        <p className="mt-4 text-white/90 text-xl max-w-xl md:max-w-3xl">
          Finde heraus, wie du jeden Tag an gesunder Lebenszeit gewinnst
        </p>

        {/* CTA */}
        <div className="mt-8">
          <PillCTA
            as="link"
            href="/survey"
            label="Starte mit Longevity"
            bgClass="bg-black/40 hover:bg-black/30"
            textClass="text-white"
            iconBgClass="bg-primary"
            iconColorClass="text-white"
            size="md"
            track={{
              event: "start_test_click",
              from: "home_hero",
              variant: "primary",
            }}
          />
        </div>
      </div>
    </section>
  );
}
