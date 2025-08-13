import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "no2dowry — modern matchmaking without dowry",
  description: "Simple, respectful, modern matchmaking without dowry.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-[radial-gradient(75%_75%_at_10%_10%,#fff1f5_0%,transparent_50%),radial-gradient(60%_60%_at_90%_10%,#faf5ff_0%,transparent_40%)]">
        {children}
      </body>
    </html>
  );
}
