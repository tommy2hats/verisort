import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/block/navbar";
import { geistMono, geistSans, ikeBold } from "@/lib/font";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: {
    absolute: "Verisort AI - Document Intelligence for Teams",
    template: "%s | Verisort AI",
    default: "Verisort AI - Document Intelligence for Teams",
  },
  description:
    "Verisort AI is a powerful document intelligence agent designed to help teams quickly find answers in their documents. With Verisort AI, you can easily search through your documents and get accurate results in seconds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${ikeBold.variable} antialiased`}
      >
        <Navbar />
        <main className="mt-20 px-6">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
