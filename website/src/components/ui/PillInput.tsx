// components/ui/PillInput.tsx
import * as React from "react";

export type Size = "sm" | "md" | "lg";

const sizeMap = {
  sm: { h: "h-10", px: "px-3", font: "text-sm" },
  md: { h: "h-14", px: "px-4", font: "text-base" },
  lg: { h: "h-16", px: "px-5", font: "text-lg" },
} as const satisfies Record<Size, { h: string; px: string; font: string }>;

export interface PillInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  pillSize?: Size;
  bgClass?: string;
  textClass?: string;
  className?: string;
}

export const PillInput = React.forwardRef<HTMLInputElement, PillInputProps>(
  (
    {
      pillSize = "md",
      bgClass = "bg-black/40",
      textClass = "text-white placeholder-white/70",
      className = "",
      ...props
    },
    ref
  ) => {
    const s = sizeMap[pillSize]; // ✅ correctly typed now

    return (
      <input
        ref={ref}
        className={[
          "rounded-full backdrop-blur-2xl outline-none w-full",
          "focus:ring-2 focus:ring-white/60",
          s.h,
          s.px,
          s.font,
          bgClass,
          textClass,
          className,
        ].join(" ")}
        {...props}
      />
    );
  }
);

PillInput.displayName = "PillInput";
