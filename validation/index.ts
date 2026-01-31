import * as z from "zod";

// Schemas
export const loginSchema = z.object({
  email: z.email({ error: "Please enter a valid email address" }),
  password: z
    .string()
    .min(8, { error: "Password must be at least 8 characters long" })
    .max(32, { error: "Password must be at most 32 characters long" }),
  remember: z.boolean({ error: "Please check the checkbox" }).default(false),
});

export const registerSchema = z.object({
  fullName: z
    .string()
    .min(3, { error: "Full name must be at least 3 characters long" })
    .max(32, { error: "Full name must be at most 32 characters long" }),
  email: z.email({ error: "Please enter a valid email address" }),
  password: z
    .string({ error: "Please enter a valid password" })
    .min(8, { error: "Password must be at least 8 characters long" })
    .max(32, { error: "Password must be at most 32 characters long" }),
  agreeToTerms: z
    .boolean({ error: "Please check the checkbox" })
    .default(false),
});

// Types
export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
