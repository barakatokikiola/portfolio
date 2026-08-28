"use client";
import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CiCircleCheck } from "react-icons/ci";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { SlClose } from "react-icons/sl";

type PaymentStatus = "verifying" | "success" | "failed";

function CoffeeCallback() {
  const router = useRouter();
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
        router.push("/");
        router.refresh();
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
    <main className="min-h-screen flex">
      <section className="bg-white/90 flex flex-col items-center justify-center text-navy p-12 rounded-md  h-80 max-w-xl m-auto">
        <span className="mb-6 text-5xl">
          {status === "verifying" ? (
            <AiOutlineLoading3Quarters className="animate-spin" />
          ) : status === "success" ? (
            <CiCircleCheck className="text-green-500" />
          ) : (
            <SlClose className="text-red-500" />
          )}
        </span>

        <h1 className="text-3xl font-medium">
          {status === "verifying"
            ? "Confirming your payment..."
            : status === "success"
              ? "Thank you!"
              : "Payment verification failed"}
        </h1>

        <p className="mt-4 text-muted-foreground">{message}</p>
      </section>
    </main>
  );
}

export default function CoffeeCallbackPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <CoffeeCallback />
    </Suspense>
  );
}
