"use client";
import React from "react";
import Link from "next/link";

const navItem =
  "px-4 py-2 rounded-full transition-colors duration-200 hover:bg-white hover:text-font-primary focus:outline-none focus:ring-2 focus:ring-white/60";

export default function HeaderNav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
      {/* Glassy bar */}
      <nav
        className="flex items-center justify-center gap-4 rounded-full
                   bg-white/20 backdrop-blur-md border border-white/30
                   text-white font-semibold px-4 py-2"
        aria-label="Main"
      >
        <Link href="/contact" className={navItem}>
          Contact
        </Link>
        <Link href="/signin" className={navItem}>
          Sign In
        </Link>
        <Link
          href="/get-started"
          className={`${navItem} hover:bg-white hover:text-font-primary`}
        >
          Get Started
        </Link>
      </nav>
    </header>
  );
}
