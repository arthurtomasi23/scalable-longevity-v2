// components/ui/Card.tsx
import React from "react";

export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-[30px] border border-card-border bg-card p-6">
      {children}
    </div>
  );
}
