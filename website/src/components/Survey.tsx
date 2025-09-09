"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { track } from "@vercel/analytics/server";

export default function SurveyCTA() {
  return (
    <section
      aria-labelledby="survey-cta-title"
      className="relative isolate w-full overflow-hidden  border-black/5 bg-white px-6 py-14 sm:px-10 lg:px-14"
    >
      {/* subtle background accent */}
      <div aria-hidden />

      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
        {/* Left: copy */}
        <div>
          <p className="text-sm font-medium uppercase tracking-wider text-secondary">
            Free Preview
          </p>
          <h2
            id="survey-cta-title"
            className="mt-2 text-3xl font-semibold leading-tight text-gray-900 sm:text-4xl"
          >
            Find your{" "}
            <span className="underline decoration-secondary/60">
              Biological Age
            </span>{" "}
            in minutes
          </h2>
          <p className="mt-4 text-gray-600">
            Take our science-based mini survey to see what’s stealing your years
            and where the biggest wins are. Get a personalized breakdown—then
            keep your results, create an account, or download a PDF. No lab coat
            required.
          </p>

          {/* Value bullets */}
          <ul className="mt-6 space-y-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-secondary" />
              Evidence-based questions across sleep, activity, nutrition,
              stress, and habits
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-secondary" />
              Immediate score with top 3 “biggest life-takers” and quick wins
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-secondary" />
              Save progress by creating an account at the end—or export as PDF
            </li>
          </ul>

          {/* Trust + meta */}
          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-gray-500">
            <span>~5-7 min</span>
            <span className="h-1 w-1 rounded-full bg-gray-300" />
            <span>No email required to preview</span>
            <span className="h-1 w-1 rounded-full bg-gray-300" />
            <span>Private & secure</span>
          </div>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/survey"
              className="group inline-flex items-center justify-center rounded-full border bg-secondary px-5 py-4 text-md font-semibold text-white transition hover:translate-y-[-1px] hover:bg-secondary/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary/60"
              onClick={() =>
                track("survey_start_click", {
                  from: "home_hero",
                  variant: "primary",
                })
              }
            >
              Start free survey
              <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-0.5" />
            </Link>

            <Link
              href="/survey#how-it-works"
              className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-5 py-4 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400/50"
            >
              See example results
            </Link>
          </div>

          {/* Footnote */}
          <p className="mt-4 text-xs text-gray-500">
            The in-app version goes deeper and adapts to your answers to
            estimate impact on healthspan. You can sync your preview later - no
            data lost.
          </p>
        </div>

        {/* Right: visual placeholder (swap with illustration or chart preview) */}
        <div className="relative mx-auto w-full max-w-md">
          <div className="aspect-[4/3] w-full rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
            {/* Replace this block with a real preview image */}
            <div className="flex h-full items-center justify-center rounded-lg bg-gradient-to-br from-secondary/10 to-secondary/50">
              <div className="text-center">
                <div className="text-6xl font-black text-secondary">42</div>
                <div className="mt-1 text-sm text-gray-600">
                  Your Biological Age (preview)
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2 text-left text-xs text-gray-700">
                  <div className="rounded-md bg-white/70 p-3">
                    <div className="font-semibold text-gray-900">Sleep</div>
                    <div>Irregular schedule</div>
                  </div>
                  <div className="rounded-md bg-white/70 p-3">
                    <div className="font-semibold text-gray-900">Activity</div>
                    <div>Low Zone-2</div>
                  </div>
                  <div className="rounded-md bg-white/70 p-3">
                    <div className="font-semibold text-gray-900">Nutrition</div>
                    <div>UPFs ↑</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* small caption */}
          <p className="mt-3 text-center text-xs text-gray-500">
            Example preview. Final report includes personalized actions & PDF
            export.
          </p>
        </div>
      </div>
    </section>
  );
}
