"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { track } from "@vercel/analytics";

type Hotspot = {
  id: string;
  x: number; // % from left (0-100)
  y: number; // % from top  (0-100)
  title: string;
  text: string;
};

type Slide = {
  src: string;
  hotspots: Hotspot[];
};

const slides: Slide[] = [
  {
    src: "/mockup1.png",
    hotspots: [
      {
        id: "m1-1",
        x: 53,
        y: 38,
        title: "Pace of Aging",
        text: "The Pace in which your body is aging, vs chronological age.",
      },
      {
        id: "m1-2",
        x: 59,
        y: 65,
        title: "Your Top Three",
        text: "The three biomarkers that are contributing most to your Pace of Aging.",
      },
    ],
  },
  {
    src: "/mockup2.png",
    hotspots: [
      {
        id: "m2-1",
        x: 60,
        y: 65,
        title: "Habit Coaching",
        text: "Micro-coaching nudges matched to your weak spots.",
      },
    ],
  },
  {
    src: "/mockup3.png",
    hotspots: [
      {
        id: "m3-1",
        x: 23,
        y: 30,
        title: "Progress Trends",
        text: "Sleep, activity, nutrition trends with weekly deltas.",
      },
    ],
  },
];

export default function Features() {
  const [current, setCurrent] = useState(0);
  const [openHotspot, setOpenHotspot] = useState<string | null>(null);

  const prevImage = () =>
    setCurrent((p) => (p === 0 ? slides.length - 1 : p - 1));
  const nextImage = () =>
    setCurrent((p) => (p === slides.length - 1 ? 0 : p + 1));

  const currentSlide = slides[current];

  return (
    <div className="flex flex-col p-20">
      {/* Carousel */}
      <div className="flex flex-row items-center justify-center gap-10">
        <button
          className="bg-black/20 rounded-full p-4 flex items-center justify-center"
          onClick={prevImage}
          aria-label="Previous image"
        >
          <ChevronLeft size={32} color="white" />
        </button>

        {/* Card wrapper: fixed size, image fills completely */}
        <div className="relative w-full max-w-[1098px] h-[680px] rounded-3xl overflow-hidden bg-card border border-card-border shadow-sm">
          <Image
            src={currentSlide.src}
            alt={`Feature image ${current + 1}`}
            fill
            className="object-cover" // fill the card; no empty margins
            sizes="(max-width: 1200px) 100vw, 1098px"
            priority
          />

          {/* Hotspots */}
          {currentSlide.hotspots.map((hs) => {
            const isOpen = openHotspot === hs.id;
            return (
              <div
                key={hs.id}
                className="group absolute"
                style={{
                  left: `${hs.x}%`,
                  top: `${hs.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenHotspot((prev) => (prev === hs.id ? null : hs.id));
                  track("hotspot_open", { slide: current, hotspot: hs.id });
                }}
                onMouseEnter={() =>
                  track("hotspot_hover", { slide: current, hotspot: hs.id })
                }
              >
                {/* White pulsing marker */}
                <div className="relative h-5 w-5">
                  {/* outer white pulse */}
                  <span className="absolute inset-0 rounded-full ring-2 ring-white/80 animate-ping" />
                  {/* inner white dot with subtle halo */}
                  <span className="absolute inset-0 rounded-full bg-white shadow-[0_0_0_4px_rgba(255,255,255,0.35)]" />
                </div>

                {/* Tooltip */}
                <div
                  className={[
                    "absolute z-10 mt-3 w-64 rounded-xl border border-card-border bg-card p-3 text-sm shadow-lg",
                    "transition-all duration-200 opacity-0 translate-y-1 pointer-events-none",
                    "group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto",
                    isOpen
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "",
                  ].join(" ")}
                  style={{ left: "50%", transform: "translateX(-50%)" }}
                >
                  <div className="text-font-primary font-semibold">
                    {hs.title}
                  </div>
                  <div className="mt-1 text-font-secondary">{hs.text}</div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          className="bg-black/20 rounded-full p-4 flex items-center justify-center"
          onClick={nextImage}
          aria-label="Next image"
        >
          <ChevronRight size={32} color="white" />
        </button>
      </div>

      {/* Download CTA */}
      <div className="flex flex-col items-center justify-center py-12 w-full">
        <p className="mb-6 text-lg font-semibold text-gray-800">
          Download the App
        </p>
        <div className="flex flex-row gap-4">
          {/* App Store */}
          <a
            href="https://apps.apple.com/app/your-app-id"
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 w-auto"
            onClick={() =>
              track("store_click", { store: "apple", from: "download_section" })
            }
          >
            <Image
              src="/badges/apple_us.svg"
              alt="Download on the App Store"
              width={180}
              height={60}
              className="h-full w-auto"
            />
          </a>

          {/* Google Play */}
          <a
            href="https://play.google.com/store/apps/details?id=your.app.id"
            target="_blank"
            rel="noopener noreferrer"
            className="h-12 w-auto"
            onClick={() =>
              track("store_click", {
                store: "google",
                from: "download_section",
              })
            }
          >
            <Image
              src="/badges/google-play_us.png"
              alt="Get it on Google Play"
              width={646}
              height={250}
              className="h-full w-auto"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
