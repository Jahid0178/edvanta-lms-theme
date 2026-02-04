"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSet,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { checkoutSchema, CheckoutSchema } from "@/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreditCard, Lock, ShieldCheck } from "lucide-react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const CheckoutForm = () => {
  const form = useForm<CheckoutSchema>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      email: "",
      cardName: "",
      cardNumber: "",
      cardExpiry: "",
      cardCVV: "",
    },
  });

  const onSubmit = (data: CheckoutSchema) => {
    // Implement Stripe payment gateway integration
    console.log(data);
    toast.success("Payment successful");
    form.reset();
  };
  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      <Card>
        <CardHeader className="flex flex-row items-center gap-3">
          <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
            <Lock className="w-4 h-4 text-indigo-600" />
          </span>
          <div>
            <CardTitle className="text-3xl">Secure Checkout</CardTitle>
            <CardDescription>Your payment is protected</CardDescription>
          </div>
        </CardHeader>
        <CardContent>
          <FieldGroup>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor="email">Email</FieldLabel>
                  <Input
                    id="email"
                    {...field}
                    aria-invalid={fieldState.invalid}
                    placeholder="john@example.com"
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                  <FieldDescription>
                    Receipt and course access will be sent here
                  </FieldDescription>
                </Field>
              )}
            />
            <FieldSet>
              <FieldLegend
                variant="legend"
                className="font-semibold flex items-center gap-2"
              >
                <CreditCard size={20} /> Card Details
              </FieldLegend>
              <Controller
                name="cardName"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="cardName">Name on Card</FieldLabel>
                    <Input
                      id="cardName"
                      {...field}
                      aria-invalid={fieldState.invalid}
                      placeholder="John Doe"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="cardNumber"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <FieldLabel htmlFor="cardNumber">Card Number</FieldLabel>
                    <Input
                      id="cardNumber"
                      {...field}
                      aria-invalid={fieldState.invalid}
                      placeholder="1234 5678 9012 3456"
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Field orientation={"horizontal"}>
                <Controller
                  name="cardExpiry"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="cardExpiry">Expiry Date</FieldLabel>
                      <Input
                        id="cardExpiry"
                        {...field}
                        aria-invalid={fieldState.invalid}
                        placeholder="MM/YY"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="cardCVV"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="cardCVV">CVV</FieldLabel>
                      <Input
                        id="cardCVV"
                        {...field}
                        aria-invalid={fieldState.invalid}
                        placeholder="123"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
              </Field>
            </FieldSet>
            <Button
              type="submit"
              className="text-base h-auto py-3 gradient-right-to-left"
            >
              <Lock className="w-4 h-4" />
              Pay $199.99
            </Button>
            <p className="flex justify-center items-center gap-1 text-sm text-muted-foreground">
              <ShieldCheck
                size={16}
                color="#22C55E"
                className="inline-block"
              />{" "}
              256-bit SSL Encrypted Payment
            </p>
          </FieldGroup>
        </CardContent>
      </Card>
    </form>
  );
};

export default CheckoutForm;
