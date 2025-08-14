'use client';
import React from 'react';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/70 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <a href="/" className="font-semibold text-lg tracking-tight">
          no2dowry
        </a>
        <div className="flex items-center gap-6 text-sm">
          <a href="/" className="hover:opacity-80">Home</a>
          <a href="/api" className="hover:opacity-80">API</a>
          <a href="/auth" className="rounded-full border px-3 py-1 hover:bg-slate-50">
            Log in
          </a>
          <a href="/auth" className="rounded-full bg-rose-500 px-3 py-1 text-white hover:bg-rose-600">
            Sign up
          </a>
        </div>
      </nav>
    </header>
  );
}
