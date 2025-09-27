"use client";
import React from "react";
import Link from "next/link";
import Logo from "../Logo";

export default function HeaderNav() {
  const navLinkBase =
    "px-5 py-3 rounded-full text-white font-semibold hover:bg-white/10 transition-colors";
  const navLinkCta =
    "px-5 py-3 rounded-full bg-primary text-white font-semibold hover:bg-white/80 hover:text-primary transition-colors";

  return (
    <header className="fixed inset-x-0 top-2 z-50 flex items-center justify-center">
      <div className="mx-auto max-w-6xl w-full flex items-center justify-between p-2 bg-black/20 backdrop-blur-3xl rounded-full">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-2" aria-label="Main">
          <Link href="/contact" className={navLinkBase}>
            Kontakt
          </Link>
          <Link href="/get-started" className={navLinkBase}>
            Anmelden
          </Link>
          <Link href="/get-started" className={navLinkCta}>
            Jetzt Starten
          </Link>
        </nav>

        {/* Mobile-only CTA */}
        <Link href="/get-started" className={`md:hidden ${navLinkCta}`}>
          Jetzt Starten
        </Link>
      </div>
    </header>
  );
}
