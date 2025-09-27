import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const items = [
  {
    key: "insightHub",
    title: "Insight Hub",
    text: "Wir helfen Ihnen zu verstehen, was Sie noch heute tun können, um Ihre Healthspan direkt zu verbessern",
  },
  {
    key: "lifePathAnalyzer",
    title: "Life Path Analyzer",
    text: "Wir analysieren Ihr aktuelles Verhalten und finden heraus, was genau Ihnen helfen kann, sich besser zu fühlen und länger zu leben",
  },
  {
    key: "habitEngine",
    title: "Habit Engine",
    text: "Mit unserer Habit Engine entwickeln wir gesunde Gewohnheiten für Sie, die Sie tatsächlich beibehalten können!",
  },
];

export default function Principles() {
  return (
    <section className="flex flex-col gap-10 text-black w-full px-6 md:px-20 min-h-screen">
      <div className="flex flex-col mb-10">
        {/* Section heading → 50px target */}
        <h2 className="text-4xl md:text-5xl font-medium">Unsere drei Säulen</h2>
        {/* Lead text → 20px target */}
        <p className="font-medium text-xl max-w-4xl mt-4">
          Diese drei Säulen sind das Fundament, auf dem echte Änderungen
          entstehen – und wir helfen Ihnen dabei!
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
