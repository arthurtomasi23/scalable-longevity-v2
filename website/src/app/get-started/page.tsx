// app/get-started/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { track } from "@vercel/analytics";
import { Mail, Lock, User, Check } from "lucide-react";

export default function GetStartedPage() {
  const [mode, setMode] = useState<"register" | "login">("register");

  return (
    <main className="relative min-h-screen bg-background pt-16">
      {/* Decorative gradient */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute right-[-10%] top-[-10%] h-[380px] w-[380px] rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute left-[-15%] bottom-[-10%] h-[320px] w-[320px] rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 px-4 py-12 md:grid-cols-2">
        {/* Left: copy + mockup + badges */}
        <section className="flex flex-col justify-center">
          <h1 className="text-4xl font-bold leading-tight text-font-primary md:text-5xl">
            Start adding <span className="text-primary">more years</span> to
            your life.
          </h1>
          <p className="mt-3 max-w-xl text-font-secondary">
            Create your account to save your survey, unlock coaching, and track
            your biological age improvements over time.
          </p>

          <div className="mt-8 relative w-full max-w-[560px] aspect-[4/5] overflow-hidden rounded-2xl border border-card-border bg-card shadow-sm">
            <Image
              src="/mockup1.png"
              alt="App preview"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <a
              href="https://apps.apple.com/app/your-app-id"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-auto"
              onClick={() =>
                track("store_click", { store: "apple", from: "get_started" })
              }
            >
              <Image
                src="/badges/apple_us.svg"
                alt="Download on the App Store"
                width={180}
                height={60}
                className="h-full w-auto"
              />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=your.app.id"
              target="_blank"
              rel="noopener noreferrer"
              className="h-12 w-auto"
              onClick={() =>
                track("store_click", { store: "google", from: "get_started" })
              }
            >
              <Image
                src="/badges/google-play_us.png"
                alt="Get it on Google Play"
                width={646}
                height={250}
                className="h-full w-auto"
              />
            </a>
          </div>

          <ul className="mt-6 grid gap-2 text-sm text-font-secondary">
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" /> Backed by research,
              built for real life.
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" /> Simple habits,
              measurable impact.
            </li>
            <li className="flex items-center gap-2">
              <Check className="h-4 w-4 text-primary" /> Your data — private and
              secure.
            </li>
          </ul>
        </section>

        {/* Right: Auth card */}
        <section className="flex items-center md:justify-end">
          <div className="w-full max-w-md rounded-2xl border border-card-border bg-card p-6 shadow-sm">
            {/* Tabs */}
            <div className="grid grid-cols-2 rounded-full border border-card-border bg-white p-1">
              <button
                type="button"
                onClick={() => setMode("register")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  mode === "register"
                    ? "bg-primary text-white"
                    : "text-font-primary hover:bg-secondary/10"
                }`}
              >
                Create Account
              </button>
              <button
                type="button"
                onClick={() => setMode("login")}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  mode === "login"
                    ? "bg-primary text-white"
                    : "text-font-primary hover:bg-secondary/10"
                }`}
              >
                Sign in
              </button>
            </div>

            {mode === "register" ? (
              <>
                <p className="mt-4 text-sm text-font-secondary">
                  Save your results, sync across devices, and get tailored
                  guidance.
                </p>

                <form className="mt-6 grid gap-4">
                  <Field label="Name">
                    <IconInput
                      type="text"
                      placeholder="Your name"
                      icon={<User className="h-4 w-4" />}
                    />
                  </Field>

                  <Field label="Email">
                    <IconInput
                      type="email"
                      placeholder="you@example.com"
                      icon={<Mail className="h-4 w-4" />}
                    />
                  </Field>

                  <Field label="Password">
                    <IconInput
                      type="password"
                      placeholder="••••••••"
                      icon={<Lock className="h-4 w-4" />}
                    />
                  </Field>

                  <button
                    type="submit"
                    className="mt-1 rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white transition hover:bg-primary/90"
                  >
                    Create Account
                  </button>

                  <p className="text-xs text-font-secondary">
                    Already have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setMode("login")}
                      className="underline"
                    >
                      Log In
                    </button>
                    .
                  </p>
                </form>
              </>
            ) : (
              <>
                <p className="mt-4 text-sm text-font-secondary">
                  Welcome back! Continue your progress.
                </p>

                <form className="mt-6 grid gap-4">
                  <Field label="Email">
                    <IconInput
                      type="email"
                      placeholder="you@example.com"
                      icon={<Mail className="h-4 w-4" />}
                    />
                  </Field>

                  <Field label="Password">
                    <IconInput
                      type="password"
                      placeholder="••••••••"
                      icon={<Lock className="h-4 w-4" />}
                    />
                  </Field>

                  <div className="flex items-center justify-between">
                    <Link
                      href="/reset"
                      className="text-xs text-font-secondary underline"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <button
                    type="submit"
                    className="mt-1 rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white transition hover:bg-primary/90"
                  >
                    Sign In
                  </button>

                  <p className="text-xs text-font-secondary">
                    New here?{" "}
                    <button
                      type="button"
                      onClick={() => setMode("register")}
                      className="underline"
                    >
                      Create an account
                    </button>
                    .
                  </p>
                </form>
              </>
            )}

            <p className="mt-6 text-xs text-font-secondary">
              By continuing you agree to our{" "}
              <Link href="/terms" className="underline">
                Terms
              </Link>{" "}
              and{" "}
              <Link href="/privacy" className="underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}

/* ---------- tiny helpers ---------- */

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <label className="text-sm font-medium text-font-primary">{label}</label>
      {children}
    </div>
  );
}

function IconInput({
  icon,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-card-border bg-white px-3 py-2 focus-within:ring-2 focus-within:ring-secondary">
      <span className="text-font-secondary">{icon}</span>
      <input
        {...props}
        className="w-full bg-transparent text-sm text-font-primary placeholder:text-gray-400 focus:outline-none"
      />
    </div>
  );
}
