// app/api/newsletter/route.ts
import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const supabase = createClient(supabaseUrl, serviceRoleKey);

export async function POST(req: NextRequest) {
  console.log("📥 API ROUTE HIT: /api/newsletter");

  try {
    const body = await req.json();
    const email = body.email?.trim();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    console.log("📌 Inserting email:", email);

    const { data, error } = await supabase
      .from("newsletter_emails")
      .insert([{ email: email }])
      .select("id")
      .single();

    if (error) {
      console.error("❌ Supabase Insert Error:", error);
      // Check if it's a duplicate email error
      if (error.code === "23505") {
        return NextResponse.json(
          { error: "Email already subscribed", details: error.message },
          { status: 409 }
        );
      }
      return NextResponse.json(
        { error: "Failed to save email", details: error.message },
        { status: 500 }
      );
    }

    console.log("✅ INSERT SUCCESS → ID:", data.id);

    return NextResponse.json(
      { success: true, id: data.id },
      { status: 201 }
    );
  } catch (err: unknown) {
    console.error("🔥 API CRASH:", err);
    const message = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { error: "Server error", details: message },
      { status: 500 }
    );
  }
}
