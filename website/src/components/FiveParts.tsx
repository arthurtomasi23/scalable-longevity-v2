import { ArrowUpRight } from "lucide-react";
import React from "react";
import Image from "next/image";

const items = [
  {
    key: "wissen",
    title: "Wissen",
    text: "Wissen Beschreibung",
    img: "/knowledge.jpg",
  },
  {
    key: "bewegung",
    title: "Bewegung",
    text: "Mehr Energie, weniger Schmerzen.",
    img: "/sport.jpg",
  },
  {
    key: "ernaehrung",
    title: "Ernährung",
    text: "Essen, das wirklich hilft.",
    img: "/food.jpg",
  },
  {
    key: "schlaf",
    title: "Schlaf",
    text: "Regeneration als Superpower.",
    img: "/sleep.jpg",
  },
  {
    key: "mindset",
    title: "Social",
    text: "Mit Freunden wachsen.",
    img: "/social.jpg",
  },
];

export default function FiveParts() {
  return (
    <section className="flex flex-col gap-10 text-black w-full px-6 md:px-20 min-h-screen">
      <div className="flex flex-col justify-center items-center text-center">
        <h2 className="text-4xl md:text-5xl font-medium">
          Was könnt ihr verändern?
        </h2>
        <p className="font-medium text-xl max-w-4xl">
          Wir arbeiten mit 5 Handlungsfeldern die dein Leben komplett umkrempeln
          können. Diese Handlungsfelder sind...
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {items.map((it) => (
          <article
            key={it.key}
            className="relative aspect-square rounded-[30px] overflow-hidden group cursor-pointer"
          >
            {/* BG image */}
            <Image
              src={it.img}
              alt={it.title}
              fill
              className="object-cover"
              priority={it.key === "wissen"}
            />

            {/* Overlay: transparent until 50%, then fade to dark */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.8) 100%)",
              }}
            />

            {/* Content: icon at top-right, text bottom-left */}
            <div className="absolute inset-0 p-4 flex flex-col justify-between">
              {/* Top: icon */}
              <div className="flex justify-end">
                <div className="flex justify-center items-center w-[60px] h-[60px] rounded-full bg-white/95 backdrop-blur-sm flex-shrink-0 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <ArrowUpRight
                    className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
                    color="#2E4A3F"
                  />
                </div>
              </div>

              {/* Bottom: text */}
              <div className="text-white">
                <h3 className="text-xl leading-tight">{it.title}</h3>
                <p className="text-base opacity-90">{it.text}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
