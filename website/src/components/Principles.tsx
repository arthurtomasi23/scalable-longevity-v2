import React from "react";

export default function Principles() {
  return (
    <section className="flex flex-col items-center gap-10 text-black w-full px-6 md:px-10">
      <h2 className="text-[clamp(2rem,6vw,3.75rem)] font-semibold text-center">
        Our 3 Principles
      </h2>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl">
        <div className="flex-1 p-6 md:p-10 rounded-3xl bg-white flex flex-col border border-black/5 shadow-sm">
          <h3 className="text-[clamp(1.25rem,3vw,1.875rem)] font-semibold mb-3">
            Insight Hub
          </h3>
          <p>
            We start with a small problem.
            <span className="text-primary font-semibold"> KNOWLEDGE.</span> We
            help you understand what you can start doing today to directly
            increase not only your Lifespan but your Healthspan!
          </p>
        </div>

        <div className="flex-1 p-6 md:p-10 rounded-3xl bg-white flex flex-col border border-black/5 shadow-sm">
          <h3 className="text-[clamp(1.25rem,3vw,1.875rem)] font-semibold mb-3">
            LifePath Analyser
          </h3>
          <p>
            We <span className="text-primary font-semibold">ANALYSE</span> your
            current behaviour and Patterns and find out what’s missing you and
            what exactly can help you feel better and live longer
          </p>
        </div>

        <div className="flex-1 p-6 md:p-10 rounded-3xl bg-white flex flex-col border border-black/5 shadow-sm">
          <h3 className="text-[clamp(1.25rem,3vw,1.875rem)] font-semibold mb-3">
            Habit Engine
          </h3>
          <p>
            And lastly we will tackle the biggest challenge of all. We will help
            you <span className="text-primary font-semibold">STICK TO IT.</span>{" "}
            With our Habit Engine we will create healthy Habits for you that you
            can actually hold!
          </p>
        </div>
      </div>
    </section>
  );
}
