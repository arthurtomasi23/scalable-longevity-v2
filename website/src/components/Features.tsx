"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { track } from "@vercel/analytics/server";

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
    <div className="flex flex-col p-20">
      <div className="flex flex-row justify-center items-center gap-10 ">
        <button
          className="bg-black/20 rounded-full p-4 flex items-center justify-center cursor-pointer"
          onClick={prevImage}
          aria-label="Previous image"
        >
          <ChevronLeft size={40} color="white" />
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
          <ChevronRight size={40} color="white" />
        </button>
      </div>
      {/* download app cta section */}
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
              width={180} // official ratio
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
              width={646} // official ratio
              height={250}
              className="h-full w-auto"
            />
          </a>
        </div>
      </div>
    </div>
  );
}
