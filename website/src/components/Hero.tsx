import { ArrowUpRight } from "lucide-react";
import React from "react";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-[70vh] md:min-h-screen bg-cover bg-center flex items-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      {/* overlay for readability */}
      <div className="absolute inset-0 bg-black/40 md:bg-black/30" />

      {/* content */}
      <div
        className="relative z-10 mx-auto max-w-7xl px-6 md:px-12 
                   flex flex-col items-start text-left 
                   md:items-center md:text-center"
      >
        <h1 className="text-white font-semibold leading-tight tracking-tight text-7xl">
          Unlock More Life
        </h1>
        <p className="mt-4 text-white/90 text-xl max-w-xl md:max-w-3xl">
          Simple Changes for lasting Well-Being
        </p>
        <button className="bg-black/40 backdrop-blur-3xl hover:bg-black/30 transition-colors mt-8 p-2 rounded-full flex items-center gap-4">
          <span className="text-white font-semibold pl-3 text-md">
            Mit Scalable Starten
          </span>
          <div className="flex justify-center items-center w-[55px] h-[55px] rounded-full bg-primary flex-shrink-0 group cursor-pointer">
            <ArrowUpRight
              color="white"
              className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </div>
        </button>
      </div>
    </section>
  );
}
