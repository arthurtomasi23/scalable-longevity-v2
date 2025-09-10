// components/ui/Card.tsx
import React from "react";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-card-border bg-card p-5 shadow-sm">
      {children}
    </div>
  );
}
