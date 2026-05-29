import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import LocalFont from "next/font/local";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const ikeBold = LocalFont({
  src: "./font/ike-bold.ttf",
  display: "swap",
  variable: "--font-ike-bold",
});

export const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage-grotesque",
  display: "swap",
  subsets: ["latin"],
});
