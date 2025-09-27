// components/ui/PillCTA.tsx
"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { track as vercelTrack } from "@vercel/analytics";

type Size = "sm" | "md" | "lg";
type As = "button" | "link";

type TrackOpts = {
  event?: string; // default: "cta_click"
  from?: string; // e.g., "home_hero"
  variant?: string; // e.g., "primary"
  extra?: Record<string, unknown>;
  enabled?: boolean; // default: true
};

type PillCTAProps = {
  as?: As;
  href?: string; // required when as="link"
  label: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  size?: Size;
  className?: string;

  // Colors (Tailwind classes or combine with inline style)
  bgClass?: string;
  textClass?: string;
  iconBgClass?: string;
  iconColorClass?: string;
  style?: React.CSSProperties;

  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  disabled?: boolean;

  track?: TrackOpts;
};

const sizeMap: Record<
  Size,
  { h: string; px: string; icon: string; font: string; iconSize: string }
> = {
  sm: {
    h: "h-10",
    px: "px-3",
    icon: "w-8 h-8",
    font: "text-sm",
    iconSize: "w-4 h-4",
  },
  md: {
    h: "h-14",
    px: "px-4",
    icon: "w-11 h-11",
    font: "text-base",
    iconSize: "w-5 h-5",
  },
  lg: {
    h: "h-16",
    px: "px-5",
    icon: "w-14 h-14",
    font: "text-lg",
    iconSize: "w-5 h-5",
  },
};

export function PillCTA({
  as = "link",
  href,
  label,
  Icon = ArrowUpRight,
  size = "md",
  className = "",
  bgClass = "bg-[#2E4A3F]",
  textClass = "text-white",
  iconBgClass = "bg-white",
  iconColorClass = "text-[#2E4A3F]",
  style,
  onClick,
  disabled,
  track = { enabled: true, event: "cta_click" },
}: PillCTAProps) {
  const s = sizeMap[size];

  const base = `group inline-flex items-center justify-between rounded-full ${s.h} ${s.px} gap-4
     ${bgClass} ${textClass} ${s.font}
     transition-colors backdrop-blur-2xl
     focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60
     disabled:opacity-60 disabled:cursor-not-allowed`;

  const iconWrap = `flex items-center justify-center rounded-full ${iconBgClass}
     ${s.icon} flex-shrink-0 transition-transform duration-200
     group-hover:translate-x-0.5 group-hover:-translate-y-0.5`;

  const iconCls = `${s.iconSize} ${iconColorClass}`;

  const handleClick: React.MouseEventHandler<
    HTMLButtonElement | HTMLAnchorElement
  > = (e) => {
    onClick?.(e);
    if (e.defaultPrevented) return;

    if (track?.enabled !== false) {
      vercelTrack(track.event ?? "cta_click", {
        ...(track.from ? { from: track.from } : {}),
        ...(track.variant !== undefined ? { variant: track.variant } : {}),
        ...(track.extra ?? {}),
        label, // helpful default
      });
    }
  };

  if (as === "link") {
    if (!href) throw new Error("PillCTA: 'href' is required when as='link'");
    return (
      <Link
        href={href}
        onClick={handleClick}
        className={`${base} ${className}`}
        style={style}
        aria-label={label}
      >
        <span className="font-semibold">{label}</span>
        <span className={iconWrap}>
          <Icon className={iconCls} />
        </span>
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`${base} ${className}`}
      style={style}
      disabled={disabled}
      aria-label={label}
    >
      <span className="font-semibold">{label}</span>
      <span className={iconWrap}>
        <Icon className={iconCls} />
      </span>
    </button>
  );
}
