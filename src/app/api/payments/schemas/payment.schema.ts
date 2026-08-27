import { z } from "zod";

export const paymentSchema = z.object({
  amount: z
    .number()
    .int()
    .min(100, "Minimum amount is ₦100")
    .max(100000, "Maximum amount is ₦100,000"),

  email: z
    .string()
    .email("Please provide a valid email address"),

  message: z
    .string()
    .trim()
    .max(500, "Message must be 500 characters or less")
    .optional()
    .default(""),
});

export type PaymentInput = z.infer<typeof paymentSchema>;