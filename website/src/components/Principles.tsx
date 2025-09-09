import React from "react";

export default function Principles() {
  return (
    <div className="flex flex-col items-center gap-10 text-black w-full px-10">
      <h2 className="text-[60px] font-semibold">Our 3 Principles</h2>
      <div className="flex flex-row gap-5 items-center justify-center">
        <div className="p-10 rounded-3xl bg-white flex flex-col border-black/5">
          <h3 className="text-[30px] font-semibold">Insight Hub</h3>
          <p>
            We start with a small problem.
            <span className="text-primary font-semibold"> KNOWLEDGE.</span> We
            help you understand what you can start doing today to directly
            increase not only your Lifespan but your Healthspan!
          </p>
        </div>
        <div className="p-10 rounded-3xl bg-white flex flex-col border-black/5border-black/5">
          <h3 className="text-[30px] font-semibold">LifePath Analyser</h3>
          <p>
            We <span className="text-primary font-semibold">ANALYSE</span> your
            current behaviour and Patterns and find out whats missing you and
            what exactly can help you feel better and live longer
          </p>
        </div>
        <div className="p-10 rounded-3xl bg-white flex flex-col border-black/5">
          <h3 className="text-[30px] font-semibold">Habit Engine</h3>
          <p>
            And lastly we will tackle the biggest challenge of all. We will help
            you <span className="text-primary font-semibold">STICK TO IT.</span>{" "}
            With our Habit Engine we will create healthy Habits for you that you
            can actually hold!
          </p>
        </div>
      </div>
    </div>
  );
}
