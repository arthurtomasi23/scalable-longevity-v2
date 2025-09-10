// components/survey/steps/LifestyleStep.tsx
"use client";
import Card from "@/components/ui/Card";
import Segment from "@/components/ui/Segment";
import { Label, Help } from "@/components/ui/Label";
import type {
  FormState,
  Stress,
  Smoking,
  Fastfood,
  FruitsVeg,
  Fish,
} from "@/lib/surveyTypes";

export default function LifestyleStep({
  form,
  set,
}: {
  form: FormState;
  set: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
}) {
  return (
    <Card>
      <Label>Lifestyle</Label>
      <div className="mt-3 grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <Label>Stress</Label>
          <div className="mt-2">
            <Segment<Stress>
              value={form.stress}
              onChange={(v) => set("stress", v)}
              options={[
                { label: "Low", value: "low" },
                { label: "Medium", value: "medium" },
                { label: "High", value: "high" },
              ]}
            />
          </div>
        </div>

        <div>
          <Label>Smoking</Label>
          <Help>If current, pick the closest range.</Help>
          <div className="mt-2">
            <Segment<Smoking>
              value={form.smoking}
              onChange={(v) => set("smoking", v)}
              options={[
                { label: "Never", value: "never" },
                { label: "Former", value: "former" },
                { label: "<10/day", value: "current_<10" },
                { label: "10–20/day", value: "current_10_20" },
                { label: ">20/day", value: "current_>20" },
              ]}
            />
          </div>
        </div>

        <div>
          <Label>Fastfood</Label>
          <div className="mt-2">
            <Segment<Fastfood>
              value={form.fastfood}
              onChange={(v) => set("fastfood", v)}
              options={[
                { label: "Never", value: "never" },
                { label: "1–2/Wo.", value: "1-2/Wo." },
                { label: "3–4/Wo.", value: "3-4/Wo." },
                { label: "5+/Wo.", value: "5+/Wo." },
              ]}
            />
          </div>
        </div>

        <div>
          <Label>Fruit & Vegetables (per day)</Label>
          <div className="mt-2">
            <Segment<FruitsVeg>
              value={form.fruits_veg}
              onChange={(v) => set("fruits_veg", v)}
              options={[
                { label: "0–1/Day", value: "0-1/Tag" },
                { label: "2–3/Day", value: "2-3/Tag" },
                { label: "4–5/Day", value: "4-5/Tag" },
                { label: "6+/Day", value: "6+/Tag" },
              ]}
            />
          </div>
        </div>

        <div>
          <Label>Fish (per week)</Label>
          <div className="mt-2">
            <Segment<Fish>
              value={form.fish}
              onChange={(v) => set("fish", v)}
              options={[
                { label: "0/Wo.", value: "0/Wo." },
                { label: "1/Wo.", value: "1/Wo." },
                { label: "2/Wo.", value: "2/Wo." },
                { label: "3+/Wo.", value: "3+/Wo." },
              ]}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
