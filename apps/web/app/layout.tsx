// apps/web/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "no2dowry — modern matchmaking, zero dowry",
  description: "Simple, respectful, compatibility-first connections without dowry.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* Tailwind CDN fallback so styles render even if PostCSS is flaky */}
        <script src="https://cdn.tailwindcss.com"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              tailwind.config = {
                theme: {
                  extend: {
                    colors: {
                      brand: {
                        50:"#fff1f5",100:"#ffe4e8",200:"#fecdd3",300:"#fda4af",
                        400:"#fb7185",500:"#f43f5e",600:"#e11d48",
                        700:"#be123c",800:"#9f1239",900:"#881337"
                      },
                      ink: { 900:"#0f172a",700:"#334155",500:"#64748b" }
                    },
                    fontFamily: {
                      display: ["Inter","ui-sans-serif","system-ui","sans-serif"],
                      body: ["Inter","ui-sans-serif","system-ui","sans-serif"]
                    }
                  }
                }
              }
            `,
          }}
        />
      </head>
      <body className="min-h-screen bg-white text-ink-900 antialiased">
        {children}
      </body>
    </html>
  );
}
