"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

type Step = {
  id: number;
  title: string;
  text: string;
  tailwindHeightClass: string; // connector height
};

const STEPS: Step[] = [
  {
    id: 1,
    title: "Fill out a Form",
    text: "You will fill out a short form assessing your current situation",
    tailwindHeightClass: "h-30",
  },
  {
    id: 2,
    title: "Analyse your Results",
    text: "Your collected Data will run through our Algorithm to give you the optimal plan to better your health starting today!",
    tailwindHeightClass: "h-30",
  },
  {
    id: 3,
    title: "Start building Habits",
    text: "Now that you have the perfect roadmap what to do our system will help you stick to the new Habits that will transform your life!",
    tailwindHeightClass: "h-30",
  },
];

const CONNECTOR_COUNT = STEPS.length - 1;
const OFFSET = 5; // px extra scroll before numbers / lines activate

export default function CTA() {
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [targetHeights, setTargetHeights] = useState<number[]>(
    Array(CONNECTOR_COUNT).fill(0)
  );
  const [lineHeights, setLineHeights] = useState<number[]>(
    Array(CONNECTOR_COUNT).fill(0)
  );
  const [step1Active, setStep1Active] = useState(false);

  // Measure connector heights once
  useEffect(() => {
    const temps = Array.from({ length: CONNECTOR_COUNT }, (_, i) => {
      const el = document.createElement("div");
      el.className = `invisible pointer-events-none ${STEPS[i].tailwindHeightClass}`;
      document.body.appendChild(el);
      return el;
    });
    const measured = temps.map((el) => el.getBoundingClientRect().height);
    temps.forEach((el) => el.remove());
    setTargetHeights(measured);
  }, []);

  // Scroll logic
  useEffect(() => {
    let ticking = false;

    const update = () => {
      const viewportCenter = window.innerHeight / 2;

      // Step 1 active: number & text reveal slightly after center
      const step1Node = contentRefs.current[0];
      if (step1Node) {
        const r = step1Node.getBoundingClientRect();
        const center = r.top + r.height / 2;
        setStep1Active(center <= viewportCenter - OFFSET);
      }

      setLineHeights((prev) => {
        const next = [...prev];

        // Connector 0 (01→02)
        if (contentRefs.current[0]) {
          const rect = contentRefs.current[0]!.getBoundingClientRect();
          const elemCenter = rect.top + rect.height / 2;

          if (elemCenter <= viewportCenter - OFFSET) {
            const raw = viewportCenter - OFFSET - elemCenter;
            next[0] = Math.max(0, Math.min(raw, targetHeights[0] || 0));
          } else {
            next[0] = 0;
          }
        }

        // Connector 1 (02→03) – start once connector 0 full
        if (CONNECTOR_COUNT > 1) {
          if (
            targetHeights[0] > 0 &&
            lineHeights[0] >= targetHeights[0] - 0.5
          ) {
            const rect = contentRefs.current[1]?.getBoundingClientRect();
            if (rect) {
              const elemCenter = rect.top + rect.height / 2;
              const raw = viewportCenter - OFFSET - elemCenter;
              const clamped = Math.max(0, Math.min(raw, targetHeights[1] || 0));
              next[1] = clamped;
            }
          } else {
            next[1] = 0;
          }
        }

        return next;
      });

      ticking = false;
    };

    const onScrollOrResize = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    onScrollOrResize();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [targetHeights, lineHeights]);

  const connectorComplete = (i: number) =>
    targetHeights[i] > 0 && lineHeights[i] >= targetHeights[i] - 0.5;

  // Number logic
  const numberIsActive = (idx: number) => {
    if (idx === 0) return step1Active;
    if (idx === 1) return connectorComplete(0);
    if (idx === 2) return connectorComplete(1);
    return false;
  };

  // Text reveal = same as number active
  const textIsVisible = (idx: number) => numberIsActive(idx);

  return (
    <div className="flex flex-col justify-center items-center gap-10 p-30 text-black">
      <p className="text-3xl">Your Journey</p>
      <h2 className="text-[60px] font-semibold">How to get started?</h2>
      <div className="w-full flex flex-row">
        {/* LEFT: Numbers + connectors */}
        <div className="flex flex-col justify-center items-center">
          {STEPS.map((step, i) => {
            const numberActive = numberIsActive(i);
            const numberColor = numberActive ? "text-black" : "text-gray-300";

            return (
              <React.Fragment key={step.id}>
                <p
                  className={`text-[100px] font-black h-40 flex items-center justify-center leading-none ${numberColor}`}
                >
                  {String(step.id).padStart(2, "0")}
                </p>

                {i < CONNECTOR_COUNT && (
                  <div
                    className="relative w-0.5"
                    style={{ height: targetHeights[i] || 0 }}
                  >
                    <div
                      className="absolute left-0 top-0 w-0.5 bg-black rounded-full"
                      style={{ height: lineHeights[i] || 0 }}
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* RIGHT: Content blocks */}
        <div className="flex flex-col w-full h-full justify-center items-center ml-10 gap-30">
          {STEPS.map((step, i) => {
            const show = textIsVisible(i);
            return (
              <div
                key={step.id}
                ref={(el) => {
                  if (i < CONNECTOR_COUNT) contentRefs.current[i] = el;
                }}
                className="w-full h-40 flex flex-col justify-center items-start"
              >
                <h4
                  className={`font-semibold transition-all duration-300 ${
                    show
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-2"
                  }`}
                >
                  {step.title}
                </h4>
                <p
                  className={`transition-all duration-300 delay-75 ${
                    show
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 -translate-y-2"
                  }`}
                >
                  {step.text}
                </p>
              </div>
            );
          })}
        </div>
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
