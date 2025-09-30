"use client";

import React from "react";
import Link from "next/link";
import Logo from "../Logo";
import { PillCTA } from "@/components/ui/PillCTA";

export default function HeaderNav() {
  const navLinkBase =
    "px-5 py-3 rounded-full text-white font-semibold hover:bg-white/10 transition-colors";

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-center p-3">
      <div className="mx-auto max-w-6xl w-full flex items-center gap-3 p-2 bg-black/20 backdrop-blur-3xl rounded-full">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Logo />
        </div>

        {/* Center: section links (desktop only) */}
        <div
          className="hidden md:flex flex-1 items-center justify-center"
          aria-label="Main"
        >
          <nav className="flex items-center gap-2">
            <Link href="#principles" scroll className={navLinkBase}>
              Säulen
            </Link>
            <Link href="#how-it-works" scroll className={navLinkBase}>
              Wie funktioniert&#39;s?
            </Link>
            <Link href="#fiveparts" scroll className={navLinkBase}>
              Handlungsfelder
            </Link>
            <Link href="#survey" scroll className={navLinkBase}>
              Umfrage
            </Link>
          </nav>
        </div>

        {/* Right: CTA */}
        <div className="ml-auto hidden md:block">
          <PillCTA
            as="link"
            href="/survey"
            label="Test Starten"
            size="sm"
            bgClass="bg-primary"
            textClass="text-white"
            noIcon
          />
        </div>

        {/* Mobile: CTA only on the right (center links hidden) */}
        <div className="ml-auto md:hidden">
          <PillCTA
            as="link"
            href="/survey"
            label="Test Starten"
            size="sm"
            bgClass="bg-primary"
            textClass="text-white"
            noIcon
          />
        </div>
      </div>
    </header>
  );
}
