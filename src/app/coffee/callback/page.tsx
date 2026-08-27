"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { FcApproval } from "react-icons/fc";
import { IoHourglassOutline } from "react-icons/io5";
import { VscErrorCompact } from "react-icons/vsc";

type PaymentStatus = "verifying" | "success" | "failed";

export default function CoffeeCallbackPage() {
  const searchParams = useSearchParams();
  const reference = searchParams.get("reference");

  const [status, setStatus] = useState<PaymentStatus>(
    reference ? "verifying" : "failed",
  );

  const [message, setMessage] = useState(
    reference
      ? "Please wait while we confirm your payment."
      : "We couldn't find your payment reference.",
  );
  useEffect(() => {
    if (!reference) {
      return;
    }

    let cancelled = false;

    const verifyPayment = async () => {
      try {
        const response = await fetch("/api/payments/verify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            reference,
          }),
        });

        const data = await response.json();

        if (cancelled) return;

        if (!response.ok || !data.success) {
          setStatus("failed");
          setMessage(data.message || "Payment verification failed.");
          return;
        }

        setStatus("success");
        setMessage("Your payment was successfully verified.");
      } catch {
        if (cancelled) return;

        setStatus("failed");
        setMessage("We couldn't verify your payment. Please try again.");
      }
    };

    verifyPayment();

    return () => {
      cancelled = true;
    };
  }, [reference]);

  return (
    <main className="min-h-screen">
      <section className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-6 text-center">
        <span className="mb-6 text-5xl">
          {status === "verifying" ? <IoHourglassOutline className="animate-spin" /> : status === "success" ? <FcApproval className="animate-pulse"/> : <VscErrorCompact className="text-red-400"/>}
        </span>

        <h1 className="text-3xl font-bold">
          {status === "verifying"
            ? "Confirming your payment..."
            : status === "success"
              ? "Thank you!"
              : "Payment verification failed"}
        </h1>

        <p className="mt-4 text-muted-foreground">{message}</p>

        {reference && (
          <p className="mt-6 text-sm text-muted-foreground">
            Reference:
            <span className="ml-2 font-mono">{reference}</span>
          </p>
        )}
      </section>
    </main>
  );
}
