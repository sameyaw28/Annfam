import { NextResponse } from "next/server";

// Verify a Paystack transaction by reference after the donor returns from checkout.
export async function GET(req: Request) {
  const secret = process.env.PAYSTACK_SECRET_KEY;
  if (!secret || secret.includes("replace_me")) {
    return NextResponse.json({ success: false, error: "Payments are not configured." }, { status: 503 });
  }

  const reference = new URL(req.url).searchParams.get("reference");
  if (!reference) {
    return NextResponse.json({ success: false, error: "Missing reference." }, { status: 400 });
  }

  try {
    const res = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
      { headers: { Authorization: `Bearer ${secret}` }, cache: "no-store" },
    );
    const data = await res.json();
    const success = Boolean(data.status) && data.data?.status === "success";

    return NextResponse.json({
      success,
      reference,
      amount: data.data?.amount ? data.data.amount / 100 : null,
      currency: data.data?.currency ?? "GHS",
      channel: data.data?.channel ?? null,
      name: data.data?.metadata?.name ?? "",
    });
  } catch {
    return NextResponse.json({ success: false, error: "Could not verify the payment." }, { status: 502 });
  }
}
