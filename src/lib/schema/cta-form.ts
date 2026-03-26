import z from "zod";

export const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z
    .string()
    .regex(/^\d{4}\s\d{3}\s\d{3}$/, "Phone must be exactly 10 digits"),
  message: z
    .string()
    .max(500, "Message must be under 500 characters")
    .optional(),
  turnstileToken: z.string().min(1, { error: "Please complete the CAPTCHA" }),
});

export type FormSchema = z.infer<typeof formSchema>;
