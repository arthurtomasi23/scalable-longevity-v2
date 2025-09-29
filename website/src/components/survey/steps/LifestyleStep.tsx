// components/survey/steps/LifestyleStep.tsx
"use client";
import Card from "@/components/survey/Card";
import Segment from "@/components/survey/Segment";
import { Label, Help } from "@/components/survey/Label";
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
      <Label>Lebensstil</Label>

      <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-2">
        {/* Stress */}
        <div>
          <Label>Stress</Label>
          <Help>Wie hoch empfindest du dein aktuelles Stressniveau?</Help>
          <div className="mt-2">
            <Segment<Stress>
              value={form.stress}
              onChange={(v) => set("stress", v)}
              options={[
                { label: "Niedrig", value: "low" },
                { label: "Mittel", value: "medium" },
                { label: "Hoch", value: "high" },
              ]}
            />
          </div>
        </div>

        {/* Rauchen */}
        <div>
          <Label>Rauchen</Label>
          <Help>Wenn aktuell, wähle die nächstpassende Menge.</Help>
          <div className="mt-2">
            <Segment<Smoking>
              value={form.smoking}
              onChange={(v) => set("smoking", v)}
              options={[
                { label: "Nie", value: "never" },
                { label: "Früher", value: "former" },
                { label: "<10/Tag", value: "current_<10" },
                { label: "10-20/Tag", value: "current_10_20" },
                { label: ">20/Tag", value: "current_>20" },
              ]}
            />
          </div>
        </div>

        {/* Fastfood */}
        <div>
          <Label>Fastfood</Label>
          <Help>Wie häufig pro Woche?</Help>
          <div className="mt-2">
            <Segment<Fastfood>
              value={form.fastfood}
              onChange={(v) => set("fastfood", v)}
              options={[
                { label: "Nie", value: "never" },
                { label: "1-2/Wo.", value: "1-2/Wo." },
                { label: "3-4/Wo.", value: "3-4/Wo." },
                { label: "5+/Wo.", value: "5+/Wo." },
              ]}
            />
          </div>
        </div>

        {/* Obst & Gemüse */}
        <div>
          <Label>Obst &amp; Gemüse (pro Tag)</Label>
          <Help>Portionen pro Tag.</Help>
          <div className="mt-2">
            <Segment<FruitsVeg>
              value={form.fruits_veg}
              onChange={(v) => set("fruits_veg", v)}
              options={[
                { label: "0-1/Tag", value: "0-1/Tag" },
                { label: "2-3/Tag", value: "2-3/Tag" },
                { label: "4-5/Tag", value: "4-5/Tag" },
                { label: "6+/Tag", value: "6+/Tag" },
              ]}
            />
          </div>
        </div>

        {/* Fisch */}
        <div>
          <Label>Fisch (pro Woche)</Label>
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
