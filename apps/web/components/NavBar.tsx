'use client';
import React from 'react';

export default function NavBar() {
  return (
    <header className="w-full border-b bg-white">
      <nav className="mx-auto max-w-5xl flex items-center justify-between p-4">
        <a href="/" className="font-semibold text-lg">no2dowry</a>
        <div className="flex items-center gap-4">
          <a className="text-sm hover:underline" href="/">Home</a>
          <a className="text-sm hover:underline" href={process.env.NEXT_PUBLIC_API ?? '#'} target="_blank" rel="noreferrer">
            API
          </a>
        </div>
      </nav>
    </header>
  );
}
