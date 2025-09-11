"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../Logo";

const baseItem =
  "px-4 py-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2";
const ctaItem = `${baseItem} border border-white/50`;

export default function HeaderNav() {
  const pathname = usePathname();
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      setIsAtTop(window.scrollY < 50);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const isTransparent = pathname === "/" && isAtTop;
  const headerBg = isTransparent
    ? "bg-transparent text-white border-white"
    : "bg-background border-b border-card-border";

  // Conditional classes for nav links
  const navLinkBase = isTransparent
    ? `${baseItem} text-white hover:bg-white hover:text-black`
    : `${baseItem} text-font-primary hover:bg-secondary/10 hover:text-font-primary`;

  const navLinkCta = isTransparent
    ? `${ctaItem} text-white hover:bg-white hover:text-black`
    : `${ctaItem} text-font-primary hover:bg-secondary/10 hover:text-font-primary`;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 ${headerBg}`}>
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Logo />

        <nav
          className="flex items-center gap-2 font-semibold"
          aria-label="Main"
        >
          <Link href="/contact" className={navLinkBase}>
            Contact
          </Link>
          <Link href="/get-started" className={navLinkBase}>
            Sign In
          </Link>
          <Link href="/get-started" className={navLinkCta}>
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
