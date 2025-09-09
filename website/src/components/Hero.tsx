import React from "react";

export default function Hero() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex justify-center text-background"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="max-w-7xl h-full px-4 flex flex-col items-center pt-20">
        <h1 className="text-[140px] font-semibold text-center">
          Unlock More Life
        </h1>
        <p className="-mt-5 text-[30px] text-center">
          Simple Changes for Lasting Well-Being
        </p>
      </div>
    </div>
  );
}
