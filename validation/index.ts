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

export const contactSchema = z.object({
  name: z.string({ error: "Please enter your name" }).min(3, {
    error: "Name must be at least 3 characters long",
  }),
  email: z.email({ error: "Please enter a valid email address" }),
  subject: z.string({ error: "Please enter a subject" }).min(3, {
    error: "Subject must be at least 3 characters long",
  }),
  message: z.string({ error: "Please enter a message" }).min(10, {
    error: "Message must be at least 10 characters long",
  }),
});

export const forgotPasswordSchema = z.object({
  email: z.email({ error: "Please enter a valid email address" }),
});

export const verifyCodeSchema = z.object({
  code: z.string().min(6, { error: "Code must be 6 digits" }),
});

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, { error: "Password must be at least 8 characters long" })
      .max(32, { error: "Password must be at most 32 characters long" }),
    confirmPassword: z
      .string()
      .min(8, { error: "Password must be at least 8 characters long" })
      .max(32, { error: "Password must be at most 32 characters long" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    error: "Passwords do not match",
    path: ["confirmPassword"],
  });

// Filter validation
export const courseFilterSchema = z.object({
  search: z.string().optional(),
  category: z.string().optional(),
  level: z.string().optional(),
  popularity: z.string().optional(),
});

// Types
export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;
export type ContactSchema = z.infer<typeof contactSchema>;
export type CourseFilterSchema = z.infer<typeof courseFilterSchema>;
export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
export type VerifyCodeSchema = z.infer<typeof verifyCodeSchema>;
export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;
