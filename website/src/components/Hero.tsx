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
        <h1 className="text-white font-semibold leading-tight tracking-tight text-[clamp(2rem,8vw,5.5rem)]">
          Unlock More Life
        </h1>
        <p className="mt-4 text-white/90 text-[clamp(1.1rem,4.5vw,1.875rem)] max-w-xl md:max-w-3xl">
          Simple Changes for Lasting Well-Being
        </p>
      </div>
    </section>
  );
}
