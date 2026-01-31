"use client";

import React from "react";
import Link from "next/link";
import toast from "react-hot-toast";
import Logo from "@/components/common/Logo/Logo";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { FaGoogle, FaApple } from "react-icons/fa";
import { Controller, useForm } from "react-hook-form";
import { ArrowRight } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterSchema } from "@/validation";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";

const RegisterForm = () => {
  const form = useForm({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      agreeToTerms: false,
    },
  });

  const onSubmit = (data: RegisterSchema) => {
    // Implement register logic here
    console.log(data);
    toast.success("Register successful");
  };

  return (
    <div className="w-full max-w-[450px] space-y-8 p-3">
      <Logo redirectUrl="/" />
      <SectionHeader
        title="Create your account"
        description="Start your learning journey today"
      />
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FieldSet>
          <FieldGroup>
            <Controller
              name="fullName"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
                  <Input
                    {...field}
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    {...field}
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="password">Password</FieldLabel>
                  <Input
                    {...field}
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    aria-invalid={fieldState.invalid}
                  />
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Field>
              <Controller
                name="agreeToTerms"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field
                    orientation="horizontal"
                    data-invalid={fieldState.invalid}
                  >
                    <Checkbox
                      id="agreeToTerms"
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                      onBlur={field.onBlur}
                      className="rounded-full data-[state=checked]:bg-indigo-500 data-[state=checked]:border-indigo-500 border-indigo-500"
                    />
                    <FieldLabel
                      htmlFor="agreeToTerms"
                      className="text-gray-500"
                    >
                      I agree to the{" "}
                      <Link
                        href="#"
                        className="text-indigo-500 hover:underline"
                      >
                        Terms of Service
                      </Link>{" "}
                      and{" "}
                      <Link
                        href="#"
                        className="text-indigo-500 hover:underline"
                      >
                        Privacy Policy
                      </Link>
                    </FieldLabel>
                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </Field>
            <Button
              type="submit"
              className="w-full gradient-left-to-right text-base"
            >
              Create Account
              <ArrowRight size={16} />
            </Button>
          </FieldGroup>
        </FieldSet>
      </form>
      {/* SEPARATOR */}
      <FieldSeparator className="my-6">or continue with</FieldSeparator>
      {/* OAuth Buttons */}
      <Field className="grid grid-cols-2 gap-4">
        <Button
          variant="outline"
          className="font-semibold"
        >
          <FaGoogle /> Google
        </Button>
        <Button
          variant="outline"
          className="font-semibold"
        >
          <FaApple /> Apple
        </Button>
      </Field>
      <div className="text-center">
        Already have an account?{" "}
        <Link
          href="/auth/login"
          className="text-indigo-500 hover:underline"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default RegisterForm;
