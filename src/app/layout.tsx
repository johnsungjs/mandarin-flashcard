import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import "./globals.css";

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://mandarinflashcard.vercel.app"),

  title: "HSK Flashcards - Simple Mandarin Vocabulary Learning",
  description: "Minimalist HSK vocabulary learning tool for daily Mandarin practice.",

  openGraph: {
    title: "HSK Flashcards - Simple Mandarin Vocabulary Learning",
    description: "Minimalist HSK vocabulary learning tool for daily Mandarin practice.",
    siteName: "HSK Flashcards - Simple Mandarin Vocabulary Learning",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={notoSansSC.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}