"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../Logo";

const baseItem =
  "px-4 py-2 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2";
const ctaItem = `${baseItem} border`;

export default function HeaderNav() {
  const pathname = usePathname();
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    if (pathname !== "/") {
      setIsAtTop(false); // always solid on non-home routes
      return;
    }

    const handleScroll = () => setIsAtTop(window.scrollY < 50);

    // fire once
    handleScroll();

    // listeners (mobile can be finicky)
    window.addEventListener("scroll", handleScroll, { passive: true });
    document.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [pathname]);

  const isTransparent = pathname === "/" && isAtTop;

  const headerBg = isTransparent
    ? "bg-transparent text-white border-white backdrop-blur-[2px]"
    : "bg-background border-b border-card-border";

  const navLinkBase = isTransparent
    ? `${baseItem} text-white hover:bg-white hover:text-black`
    : `${baseItem} text-font-primary hover:bg-secondary/10 hover:text-font-primary`;

  const navLinkCta = isTransparent
    ? `${ctaItem} border-white/50 text-white hover:bg-white hover:text-black`
    : `${ctaItem} border-primary text-font-primary hover:bg-secondary/10 hover:text-font-primary`;

  return (
    <header className={`fixed inset-x-0 top-0 z-50 ${headerBg} h-16`}>
      <div className="mx-auto max-w-6xl h-full px-4 flex items-center justify-between">
        <Logo />

        {/* Desktop nav */}
        <nav
          className="hidden md:flex items-center gap-2 font-semibold"
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

        {/* Mobile-only CTA */}
        <Link href="/get-started" className={`md:hidden ${navLinkCta}`}>
          Get Started
        </Link>
      </div>
    </header>
  );
}
