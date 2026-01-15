"use client";

import React from "react";
import Image from "next/image";
import { Download } from "lucide-react";

export default function BookInfo() {
  return (
    <section
      id="book"
      className="scroll-mt-[5vh] flex flex-col md:flex-row gap-8 md:gap-12 text-black w-full px-6 md:px-20 justify-center items-center mb-10"
    >
      {/* Image on the left */}
      <div className="flex-shrink-0 w-full md:w-auto mb-20 md:mb-0">
        <div className="relative w-full md:w-[200px] lg:w-[300px] aspect-[3/4] overflow-hidden rounded-[30px]">
          <Image
            src="/book/book-mockup.jpeg"
            alt="Book Cover"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        </div>
      </div>

      {/* Info on the right - centered vertically to match image height */}
      <div className="flex flex-col gap-6 flex-1 max-w-2xl md:h-[266px] lg:h-[400px] md:justify-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-medium mb-4">
            Vertiefe dein Wissen
          </h2>
          <p className="text-base md:text-lg text-black/70 leading-relaxed">
            Unser Buch bietet dir wissenschaftlich fundierte Einblicke in die
            Welt der Longevity. Erfahre mehr über die Prinzipien eines
            gesünderen, längeren Lebens und wie du diese in deinen Alltag
            integrieren kannst.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold">Literatur & Quellen</h3>
          <p className="text-base text-black/70">
            Lade dir die vollständige Literaturliste mit allen
            wissenschaftlichen Quellen und Studien herunter, die in unserem Buch
            zitiert werden.
          </p>

          <a
            href="/book/literature.pdf"
            download
            className="flex items-center justify-center gap-3 py-4 px-6 rounded-full bg-primary text-white hover:opacity-95 transition cursor-pointer font-medium text-base w-fit"
            aria-label="Literatur PDF herunterladen"
          >
            <Download className="w-5 h-5" />
            Literatur PDF herunterladen
          </a>
        </div>
      </div>
    </section>
  );
}
