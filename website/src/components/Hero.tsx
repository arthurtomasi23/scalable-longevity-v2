import React from "react";

export default function Hero() {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/background.jpg')" }}
    >
      <div className="max-w-7xl px-4 flex flex-col -mt-70 items-center justify-center">
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
