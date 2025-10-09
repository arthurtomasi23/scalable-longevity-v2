import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const items = [
  {
    key: "insightHub",
    title: "Insight Hub",
    text: "Verstehe deine Gesundheitsdaten und pack das Wissen ein, das dich weiterbringt.",
  },
  {
    key: "lifePathAnalyzer",
    title: "Life Path Analyzer",
    text: "Analysiere deinen Weg, erkenne, was dich stärkt, und richte deinen Fokus auf das, was wirklich wirkt.",
  },
  {
    key: "habitEngine",
    title: "Habit Engine",
    text: "Bleib auf deinem Weg - mit Gewohnheiten, die dich tragen und deine Healthspan langfristig stärken.",
  },
];

export default function Principles() {
  return (
    <section
      id="principles"
      className="scroll-mt-[5vh] flex flex-col gap-10 text-black w-full px-6 md:px-20 justify-center min-h-screen"
    >
      <div className="flex flex-col justify-center items-center mb-10">
        {/* Section heading → 50px target */}
        <h2 className="flex text-4xl text-center md:text-5xl font-medium">
          Drei Säulen ein Ziel:
          <br /> Dein längeres, gesünderes Leben
        </h2>
        {/* Lead text → 20px target */}
        <p className="flex font-medium text-center text-xl max-w-3xl mt-4">
          Scalable Longevity kombiniert Wissen, Analyse und nachhaltige
          Gewohnheiten - für messbare Fortschritte.
        </p>
      </div>

      {/* Cards row: 15px gap, squares fill width */}
      <div className="flex w-full gap-10 flex-col md:flex-row">
        {items.map((item, i) => (
          <article
            key={item.key}
            className={`flex-1 ${i === 1 ? "relative md:-top-12" : ""}`} // middle one lifted
          >
            {/* Square image */}
            <div className="relative w-full aspect-square overflow-hidden rounded-[30px]">
              <Image
                src={`/columns/${item.key}.jpg`}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>

            {/* Circle + title + text */}
            <div className="mt-4 flex items-start gap-4">
              <div className="min-w-0">
                {/* Title → 20px (lead size) */}
                <h3 className="text-xl font-semibold leading-tight">
                  {item.title}
                </h3>
                {/* Body text → 16px */}
                <p className="text-base text-black/70 mt-1">{item.text}</p>
              </div>
              <div className="flex justify-center items-center w-[55px] h-[55px] rounded-full bg-card flex-shrink-0 group cursor-pointer">
                <ArrowUpRight
                  color="#2E4A3F"
                  className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
