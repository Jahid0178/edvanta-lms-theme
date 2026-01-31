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
import { loginSchema, LoginSchema } from "@/validation";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";

const LoginForm = () => {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit = (data: LoginSchema) => {
    // Implement login logic here
    console.log(data);
    toast.success("Login successful");
  };

  return (
    <div className="w-full max-w-[450px] space-y-8 p-3">
      <Logo redirectUrl="/" />
      <SectionHeader
        title="Welcome Back!"
        description="Enter your credentials to access your account"
      />
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FieldSet>
          <FieldGroup>
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
            <Field className="grid grid-cols-2">
              <Controller
                name="remember"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field
                    orientation="horizontal"
                    data-invalid={fieldState.invalid}
                  >
                    <Checkbox
                      id="remember"
                      checked={field.value}
                      onCheckedChange={(checked) => field.onChange(checked)}
                      onBlur={field.onBlur}
                      className="rounded-full data-[state=checked]:bg-indigo-500 data-[state=checked]:border-indigo-500 border-indigo-500"
                    />
                    <FieldLabel
                      htmlFor="remember"
                      className="text-gray-500"
                    >
                      Remember me
                    </FieldLabel>
                    {fieldState.error && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Field className="text-end">
                <Link
                  href="/auth/forgot-password"
                  className="text-sm text-indigo-500 hover:underline"
                >
                  Forgot password?
                </Link>
              </Field>
            </Field>
            <Button
              type="submit"
              className="w-full gradient-left-to-right text-base"
            >
              Sign In
              <ArrowRight size={16} />
            </Button>
          </FieldGroup>
        </FieldSet>
      </form>
      {/* SEPARATOR */}
      <FieldSeparator className="my-6">Or continue with</FieldSeparator>
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
        Don't have an account?{" "}
        <Link
          href="/auth/register"
          className="text-indigo-500 hover:underline"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default LoginForm;
