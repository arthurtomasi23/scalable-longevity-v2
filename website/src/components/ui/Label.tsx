// components/ui/Label.tsx
import React from "react";
export function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="text-sm font-semibold text-font-primary">
      {children}
    </label>
  );
}
export function Help({ children }: { children: React.ReactNode }) {
  return <p className="text-xs text-font-secondary mt-1">{children}</p>;
}
