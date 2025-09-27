"use client";

import React from "react";
import { PillCTA } from "@/components/ui/PillCTA";
import { PillInput } from "@/components/ui/PillInput";

export default function Newsletter() {
  return (
    <section className="flex flex-col justify-center items-center gap-10 text-black w-full px-6 md:px-20 min-h-screen">
      {/* Heading + Lead */}
      <div className="flex flex-col justify-center items-center max-w-5xl text-center">
        <h2 className="text-4xl md:text-5xl font-medium">
          Bleiben Sie immer auf dem neuesten Stand und verpassen Sie nichts!
        </h2>
        <p className="font-medium text-xl max-w-4xl mt-4">
          Uns ist wichtig, dass Sie immer Zugang zu den neuesten Updates und
          Informationen haben.
        </p>
      </div>

      {/* Input + CTA (mobile stacks) */}
      <div className="w-full max-w-3xl flex flex-col sm:flex-row items-stretch gap-3">
        <PillInput
          type="email"
          placeholder="Ihre E-Mail-Adresse"
          pillSize="md" // matches PillCTA md height
          bgClass="bg-black/10"
          textClass="text-font-primary placeholder-font-secondary"
          autoComplete="email"
          aria-label="E-Mail-Adresse"
        />
        <PillCTA
          as="link"
          href="/get-started"
          label="Abonnieren"
          size="md"
          bgClass="bg-primary"
          textClass="text-white"
          iconBgClass="bg-white"
          iconColorClass="text-[#2E4A3F]"
          track={{
            event: "newsletter_subscribe_click",
            from: "home_newsletter",
            variant: "primary",
          }}
          className="sm:w-auto w-full"
        />
      </div>
    </section>
  );
}
