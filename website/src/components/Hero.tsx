"use client";

import { PillCTA } from "@/components/ui/PillCTA";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[70vh] md:min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/30" />

      {/* content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 flex flex-col items-start text-left md:items-center md:text-center">
        {/* Display: mobile 5xl, desktop 7xl (our allowed set) */}
        <h1 className="text-white font-semibold leading-tight tracking-tight text-5xl md:text-7xl">
          Unlock More Life
        </h1>

        {/* Lead: 20px */}
        <p className="mt-4 text-white/90 text-xl max-w-xl md:max-w-3xl">
          Simple Changes for lasting Well-Being
        </p>

        {/* CTA: replaces manual Link; colors + tracking baked in */}
        <div className="mt-8">
          <PillCTA
            as="link"
            href="/get-started"
            label="Mit Scalable Starten"
            bgClass="bg-black/40 hover:bg-black/30"
            textClass="text-white"
            iconBgClass="bg-primary"
            iconColorClass="text-white"
            size="md"
            track={{
              event: "get_started_click",
              from: "home_hero",
              variant: "primary",
            }}
          />
        </div>
      </div>
    </section>
  );
}
