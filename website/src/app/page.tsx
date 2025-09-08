import Hero from "@/components/Hero";
import Principles from "@/components/Principles";
import Features from "@/components/Features";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col gap-20">
      <Hero />
      <Principles />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}
