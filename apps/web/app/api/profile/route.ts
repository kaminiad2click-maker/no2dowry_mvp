import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json(); // gender, occupation, etc.
    // TODO: Save to DB here. For now we just accept it.

    const res = NextResponse.json({ ok: true });
    // mark profile as completed for middleware
    res.cookies.set("profileCompleted", "true", {
      httpOnly: false, // readable by client if needed
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 365, // 1 year
    });
    return res;
  } catch (e) {
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }
}
