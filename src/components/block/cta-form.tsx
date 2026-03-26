"use client";

import type z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { useState } from "react";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "../ui/field";
import { Input } from "../ui/input";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "../ui/input-group";
import { Button } from "../ui/button";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight02FreeIcons } from "@hugeicons/core-free-icons";
import { formSchema } from "@/lib/schema/cta-form";
import { bookCallAction } from "@/actions/book";
import { Turnstile } from "nextjs-turnstile";

const formatUKPhone = (value: string): string => {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (!digits) return value;

  if (digits.length <= 4) return digits;
  if (digits.length <= 7) return `${digits.slice(0, 4)} ${digits.slice(4)}`;
  return `${digits.slice(0, 4)} ${digits.slice(4, 7)} ${digits.slice(7)}`;
};

export default function CtaForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      turnstileToken: "",
    },
  });

  const messageLength = form.watch("message")?.length || 0;

  async function onSubmit(data: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const phoneData = {
        ...data,
        fullPhone: `+44 ${data.phone.replace(/\D/g, "")}`,
      };
      console.log("Form submitted:", phoneData);

      const response = await bookCallAction(phoneData);

      console.log("API response:", response);

      // form.reset();
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
      <FieldGroup>
        {/* Row 1: Name and Email */}
        <div className="grid gap-4 md:grid-cols-2">
          <Controller
            name="name"
            control={form.control}
            render={({ field, fieldState }) => (
              <Field data-invalid={fieldState.invalid}>
                <FieldLabel htmlFor="name">Full Name</FieldLabel>
                <Input
                  {...field}
                  id="name"
                  type="text"
                  aria-invalid={fieldState.invalid}
                  placeholder="John Doe"
                  autoComplete="name"
                />
                {fieldState.invalid && (
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
                <FieldLabel htmlFor="email">Email Address</FieldLabel>
                <Input
                  {...field}
                  id="email"
                  aria-invalid={fieldState.invalid}
                  placeholder="john@example.com"
                  autoComplete="email"
                />
                {fieldState.invalid && (
                  <FieldError errors={[fieldState.error]} />
                )}
              </Field>
            )}
          />
        </div>

        {/* Row 2: Phone Number */}
        <Controller
          name="phone"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid} className="group">
              <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
              <InputGroup className="">
                <InputGroupAddon>
                  <InputGroupText className="border-r pr-2 font-medium text-sm">
                    <span className="mr-0.5">🇬🇧</span>
                    +44
                  </InputGroupText>
                </InputGroupAddon>
                <Input
                  {...field}
                  onChange={(e) => {
                    const formatted = formatUKPhone(e.target.value);
                    field.onChange(formatted);
                  }}
                  id="phone"
                  type="tel"
                  aria-invalid={fieldState.invalid}
                  placeholder="7700 900000"
                  autoComplete="tel"
                  className="border-none focus-visible:border-transparent focus-visible:ring-0 aria-invalid:border-destructive aria-invalid:ring-0 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40"
                />
              </InputGroup>
              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />

        {/* Row 3: Message (Full Width) */}
        <Controller
          name="message"
          control={form.control}
          render={({ field, fieldState }) => (
            <Field data-invalid={fieldState.invalid}>
              <FieldLabel htmlFor="message">Message</FieldLabel>
              <FieldDescription>
                Optional: Share additional details about your inquiry.
              </FieldDescription>
              <InputGroup>
                <InputGroupTextarea
                  {...field}
                  id="message"
                  placeholder="Any additional message..."
                  rows={5}
                  className="h-32 resize-none"
                  aria-invalid={fieldState.invalid}
                />
                <InputGroupAddon align="block-end">
                  <InputGroupText className="text-xs tabular-nums">
                    {messageLength}/500
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>

              {fieldState.invalid && <FieldError errors={[fieldState.error]} />}
            </Field>
          )}
        />
      </FieldGroup>

      <div>
        <Turnstile
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY}
          onSuccess={(token) =>
            form.setValue("turnstileToken", token, { shouldDirty: true })
          }
          onError={() => console.error("Turnstile error")}
          onExpire={() =>
            form.setValue("turnstileToken", "", { shouldDirty: true })
          }
        />
        {form.formState.errors.turnstileToken && (
          <FieldError
            errors={[form.formState.errors.turnstileToken]}
            className="mt-2"
          />
        )}
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full"
      >
        {isSubmitting ? "Booking..." : "Book the call"}
        <HugeiconsIcon icon={ArrowRight02FreeIcons} />
      </Button>
    </form>
  );
}
