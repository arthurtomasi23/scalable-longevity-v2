// app/get-started/page.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";
import { track } from "@vercel/analytics";

export default function GetStartedPage() {
  const [mode, setMode] = useState<"register" | "login">("register");

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto w-full max-w-6xl px-4 pt-28 pb-20">
        <h1 className="text-3xl font-semibold text-font-primary">
          Get Started
        </h1>
        <p className="mt-1 text-font-secondary">
          Create your account and start adding more healthy years today.
        </p>

        <div className="mt-8 grid gap-8 md:grid-cols-2 items-center">
          {/* Auth Card */}
          <div className="rounded-2xl border border-card-border bg-card p-6 shadow-sm w-full max-w-md justify-self-center md:justify-self-start">
            {mode === "register" ? (
              <>
                <h2 className="text-xl font-semibold text-font-primary">
                  Create an account
                </h2>
                <p className="mt-1 text-sm text-font-secondary">
                  Save your survey progress and sync with the app.
                </p>

                <form className="mt-6 grid gap-4">
                  <div className="grid gap-2">
                    <label className="text-sm font-medium text-font-primary">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="rounded-xl border border-card-border bg-white px-3 py-2 text-sm text-font-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label className="text-sm font-medium text-font-primary">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="rounded-xl border border-card-border bg-white px-3 py-2 text-sm text-font-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label className="text-sm font-medium text-font-primary">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="rounded-xl border border-card-border bg-white px-3 py-2 text-sm text-font-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white transition hover:bg-primary/90"
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
                      Sign in
                    </button>
                    .
                  </p>
                </form>
              </>
            ) : (
              <>
                <h2 className="text-xl font-semibold text-font-primary">
                  Sign in
                </h2>
                <p className="mt-1 text-sm text-font-secondary">
                  Welcome back! Log in to access your account.
                </p>

                <form className="mt-6 grid gap-4">
                  <div className="grid gap-2">
                    <label className="text-sm font-medium text-font-primary">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="rounded-xl border border-card-border bg-white px-3 py-2 text-sm text-font-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>

                  <div className="grid gap-2">
                    <label className="text-sm font-medium text-font-primary">
                      Password
                    </label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="rounded-xl border border-card-border bg-white px-3 py-2 text-sm text-font-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary"
                    />
                  </div>

                  <button
                    type="submit"
                    className="cursor-pointer mt-2 rounded-full bg-primary px-6 py-2 text-sm font-semibold text-white transition hover:bg-primary/90"
                  >
                    Sign In
                  </button>

                  <p className="text-xs text-font-secondary">
                    Don’t have an account?{" "}
                    <button
                      type="button"
                      onClick={() => setMode("register")}
                      className="underline"
                    >
                      Create one
                    </button>
                    .
                  </p>
                </form>
              </>
            )}
          </div>

          {/* Preview Image + Store Badges */}
          <div className="flex flex-col items-center md:items-end">
            <div className="relative w-full max-w-[520px] aspect-[4/5] overflow-hidden rounded-2xl border border-card-border bg-card shadow-sm">
              <Image
                src="/mockup1.png"
                alt="App preview"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Store Badges */}
            <div className="mt-4 flex items-center gap-3">
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

            <p className="mt-2 text-xs text-font-secondary text-center md:text-right">
              Use the app for deeper insights, habit coaching, and progress
              tracking.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
