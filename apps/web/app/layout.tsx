import "./globals.css";
import Providers from "../components/Providers";
import NavBar from "../components/NavBar";

export const metadata = {
  title: "No2Dowry",
  description: "Matrimony App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-800 antialiased">
        <Providers>
          <NavBar />
          <div className="min-h-screen">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
