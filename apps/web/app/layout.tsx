// apps/web/app/layout.tsx
import type { Metadata } from 'next';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'no2dowry',
  description: 'Matrimony without dowry',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />

        <style jsx global>{`
          * { box-sizing: border-box; }
          html, body { margin:0; padding:0; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, "Helvetica Neue", Arial; color:#0f172a; background:#ffffff; }
          main { min-height: 60vh; }
          a { cursor: pointer; }
        `}</style>
      </body>
    </html>
  );
}
