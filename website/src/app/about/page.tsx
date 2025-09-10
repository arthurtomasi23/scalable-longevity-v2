// app/about/page.tsx
import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto w-full max-w-5xl px-4 pt-28 pb-20">
        {/* Hero */}
        <h1 className="text-4xl font-bold text-font-primary mb-4">
          Unlock More Life - Simple Changes for Lasting Well-Being
        </h1>
        <p className="text-lg text-font-secondary max-w-2xl">
          Healthy living doesn’t have to be complicated. We make it simple,
          sustainable, and empowering.
        </p>

        {/* Why Choose Us */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-font-primary mb-4">
            Why Choose Us?
          </h2>
          <ul className="space-y-3 text-font-secondary">
            <li>• No pills or supplements - just better everyday choices.</li>
            <li>
              • Easy to set up and use, whether you’re just starting or looking
              for new ways to improve.
            </li>
            <li>
              • Backed by science, designed to fit into your life - no
              complicated routines or special equipment.
            </li>
          </ul>
        </section>

        {/* For You */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-font-primary mb-4">
            For You
          </h2>
          <p className="text-font-secondary max-w-2xl">
            You’re working to improve your own health? We make it simple to get
            started and keep going. Our goal is to help you feel empowered,
            supported, and confident in your ability to build the habits that
            matter.
          </p>
        </section>

        {/* Your Next Step */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-font-primary mb-4">
            Your Next Step
          </h2>
          <p className="text-font-secondary max-w-2xl">
            Start today with just one small change—and watch how your daily
            choices add up to a healthier, longer life. We’re here to guide you,
            encourage you, and celebrate every step forward.
          </p>
        </section>

        {/* Mission */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-font-primary mb-4">
            Our Mission
          </h2>
          <p className="text-font-secondary max-w-2xl">
            We want to help you live a longer, healthier life—starting with the
            habits you build every day. Our app is designed to make healthy
            living easy and clear, so you know exactly what steps to take to
            feel your best and keep improving without being overwhelming.
          </p>
        </section>
      </div>
    </div>
  );
}
