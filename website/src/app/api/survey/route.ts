// app/api/survey/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, serviceRoleKey);

export async function POST(req: NextRequest) {
  console.log("📥 API ROUTE HIT: /api/survey");

  try {
    const body = await req.json();
    console.log("📌 Received body:", body);

    const payload = {
      ...body,
      share_data:
        typeof body.share_data === "boolean" ? body.share_data : true,
    };

    console.log("📦 Final Insert Payload:", payload);

    const { data, error } = await supabase
      .from("survey_responses")
      .insert([payload])
      .select("id")
      .single();

    if (error) {
      console.error("❌ Supabase Insert Error:", error);
      return NextResponse.json(
        { error: "DB insert failed", details: error.message },
        { status: 500 }
      );
    }

    console.log("✅ INSERT SUCCESS → ID:", data.id);

    return NextResponse.json({ id: data.id }, { status: 201 });
  } catch (err: unknown) {
    console.error("🔥 API CRASH:", err);
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { error: "Server error", details: message },
      { status: 500 }
    );
  }
}
