// components/survey/steps/MetabolicStep.tsx
"use client";
import Card from "@/components/ui/Card";
import Segment from "@/components/ui/Segment";
import NumberInput from "@/components/ui/NumberInput";
import { Label, Help } from "@/components/ui/Label";
import { LIMITS } from "@/lib/surveyConfig";
import type { FormState, YesNo } from "@/lib/surveyTypes";
import HoverCard from "@/components/ui/HoverCard";
import { Info } from "lucide-react";

export default function MetabolicStep({
  form,
  set,
}: {
  form: FormState;
  set: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
}) {
  return (
    <Card>
      <Label>Metabolic & Lipids</Label>
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <Label>Diabetes diagnosis</Label>
          <div className="mt-2">
            <Segment<YesNo>
              value={form.diabetes_dx}
              onChange={(v) => set("diabetes_dx", v)}
              options={[
                { label: "No", value: "no" },
                { label: "Yes", value: "yes" },
              ]}
            />
          </div>
        </div>

        {form.diabetes_dx === "no" && (
          <div>
            <Label>HbA1c</Label>
            <HoverCard
              trigger={<Info className="h-4 w-4 text-font-secondary" />}
              placement="top"
            >
              <div className="font-semibold mb-1">What is HbA1c?</div>
              <p className="text-font-secondary">
                HbA1c is a blood test that measures your average blood sugar
                levels over the past 2 to 3 months. It’s used to diagnose and
                monitor diabetes.
              </p>
            </HoverCard>
            <div className="mt-2">
              <NumberInput
                value={form.hba1c}
                onChange={(v) => set("hba1c", v)}
                placeholder="e.g., 5.6"
                min={LIMITS.hba1c.min}
                max={LIMITS.hba1c.max}
                unit="%"
              />
            </div>
            <Help>Typical bands: &lt;5.7, 5.7–6.4, ≥6.5.</Help>
          </div>
        )}

        <div>
          <Label>LDL</Label>
          <HoverCard
            trigger={<Info className="h-4 w-4 text-font-secondary" />}
            placement="top"
          >
            <div className="font-semibold mb-1">What is LDL?</div>
            <p className="text-font-secondary">
              LDL (low-density lipoprotein) is a type of cholesterol that can
              build up in your arteries and increase your risk of heart disease.
              It’s often referred to as “bad” cholesterol.
            </p>
          </HoverCard>
          <NumberInput
            value={form.ldl}
            onChange={(v) => set("ldl", v)}
            placeholder="e.g., 110"
            min={LIMITS.ldl.min}
            max={LIMITS.ldl.max}
            unit="mg/dL"
          />
        </div>

        <div>
          <Label>HDL</Label>
          <HoverCard
            trigger={<Info className="h-4 w-4 text-font-secondary" />}
            placement="top"
          >
            <div className="font-semibold mb-1">What is HDL?</div>
            <p className="text-font-secondary">
              HDL (high-density lipoprotein) is a type of cholesterol that helps
              remove other forms of cholesterol from your bloodstream. It’s
              often referred to as “good” cholesterol.
            </p>
          </HoverCard>
          <NumberInput
            value={form.hdl}
            onChange={(v) => set("hdl", v)}
            placeholder="e.g., 50"
            min={LIMITS.hdl.min}
            max={LIMITS.hdl.max}
            unit="mg/dL"
          />
        </div>
      </div>
    </Card>
  );
}
