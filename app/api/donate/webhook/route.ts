import { createHmac, timingSafeEqual } from "crypto";
import { NextResponse } from "next/server";
import { sendDonationEmail } from "@/lib/email";

// Paystack calls this endpoint server-to-server on every charge event, even if
// the donor closed the tab. We verify the signature, then email the foundation
// on a successful charge.
export const runtime = "nodejs";

export async function POST(req: Request) {
  const secret = process.env.PAYSTACK_SECRET_KEY;
  if (!secret || secret.includes("replace_me")) {
    return NextResponse.json({ error: "Not configured." }, { status: 503 });
  }

  const rawBody = await req.text();
  const signature = req.headers.get("x-paystack-signature") ?? "";

  const expected = createHmac("sha512", secret).update(rawBody).digest("hex");
  if (!signaturesMatch(expected, signature)) {
    return NextResponse.json({ error: "Invalid signature." }, { status: 401 });
  }

  let event: {
    event?: string;
    data?: {
      amount?: number;
      currency?: string;
      reference?: string;
      channel?: string;
      customer?: { email?: string };
      metadata?: { name?: string };
    };
  };
  try {
    event = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid payload." }, { status: 400 });
  }

  if (event.event === "charge.success" && event.data) {
    const d = event.data;
    await sendDonationEmail({
      name: d.metadata?.name,
      email: d.customer?.email,
      amount: (d.amount ?? 0) / 100,
      currency: d.currency,
      channel: d.channel,
      reference: d.reference ?? "unknown",
    });
  }

  // Always acknowledge so Paystack doesn't retry.
  return NextResponse.json({ received: true });
}

function signaturesMatch(expected: string, received: string): boolean {
  if (received.length !== expected.length) return false;
  try {
    return timingSafeEqual(Buffer.from(expected), Buffer.from(received));
  } catch {
    return false;
  }
}
