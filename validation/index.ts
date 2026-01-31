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

// Types
export type LoginSchema = z.infer<typeof loginSchema>;
