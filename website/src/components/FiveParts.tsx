"use client";

import { ArrowUpRight } from "lucide-react";
import React from "react";
import Image from "next/image";

// Simple responsive hook
function useMediaQuery(query: string) {
  const [matches, setMatches] = React.useState(false);

  React.useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    listener(); // set initial
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

const items = [
  {
    key: "wissen",
    title: "Prävention",
    text: "Verstehe, welche Maßnahmen dein biologisches Alter senken und deine Gesundheit langfristig sichern.",
    img: "/knowledge.jpg",
    position: "col-start-1 col-span-2 row-start-1 row-span-2",
  },
  {
    key: "bewegung",
    title: "Bewegung",
    text: "Verbessere Kraft, Mobilität und Energie mit personalisierten Bewegungsroutinen.",
    img: "/sport.jpg",
    position: "col-start-3 col-span-2 row-start-1 row-span-1",
  },
  {
    key: "ernaehrung",
    title: "Ernährung",
    text: "Entdecke Ernährungsstrategien, die Zellalterung verlangsamen und Vitalität fördern.",
    img: "/food.jpg",
    position: "col-start-3 col-span-1 row-start-2 row-span-1",
  },
  {
    key: "schlaf",
    title: "Erholung & Stress-Balance",
    text: "Optimiere Schlaf und Regeneration für mehr Fokus und innere Stärke.",
    img: "/sleep.jpg",
    position: "col-start-4 col-span-1 row-start-2 row-span-1",
  },
  {
    key: "mindset",
    title: "Sinn & Soziale Interaktionen",
    text: "Stärkere Verbindungen, mehr Lebensfreude - sozial gesund altern.",
    img: "/social.jpg",
    position: "col-start-1 col-span-4 row-start-3 row-span-2",
  },
];

export default function FiveParts() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  return (
    <section
      id="fiveparts"
      className="scroll-mt-[15vh] flex flex-col gap-10 text-black w-full px-6 md:px-20 min-h-[60vh]"
    >
      {/* Header */}
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl md:text-5xl font-medium">
          Fünf Handlungsfelder,
          <br /> die dein Leben nachhaltig verändern
        </h2>
        <p className="font-medium text-xl max-w-4xl mt-4">
          Von Ernährung bis Erholung – wir helfen dir, in Balance zu leben und
          deine Longevity-Ziele zu erreichen.
        </p>
      </div>

      {/* Layout Switch */}
      {isDesktop ? (
        // 💻 DESKTOP — Bento Layout
        <div
          className="
            grid gap-4
            grid-cols-4
            auto-rows-[240px] xl:auto-rows-[260px]
          "
        >
          {items.map((it) => (
            <article
              key={it.key}
              className={`relative overflow-hidden rounded-[30px] group cursor-pointer ${it.position}`}
            >
              <Image
                src={it.img}
                alt={it.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
                priority={it.key === "wissen"}
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.9) 100%)",
                }}
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex justify-end -m-3">
                  <div className="flex justify-center items-center w-[60px] h-[60px] rounded-full bg-white/95 backdrop-blur-sm flex-shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    <ArrowUpRight
                      className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                      color="#2E4A3F"
                    />
                  </div>
                </div>
                <div className="text-white">
                  <h3 className="text-xl leading-tight">{it.title}</h3>
                  <p className="text-base opacity-90">{it.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        // 📱 MOBILE — Stacked Layout
        <div className="flex flex-col gap-4">
          {items.map((it) => (
            <article
              key={it.key}
              className="relative overflow-hidden rounded-[30px] group cursor-pointer min-h-[320px]"
            >
              <Image
                src={it.img}
                alt={it.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.9) 100%)",
                }}
              />
              <div className="absolute inset-0 p-6 flex flex-col justify-between">
                <div className="flex justify-end -m-3">
                  <div className="flex justify-center items-center w-[60px] h-[60px] rounded-full bg-white/95 backdrop-blur-sm flex-shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                    <ArrowUpRight
                      className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                      color="#2E4A3F"
                    />
                  </div>
                </div>
                <div className="text-white">
                  <h3 className="text-xl leading-tight">{it.title}</h3>
                  <p className="text-base opacity-90">{it.text}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
