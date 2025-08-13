'use client';
<<<<<<< HEAD
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
=======

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/pricing', label: 'Pricing' },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <header className="w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-semibold">
          no2dowry
        </Link>

        <nav className="hidden gap-6 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors hover:text-slate-900 ${
                pathname === l.href ? 'text-slate-900' : 'text-slate-500'
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/login"
            className="rounded-md border px-3 py-1.5 text-sm hover:bg-slate-50"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="rounded-md bg-slate-900 px-3 py-1.5 text-sm text-white hover:bg-slate-800"
          >
            Sign up
          </Link>
        </div>
      </div>
>>>>>>> 7ae1f16703a592c74f58e11e19742ec8d8fe9aa9
    </header>
  );
}
