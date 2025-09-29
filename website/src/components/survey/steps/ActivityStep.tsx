// components/survey/steps/ActivityStep.tsx
"use client";
import Card from "@/components/survey/Card";
import Segment from "@/components/survey/Segment";
import { Label, Help } from "@/components/survey/Label";
import type { FormState, Freq } from "@/lib/surveyTypes";

export default function ActivityStep({
  form,
  set,
}: {
  form: FormState;
  set: <K extends keyof FormState>(key: K, value: FormState[K]) => void;
}) {
  return (
    <Card>
      <Label>Aktivität</Label>

      <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <Label>Tägliche Bewegung &gt; 30&nbsp;Min.</Label>
          <Help>
            Wie oft pro Woche gehst du spazieren/bewegst dich mind.
            30&nbsp;Minuten?
          </Help>
          <div className="mt-2">
            <Segment<Freq>
              value={form.daily_movement}
              onChange={(v) => set("daily_movement", v)}
              options={[
                { label: "0/Wo.", value: "0/Wo." },
                { label: "1-2/Wo.", value: "1-2/Wo." }, // keep exact value keys
                { label: "3-4/Wo.", value: "3-4/Wo." },
                { label: "5-7/Wo.", value: "5-7/Wo." },
              ]}
            />
          </div>
        </div>

        <div>
          <Label>Sport &gt; 30&nbsp;Min.</Label>
          <Help>Geplante Trainingseinheiten pro Woche.</Help>
          <div className="mt-2">
            <Segment<Freq>
              value={form.sport}
              onChange={(v) => set("sport", v)}
              options={[
                { label: "0/Wo.", value: "0/Wo." },
                { label: "1-2/Wo.", value: "1-2/Wo." },
                { label: "3-4/Wo.", value: "3-4/Wo." },
                { label: "5-7/Wo.", value: "5-7/Wo." },
              ]}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
