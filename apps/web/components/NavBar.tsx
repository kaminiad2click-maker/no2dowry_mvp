import React from 'react';
import Link from 'next/link';

export default function NavBar() {
  return (
    <header className="w-full border-b bg-white/70 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold text-lg">
          no2dowry
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/" className="text-slate-600 hover:text-slate-900">
            Home
          </Link>
          <a
            href="https://no2dowry-mvp.onrender.com/api" // your backend docs link if you want
            className="text-slate-600 hover:text-slate-900"
            target="_blank"
            rel="noreferrer"
          >
            API
          </a>

          {/* Auth buttons */}
          <Link
            href="/login"
            className="rounded-full border px-4 py-2 hover:bg-slate-50"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-rose-600 px-4 py-2 text-white hover:bg-rose-700"
          >
            Sign up
          </Link>
        </div>
      </nav>
    </header>
  );
}