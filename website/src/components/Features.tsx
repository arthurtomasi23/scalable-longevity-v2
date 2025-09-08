"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  "/mockup1.png",
  "/mockup2.png",
  "/mockup3.png",
  // Add more image paths as needed
];

export default function Features() {
  const [current, setCurrent] = useState(0);

  const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImage = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-row justify-center items-center gap-10 p-20">
      <button
        className="bg-black/20 rounded-full p-4 flex items-center justify-center cursor-pointer"
        onClick={prevImage}
        aria-label="Previous image"
      >
        <ChevronLeft size={40} />
      </button>
      <Image
        src={images[current]}
        alt={`Feature Image ${current + 1}`}
        width={1098}
        height={620}
        className="w-full h-auto"
      />
      <button
        className="bg-black/20 rounded-full p-4 flex items-center justify-center cursor-pointer"
        onClick={nextImage}
        aria-label="Next image"
      >
        <ChevronRight size={40} />
      </button>
    </div>
  );
}
