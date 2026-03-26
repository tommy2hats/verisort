"use server";

import { Client } from "@notionhq/client";
import type { FormSchema } from "@/lib/schema/cta-form";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const databaseId = process.env.NOTION_CONTACT_DATABASE_ID || "";

type Response = {
  error?: {
    message: string;
    code?: string;
  };
};

export async function bookCallAction(data: FormSchema): Promise<Response> {
  try {
    const formData = new URLSearchParams();
    formData.append("secret", process.env.TURNSTILE_SECRET_KEY as string);
    formData.append("response", data.turnstileToken);

    const result = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        body: formData,
      },
    );

    const outcome = await result.json();

    if (!outcome.success) {
      return {
        error: {
          message: "CAPTCHA verification failed.",
          code: "CAPTCHA_FAILED",
        },
      };
    }

    const registeredAt = new Date().toISOString();

    await notion.pages.create({
      parent: { database_id: databaseId },
      properties: {
        Name: {
          title: [{ text: { content: data.name } }],
        },
        Email: { email: data.email },
        Phone: { rich_text: [{ text: { content: data.phone } }] },
        Message: { rich_text: [{ text: { content: data.message || "" } }] },
        "Received Date": { date: { start: registeredAt } },
      },
      content: [
        {
          paragraph: {
            rich_text: [
              {
                text: {
                  content: `Message received from ${data.name} (${data.email}) on ${registeredAt}`,
                },
              },
            ],
          },
        },
      ],
    });

    // send email confirmation
    // const email_response = await sendEmail({
    //   from: `"GrooveTie Support" <contact@${Constants.DOMAIN}>`,
    //   to: data.email,
    //   subject: "Thank you for contacting GrooveTie",
    //   text: "Thank you for your message. We have received your inquiry and will respond as soon as possible.",
    //   html: `
    //     <html>
    //       <body>
    //         <p>Dear ${data.name},</p>
    //         <p>Thank you for contacting GrooveTie. Here is a summary of your message:</p>
    //         <p><strong>Phone:</strong> ${data.phone}</p>
    //         <p><strong>Message:</strong> ${data.message}</p>
    //         <p><strong>Sent on:</strong> ${registeredAt}</p>
    //         <p>We will get back to you soon.</p>
    //         <p>Best regards,<br>GrooveTie Support Team</p>
    //       </body>
    //     </html>
    //   `,
    // });

    // if (email_response.rejected.length > 0) {
    //   return {
    //     error: {
    //       message: "Failed to send confirmation email.",
    //     },
    //   };
    // }

    return {};
  } catch (error) {
    return {
      error:
        error instanceof Error
          ? { message: error.message }
          : { message: "Unknown error occurred" },
    };
  }
}
