import { Resend } from "resend";

type DonationEmail = {
  name?: string;
  email?: string;
  amount: number;
  currency?: string;
  channel?: string | null;
  reference: string;
};

function isConfigured(key: string | undefined): key is string {
  return Boolean(key) && !key!.includes("replace_me") && !key!.includes("xxxx");
}

// Notifies the foundation of a confirmed donation. Never throws — a failed send
// must not break the webhook (Paystack retries any non-200 response).
export async function sendDonationEmail(donation: DonationEmail): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!isConfigured(apiKey)) {
    console.warn(
      "[donation] RESEND_API_KEY not set — skipping email. Donation:",
      donation.reference,
    );
    return;
  }

  const to = process.env.DONATION_NOTIFY_EMAIL || "annfamfoundation@gmail.com";
  const from = process.env.DONATION_FROM_EMAIL || "onboarding@resend.dev";

  const currency = donation.currency ?? "GHS";
  const symbol = currency === "GHS" ? "₵" : `${currency} `;
  const amount = `${symbol}${donation.amount.toLocaleString()}`;
  const donor = donation.name?.trim() || "Anonymous";
  const channel = donation.channel
    ? donation.channel.replace(/_/g, " ")
    : "unknown";

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: `ANNFAM Donations <${from}>`,
      to,
      replyTo: donation.email || undefined,
      subject: `New donation: ${amount} from ${donor}`,
      text: [
        `A new donation was confirmed on the ANNFAM Foundation site.`,
        ``,
        `Amount:    ${amount}`,
        `Donor:     ${donor}`,
        `Email:     ${donation.email || "—"}`,
        `Method:    ${channel}`,
        `Reference: ${donation.reference}`,
      ].join("\n"),
    });
    if (error) {
      console.error("[donation] Resend error:", error);
    }
  } catch (err) {
    console.error("[donation] Failed to send notification email:", err);
  }
}
