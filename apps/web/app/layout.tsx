// apps/web/app/layout.tsx
import type { Metadata } from 'next';
import React from 'react';

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
      <body className="min-h-screen bg-white text-slate-900">{children}</body>
    </html>
  );
}
