import { NextResponse } from "next/server";
import { createSupabaseServerClient } from "@/lib/supabase/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const reference = body.reference;

    if (!reference || typeof reference !== "string") {
      return NextResponse.json(
        {
          success: false,
          message: "Transaction reference is required",
        },
        { status: 400 }
      );
    }

    const secretKey = process.env.PAYSTACK_SECRET_KEY;

    if (!secretKey) {
      console.error("PAYSTACK_SECRET_KEY is not configured");

      return NextResponse.json(
        {
          success: false,
          message: "Payment service is not configured",
        },
        { status: 500 }
      );
    }

    // 1. Find the transaction we originally created
    const supabase = createSupabaseServerClient();

    const { data: payment, error: paymentError } = await supabase
      .from("payments")
      .select("*")
      .eq("reference", reference)
      .single();

    if (paymentError || !payment) {
      return NextResponse.json(
        {
          success: false,
          message: "Payment record not found",
        },
        { status: 404 }
      );
    }

    // 2. Ask Paystack about the transaction
    const response = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${secretKey}`,
        },
      }
    );

    const data = await response.json();

    if (!response.ok || !data.status) {
      return NextResponse.json(
        {
          success: false,
          message: "Unable to verify transaction",
        },
        { status: 502 }
      );
    }

    const transaction = data.data;

    // 3. Check that the amount matches
    if (transaction.amount !== payment.amount) {
      console.error("Payment amount mismatch", {
        reference,
        expected: payment.amount,
        received: transaction.amount,
      });

      await supabase
        .from("payments")
        .update({
          status: "failed",
          updated_at: new Date().toISOString(),
        })
        .eq("reference", reference);

      return NextResponse.json(
        {
          success: false,
          message: "Payment amount mismatch",
        },
        { status: 400 }
      );
    }

    // 4. Check payment status
    if (transaction.status !== "success") {
      await supabase
        .from("payments")
        .update({
          status: "failed",
          updated_at: new Date().toISOString(),
        })
        .eq("reference", reference);

      return NextResponse.json({
        success: false,
        message: "Payment was not successful",
        status: transaction.status,
      });
    }

    // 5. Mark payment as successful
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
        {
          success: false,
          message: "Payment verified but database update failed",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "Payment verified successfully",
      reference: transaction.reference,
      amount: transaction.amount,
      status: transaction.status,
    });
  } catch (error) {
    console.error("Payment verification error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while verifying payment",
      },
      { status: 500 }
    );
  }
}