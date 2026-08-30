"use client";

import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { MoveRight } from "lucide-react";

const presetAmounts = [1000, 2500, 5000];

export default function CoffeeForm() {
  const [amount, setAmount] = useState<number>(2500);
  const [customAmount, setCustomAmount] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const selectedAmount = customAmount !== "" ? Number(customAmount) : amount;
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (isSubmitting) return;

    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/payments/initialize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: selectedAmount,
          email,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.message || "Unable to initialize payment");
      }
      window.location.href = data.authorizationUrl;
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );

      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-navy-light/50 text-cream space-y-6 text-left border border-gray-800 px-8 py-6 rounded-lg"
    >
      <div>
        <p className="mb-3 text-sm font-medium">
          How much would you like to give?
        </p>

        <ToggleGroup
          type="single"
          value={customAmount === "" ? String(amount) : undefined}
          onValueChange={(value) => {
            if (value) {
              setAmount(Number(value));
              setCustomAmount("");
            }
          }}
          className="grid w-full grid-cols-3 gap-3"
        >
          {presetAmounts.map((preset) => (
            <ToggleGroupItem
              key={preset}
              value={String(preset)}
              className="h-12 rounded-lg bg-navy border border-gray-700"
            >
              ₦{preset.toLocaleString()}
            </ToggleGroupItem>
          ))}
        </ToggleGroup>
      </div>

      <div>
        <label
          htmlFor="customAmount"
          className="mb-2 block text-sm font-medium"
        >
          Or enter a custom amount
        </label>

        <input
          id="customAmount"
          type="number"
          min="100"
          placeholder="Enter amount"
          value={customAmount}
          onChange={(e) => setCustomAmount(e.target.value)}
          className="w-full rounded-lg border border-gray-700 bg-navy px-4 py-3"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium">
          Email address
        </label>

        <input
          id="email"
          type="email"
          required
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-lg border border-gray-700 bg-navy  px-4 py-3"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium">
          Have a message?
        </label>

        <textarea
          id="message"
          rows={3}
          required
          placeholder="Drop a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full rounded-lg border border-gray-700 bg-navy  px-4 py-3 outline-none"
        />
      </div>
      {error && <p className="text-sm text-destructive">{error}</p>}
      <button
        disabled={isSubmitting}
        type="submit"
        className="text-navy bg-gold rounded-lg w-full cursor-pointer hover:bg-gold/60 hover:text-cream px-6 py-3 font-medium transition"
      >
        {isSubmitting ? (
          <p>Initializing payment...</p>
        ) : (
          <p className="flex items-center justify-center gap-2 w-full ">
            Continue
            <MoveRight />{" "}
          </p>
        )}
      </button>
    </form>
  );
}
