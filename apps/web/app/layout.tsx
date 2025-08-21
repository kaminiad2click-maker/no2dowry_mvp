import "./globals.css";
import Providers from "../components/Providers";

export const metadata = {
  title: "No2Dowry",
  description: "Matrimony App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
