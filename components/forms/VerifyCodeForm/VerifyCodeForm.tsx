"use client";

import Link from "next/link";
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
import { verifyCodeSchema, VerifyCodeSchema } from "@/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { BadgeCheck, Lock } from "lucide-react";
import { redirect, RedirectType } from "next/navigation";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";

const VerifyCodeForm = () => {
  const form = useForm<VerifyCodeSchema>({
    resolver: zodResolver(verifyCodeSchema),
    defaultValues: {
      code: "",
    },
  });

  const onSubmit = (data: VerifyCodeSchema) => {
    console.log(data);
    // Implement forgot password logic here
    toast.success("Code verified successfully");
    redirect("/auth/reset-password", RedirectType.replace);
  };
  return (
    <div className="w-full max-w-[450px] space-y-8 p-3">
      <SectionHeader
        title="Verify code"
        description="An authentication code has been sent to your email."
      />
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FieldSet>
          <FieldGroup>
            <Controller
              name="code"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel htmlFor="code">Enter Code</FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      id="code"
                      {...field}
                      type="text"
                      placeholder="Enter verification code"
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align="inline-start">
                      <Lock className="text-muted-foreground" />
                    </InputGroupAddon>
                  </InputGroup>
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                  <p className="text-sm text-muted-foreground">
                    Didn't receive a code?{" "}
                    <Button
                      asChild
                      variant="link"
                    >
                      <Link
                        href="#"
                        className="text-primary"
                      >
                        Resend
                      </Link>
                    </Button>
                  </p>
                </Field>
              )}
            />
            <Button
              type="submit"
              className="w-full gradient-left-to-right text-base"
            >
              Verify
              <BadgeCheck size={16} />
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

export default VerifyCodeForm;
