import { NextResponse } from "next/server";
import crypto from "crypto";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const secretKey = process.env.PAYSTACK_SECRET_KEY;

    if (!secretKey) {
      console.error("PAYSTACK_SECRET_KEY is not configured");

      return NextResponse.json(
        { message: "Payment service is not configured" },
        { status: 500 }
      );
    }

    // Read the raw request body
    const rawBody = await request.text();

    // Get Paystack's signature
    const signature = request.headers.get("x-paystack-signature");

    if (!signature) {
      return NextResponse.json(
        { message: "Missing signature" },
        { status: 401 }
      );
    }

    // Generate our own signature
    const hash = crypto
      .createHmac("sha512", secretKey)
      .update(rawBody)
      .digest("hex");

    // Compare signatures
    if (hash !== signature) {
      return NextResponse.json(
        { message: "Invalid signature" },
        { status: 401 }
      );
    }

    const event = JSON.parse(rawBody);

    console.log("Paystack webhook:", event.event);

    if (event.event !== "charge.success") {
      return NextResponse.json({
        received: true,
      });
    }

    const transaction = event.data;

    const reference = transaction.reference;
    const amount = transaction.amount;

    if (!reference) {
      return NextResponse.json(
        { message: "Missing transaction reference" },
        { status: 400 }
      );
    }

    // Find our payment
    const supabase = createSupabaseServerClient();

    const { data: payment, error: paymentError } = await supabase
      .from("payments")
      .select("*")
      .eq("reference", reference)
      .single();

    if (paymentError || !payment) {
      console.error("Payment not found:", reference);

      return NextResponse.json(
        { message: "Payment not found" },
        { status: 404 }
      );
    }

    // Verify amount
    if (transaction.amount !== payment.amount) {
      console.error("Webhook amount mismatch:", {
        reference,
        expected: payment.amount,
        received: amount,
      });

      return NextResponse.json(
        { message: "Amount mismatch" },
        { status: 400 }
      );
    }

    // Update payment
    const { error: updateError } = await supabase
      .from("payments")
      .update({
        status: "success",
        updated_at: new Date().toISOString(),
      })
      .eq("reference", reference);

    if (updateError) {
      console.error("Failed to update payment:", updateError);

      return NextResponse.json(
        { message: "Failed to update payment" },
        { status: 500 }
      );
    }

    return NextResponse.json({
      received: true,
    });
  } catch (error) {
    console.error("Webhook error:", error);

    return NextResponse.json(
      { message: "Webhook processing failed" },
      { status: 500 }
    );
  }
}