import Hero from "@/components/Hero";
import Principles from "@/components/Principles";
// import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Survey from "@/components/Survey";
import FiveParts from "@/components/FiveParts";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <Principles />
      <CTA />
      <Survey />
      <FiveParts />
      {/* <Features /> */}
    </div>
  );
}
