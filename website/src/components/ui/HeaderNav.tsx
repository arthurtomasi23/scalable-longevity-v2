"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "../Logo";

const baseItem =
  "px-4 py-2 rounded-full transition-colors duration-200 hover:bg-secondary/10 hover:text-font-primary focus:outline-none focus:ring-2 focus:ring-secondary/40";
const ctaItem = `${baseItem} border border-secondary/50`;

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

  const headerBg =
    pathname === "/" && isAtTop
      ? "bg-transparent"
      : "bg-background border-b border-card-border";

  return (
    <header className={`fixed inset-x-0 top-0 z-50 ${headerBg}`}>
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Logo />

        <nav
          className="flex items-center gap-2 text-font-primary font-semibold"
          aria-label="Main"
        >
          <Link href="/contact" className={baseItem}>
            Contact
          </Link>
          <Link href="/get-started" className={baseItem}>
            Sign In
          </Link>
          <Link href="/get-started" className={ctaItem}>
            Get Started
          </Link>
        </nav>
      </div>
    </header>
  );
}
