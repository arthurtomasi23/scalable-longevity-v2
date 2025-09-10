// components/survey/steps/ActivityStep.tsx
"use client";
import Card from "@/components/ui/Card";
import Segment from "@/components/ui/Segment";
import { Label, Help } from "@/components/ui/Label";
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
      <Label>Activity</Label>
      <div className="mt-3 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <Label>Daily movement &gt; 30 min</Label>
          <Help>How many days per week do you walk/move &gt;30 minutes?</Help>
          <div className="mt-2">
            <Segment<Freq>
              value={form.daily_movement}
              onChange={(v) => set("daily_movement", v)}
              options={[
                { label: "0/Wo.", value: "0/Wo." },
                { label: "1–2/Wo.", value: "1-2/Wo." },
                { label: "3–4/Wo.", value: "3-4/Wo." },
                { label: "5–7/Wo.", value: "5-7/Wo." },
              ]}
            />
          </div>
        </div>
        <div>
          <Label>Sport &gt; 30 min</Label>
          <Help>Dedicated exercise sessions per week.</Help>
          <div className="mt-2">
            <Segment<Freq>
              value={form.sport}
              onChange={(v) => set("sport", v)}
              options={[
                { label: "0/Wo.", value: "0/Wo." },
                { label: "1–2/Wo.", value: "1-2/Wo." },
                { label: "3–4/Wo.", value: "3-4/Wo." },
                { label: "5–7/Wo.", value: "5-7/Wo." },
              ]}
            />
          </div>
        </div>
      </div>
    </Card>
  );
}
