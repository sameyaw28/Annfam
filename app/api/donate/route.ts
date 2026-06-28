import { NextResponse } from "next/server";

// Initialize a Paystack transaction (Mobile Money + Visa/Mastercard, in GHS).
// The donor is sent to Paystack's secure checkout, then returned to /donate to verify.
export async function POST(req: Request) {
  const secret = process.env.PAYSTACK_SECRET_KEY;
  if (!secret || secret.includes("replace_me")) {
    return NextResponse.json(
      { error: "Payments are not configured yet. Add your Paystack keys to .env.local." },
      { status: 503 },
    );
  }

  let body: {
    amount?: number;
    email?: string;
    name?: string;
    frequency?: string;
    message?: string;
  };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const amount = Number(body.amount);
  const email = String(body.email ?? "").trim();
  if (!email || !/\S+@\S+\.\S+/.test(email) || !(amount > 0)) {
    return NextResponse.json({ error: "A valid email and amount are required." }, { status: 400 });
  }

  const origin =
    req.headers.get("origin") ??
    process.env.NEXT_PUBLIC_SITE_URL ??
    "http://localhost:3000";

  try {
    const res = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secret}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        // Paystack expects the smallest unit (pesewas for GHS).
        amount: Math.round(amount * 100),
        currency: "GHS",
        channels: ["mobile_money", "card"],
        callback_url: `${origin}/donate`,
        metadata: {
          name: body.name ?? "",
          frequency: body.frequency ?? "once",
          message: body.message ?? "",
          custom_fields: [
            {
              display_name: "Donor name",
              variable_name: "donor_name",
              value: body.name ?? "",
            },
            {
              display_name: "Frequency",
              variable_name: "frequency",
              value: body.frequency ?? "once",
            },
          ],
        },
      }),
    });

    const data = await res.json();
    if (!res.ok || !data.status) {
      return NextResponse.json(
        { error: data.message ?? "Could not start the payment. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({
      authorization_url: data.data.authorization_url as string,
      reference: data.data.reference as string,
    });
  } catch {
    return NextResponse.json(
      { error: "Could not reach the payment service. Please try again." },
      { status: 502 },
    );
  }
}
