import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";

import "./globals.css";

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
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}