import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'no2dowry — MVP',
  description: 'Matrimony without dowry',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
