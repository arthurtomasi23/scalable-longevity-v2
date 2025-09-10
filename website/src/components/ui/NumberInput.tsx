// components/ui/NumberInput.tsx
"use client";

export default function NumberInput({
  value,
  onChange,
  placeholder,
  min,
  max,
  unit,
}: {
  value: number | "";
  onChange: (v: number | "") => void;
  placeholder: string;
  min?: number;
  max?: number;
  unit?: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="number"
        min={min}
        max={max}
        value={value}
        onChange={(e) => {
          const v = e.target.value;
          onChange(v === "" ? "" : Number(v));
        }}
        placeholder={placeholder}
        className="w-40 rounded-xl border border-card-border bg-white px-3 py-2 text-sm text-font-primary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-secondary"
      />
      {unit && <span className="text-sm text-font-secondary">{unit}</span>}
    </div>
  );
}
