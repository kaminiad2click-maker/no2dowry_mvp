'use client';
import React from 'react';
import Link from 'next/link';

export default function NavBar() {
  return (
    <header className="w-full border-b bg-white">
      <nav className="mx-auto max-w-5xl flex items-center justify-between p-4">
        <Link href="/" className="font-semibold text-lg">no2dowry</Link>
        <div className="flex items-center gap-4">
          <Link className="text-sm hover:underline" href="/">Home</Link>
          <a
            className="text-sm hover:underline"
            href={process.env.NEXT_PUBLIC_API ?? '#'}
            target="_blank"
            rel="noreferrer"
          >
            API
          </a>
        </div>
      </nav>
    </header>
  );
}
