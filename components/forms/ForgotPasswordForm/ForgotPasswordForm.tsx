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
import { forgotPasswordSchema, ForgotPasswordSchema } from "@/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight, Mail } from "lucide-react";
import { redirect, RedirectType } from "next/navigation";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

const ForgotPasswordForm = () => {
  const form = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data: ForgotPasswordSchema) => {
    console.log(data);
    // Implement forgot password logic here
    toast.success("Reset link sent successfully");
    redirect("/auth/verify-code", RedirectType.replace);
  };
  return (
    <div className="w-full max-w-[450px] space-y-8 p-3">
      <SectionHeader
        title="Forgot your password?"
        description="Don’t worry, happens to all of us. Enter your email below to recover your password"
      />
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FieldSet>
          <FieldGroup>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      {...field}
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      aria-invalid={fieldState.invalid}
                    />
                    <InputGroupAddon align="inline-start">
                      <Mail className="text-muted-foreground" />
                    </InputGroupAddon>
                  </InputGroup>
                  {/* <Input
                    {...field}
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    aria-invalid={fieldState.invalid}
                  /> */}
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
              Submit
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
    </div>
  );
};

export default ForgotPasswordForm;
