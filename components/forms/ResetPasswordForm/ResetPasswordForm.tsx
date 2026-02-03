"use client";

import toast from "react-hot-toast";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldSeparator,
  FieldSet,
} from "@/components/ui/field";
import { Button } from "@/components/ui/button";
import { FaApple, FaGoogle } from "react-icons/fa";
import { Controller, useForm } from "react-hook-form";
import { resetPasswordSchema, ResetPasswordSchema } from "@/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { Lock, LockOpen } from "lucide-react";
import { redirect, RedirectType } from "next/navigation";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

const ResetPasswordForm = () => {
  const form = useForm<ResetPasswordSchema>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = (data: ResetPasswordSchema) => {
    console.log(data);
    // Implement set password logic here
    toast.success("Password reset successfully");
    redirect("/auth/login", RedirectType.replace);
  };
  return (
    <div className="w-full max-w-[450px] space-y-8 p-3">
      <SectionHeader
        title="Set a password"
        description="Your previous password has been reset. Please set a new password for your account."
      />
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FieldSet>
          <FieldGroup>
            <Controller
              name="password"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel htmlFor="password">Enter New Password</FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      id="password"
                      {...field}
                      type="password"
                      placeholder="Enter your password"
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align="inline-start">
                      <Lock className="text-muted-foreground" />
                    </InputGroupAddon>
                  </InputGroup>
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="confirmPassword"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel htmlFor="confirmPassword">
                    Re-enter Password
                  </FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      id="confirmPassword"
                      {...field}
                      type="password"
                      placeholder="Re-enter your password"
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align="inline-start">
                      <Lock className="text-muted-foreground" />
                    </InputGroupAddon>
                  </InputGroup>
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Button
              type="submit"
              className="w-full gradient-left-to-right text-base"
            >
              Set Password
              <LockOpen size={16} />
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
    </div>
  );
};

export default ResetPasswordForm;
