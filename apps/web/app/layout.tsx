import "./globals.css";
import { ReactNode } from "react";
import { Providers } from "../components/Providers";
import NavBar from "../components/NavBar";

export const metadata = {
  title: "No2Dowry",
  description: "Modern • Respectful • No Dowry",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <NavBar />
          <main className="min-h-screen">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
