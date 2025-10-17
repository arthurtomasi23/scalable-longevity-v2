// app/survey/page.tsx
"use client";

import { useEffect, useState } from "react";
import { track } from "@vercel/analytics";
import { scoreSurvey } from "@/lib/score";
import { STEPS, visibleFieldsForStep } from "@/lib/surveyConfig";
import type {
  FormState,
  ScoreResult,
  Gender,
  YesNo,
  Freq,
  Stress,
  Smoking,
  Fastfood,
  FruitsVeg,
  Fish,
  AgeOfOnset,
} from "@/lib/surveyTypes";

import ProfileStep from "@/components/survey/steps/ProfileStep";
import BodyStep from "@/components/survey/steps/BodyStep";
import ActivityStep from "@/components/survey/steps/ActivityStep";
import CardioStep from "@/components/survey/steps/CardioStep";
import LifestyleStep from "@/components/survey/steps/LifestyleStep";
import MetabolicStep from "@/components/survey/steps/MetabolicStep";
import ResultsPreview from "@/components/survey/ResultsPreview";
import StickyNav from "@/components/survey/StickyNav";

// Helper to assert required (strip "" at submit time)
const req = <T,>(v: T | ""): T => v as T;

type ScoreInput = {
  age: number;
  gender: Gender;
  height_cm: number;
  weight_kg: number;
  waist_cm: number;
  daily_movement: Freq;
  sport: Freq;
  mi_stroke_personal: YesNo;
  family_mi_stroke: YesNo;
  family_mi_stroke_onset: AgeOfOnset;
  stress: Stress;
  smoking: Smoking;
  fastfood: Fastfood;
  systolic_bp: number;
  fruits_veg: FruitsVeg;
  fish: Fish;
  diabetes_dx: YesNo;
  hba1c?: number;
  ldl: number;
  hdl: number;
  bp_treated?: boolean;
  ldl_treated?: boolean;
};

export default function SurveyPage() {
  const [step, setStep] = useState(0);
  const [preview, setPreview] = useState<ScoreResult | null>(null);

  const [form, setForm] = useState<FormState>({
    age: "",
    gender: "",
    height_cm: "",
    weight_kg: "",
    waist_cm: "",
    daily_movement: "",
    sport: "",
    mi_stroke_personal: "",
    family_mi_stroke: "",
    family_mi_stroke_onset: "",
    stress: "",
    smoking: "",
    fastfood: "",
    systolic_bp: "",
    fruits_veg: "",
    fish: "",
    diabetes_dx: "",
    hba1c: "",
    ldl: "",
    hdl: "",
  });

  useEffect(() => {
    track("survey_view_start");
  }, []);

  const progress = ((step + 1) / STEPS.length) * 100;

  function set<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function canContinue(currStep = step) {
    const fields = visibleFieldsForStep(currStep, form);
    return fields.every((k) => {
      const v = form[k];
      return v !== "" && v !== null;
    });
  }

  function next() {
    track("survey_next", { step: STEPS[step].key });
    setStep((s) => Math.min(s + 1, STEPS.length - 1));
  }
  function back() {
    track("survey_prev", { step: STEPS[step].key });
    setStep((s) => Math.max(s - 1, 0));
  }

  function submit() {
    const payload: ScoreInput = {
      age: Number(form.age),
      gender: req<Gender>(form.gender),
      height_cm: Number(form.height_cm),
      weight_kg: Number(form.weight_kg),
      waist_cm: Number(form.waist_cm),
      daily_movement: req<Freq>(form.daily_movement),
      sport: req<Freq>(form.sport),
      mi_stroke_personal: req<YesNo>(form.mi_stroke_personal),
      family_mi_stroke: req<YesNo>(form.family_mi_stroke),
      family_mi_stroke_onset: req<AgeOfOnset>(form.family_mi_stroke_onset),
      stress: req<Stress>(form.stress),
      smoking: req<Smoking>(form.smoking),
      fastfood: req<Fastfood>(form.fastfood),
      systolic_bp: Number(form.systolic_bp),
      fruits_veg: req<FruitsVeg>(form.fruits_veg),
      fish: req<Fish>(form.fish),
      diabetes_dx: req<YesNo>(form.diabetes_dx),
      // FIX: only include hba1c when diabetes == "yes"
      hba1c: form.diabetes_dx === "yes" ? Number(form.hba1c) : undefined,
      ldl: Number(form.ldl),
      hdl: Number(form.hdl),
      bp_treated: false,
      ldl_treated: false,
    };

    const result = scoreSurvey(payload);
    setPreview(result);
    track("survey_submit", { totalDelta: result.totalDelta });
  }

  return (
    <section
      id="survey"
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-16"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/background.jpg')" }}
      />
      <div className="absolute inset-0 bg-white/10 backdrop-blur-xl" />

      {/* Content wrapper (centered, column) */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex flex-col items-center">
        {/* Header + Progress */}
        {!preview && (
          <div className="flex flex-col w-full items-center text-center">
            <h1 className="text-4xl md:text-5xl font-medium text-font-primary">
              Selbsttest
            </h1>
            <p className="mt-4 text-xl text-font-primary/80 max-w-3xl">
              Dein Selbsttest erlaubt Dir, Deine persönlichen Handlungsfelder zu
              identifizieren, um Deine gesunde Lebensspanne (Healthspan) zu
              optimieren.
            </p>

            {/* Wider + thicker progress bar */}
            <div className="mt-10 w-full max-w-4xl">
              <div className="h-2 md:h-3 w-full rounded-full bg-black/10 overflow-hidden">
                <div
                  className="h-full rounded-full bg-primary transition-[width] duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <div className="mt-2 text-sm md:text-base text-font-primary/80 text-center">
                Schritt {step + 1} von {STEPS.length}
              </div>
            </div>
          </div>
        )}

        {/* Steps content */}
        {!preview && (
          <div className="mt-10 w-full max-w-4xl mx-auto pb-36 grid gap-5">
            {STEPS[step].key === "profile" && (
              <ProfileStep form={form} set={set} />
            )}
            {STEPS[step].key === "body" && <BodyStep form={form} set={set} />}
            {STEPS[step].key === "activity" && (
              <ActivityStep form={form} set={set} />
            )}
            {STEPS[step].key === "cardio" && (
              <CardioStep form={form} set={set} />
            )}
            {STEPS[step].key === "lifestyle" && (
              <LifestyleStep form={form} set={set} />
            )}
            {STEPS[step].key === "metabolic" && (
              <MetabolicStep form={form} set={set} />
            )}
          </div>
        )}

        {/* Preview */}
        {preview && (
          <div className="relative z-10 flex w-full h-full justify-center items-center px-4 py-28">
            <ResultsPreview preview={preview} chronoAge={Number(form.age)} />
          </div>
        )}

        {/* Sticky nav */}
        {!preview && (
          <StickyNav
            canBack={step > 0}
            canNext={canContinue()}
            atEnd={step === STEPS.length - 1}
            onBack={back}
            onNext={next}
            onSubmit={submit}
          />
        )}
      </div>
    </section>
  );
}
