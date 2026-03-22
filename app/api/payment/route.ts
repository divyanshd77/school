import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const amount = (body as { amount?: number })?.amount;
  if (!amount || amount < 1) {
    return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
  }

  const keyId = process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID;
  const keySecret = process.env.RAZORPAY_KEY_SECRET;

  if (!keyId || !keySecret) {
    console.info("Razorpay not configured; order stub only");
    return NextResponse.json({
      ok: true,
      dev: true,
      orderId: "dev_order",
      amount,
      currency: "INR",
    });
  }

  const rp = new Razorpay({ key_id: keyId, key_secret: keySecret });
  try {
    const order = await rp.orders.create({
      amount: Math.round(amount * 100),
      currency: "INR",
      receipt: `fee_${Date.now()}`,
    });
    return NextResponse.json({
      ok: true,
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "order_failed" }, { status: 500 });
  }
}
