import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "no2dowry",
  description: "Matrimony without dowry",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-dvh bg-white text-ink-900">{children}</body>
    </html>
  );
}
