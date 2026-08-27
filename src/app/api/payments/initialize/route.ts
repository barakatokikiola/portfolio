import { NextResponse } from "next/server";
import { paymentSchema } from "../schemas/payment.schema";
import { createSupabaseServerClient } from "@/lib/supabase/server";


export async function POST(request: Request) {
  try {
    const body = await request.json();

    const result = paymentSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid payment information",
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const { amount, email, message } = result.data;

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

    const paystackResponse = await fetch(
      "https://api.paystack.co/transaction/initialize",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${secretKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          amount: amount * 100,
          callback_url: `${process.env.NEXT_PUBLIC_APP_URL}/coffee/callback`,
          metadata: {
            message,
          },
        }),
      }
    );

    const paystackData = await paystackResponse.json();

    if (!paystackResponse.ok || !paystackData.status) {
      console.error("Paystack initialization failed:", paystackData);

      return NextResponse.json(
        {
          success: false,
          message: "Unable to initialize payment",
        },
        { status: 502 }
      );
    }

    const supabase = createSupabaseServerClient();

const { error: databaseError } = await supabase
  .from("payments")
  .insert({
    reference: paystackData.data.reference,
    email,
    amount: amount * 100,
    message,
    status: "pending",
    provider: "paystack",
  });

if (databaseError) {
  console.error("Failed to save payment:", databaseError);

  return NextResponse.json(
    {
      success: false,
      message: "Unable to create payment record",
    },
    { status: 500 }
  );
}

    return NextResponse.json({
      success: true,
      authorizationUrl: paystackData.data.authorization_url,
      reference: paystackData.data.reference,
    });
  } catch (error) {
    console.error("Payment initialization error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while initializing payment",
      },
      { status: 500 }
    );
  }
}