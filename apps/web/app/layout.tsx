import type { Metadata } from 'next';
import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'no2dowry',
  description: 'Matrimony without dowry',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900 flex flex-col">
        <NavBar />
        <main className="flex-1 mx-auto w-full max-w-5xl p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
