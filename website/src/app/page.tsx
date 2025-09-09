import Hero from "@/components/Hero";
import Principles from "@/components/Principles";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Survey from "@/components/Survey";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <Principles />
      <Survey />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}
