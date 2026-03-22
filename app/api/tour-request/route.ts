import { NextResponse } from "next/server";
import { getResend } from "@/lib/resend";
import { siteConfig } from "@/lib/site";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Invalid" }, { status: 400 });

  const resend = getResend();
  const to = process.env.CONTACT_EMAIL ?? siteConfig.email;

  if (!resend) {
    console.info("Tour request (no RESEND_API_KEY):", body);
    return NextResponse.json({ ok: true, dev: true });
  }

  try {
    await resend.emails.send({
      from: "Jaipuria Website <onboarding@resend.dev>",
      to,
      subject: "School tour request",
      text: JSON.stringify(body, null, 2),
    });
    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "send_failed" }, { status: 500 });
  }
}
