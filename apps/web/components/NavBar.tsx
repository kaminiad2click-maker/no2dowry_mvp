'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';

const apiUrl =
  process.env.NEXT_PUBLIC_API || 'https://no2dowry-mvp.onrender.com';

const links: Array<
  { href: string; label: string; external?: boolean }
> = [
  { href: '/', label: 'Home' },
  { href: apiUrl, label: 'API', external: true },
];

function linkClass(active: boolean) {
  return active
    ? 'font-semibold underline'
    : 'text-slate-600 hover:text-slate-900';
}

export default function NavBar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b bg-white">
      <nav className="mx-auto max-w-5xl flex items-center justify-between p-4">
        <Link href="/" className="font-bold text-lg">
          no2dowry
        </Link>

        {/* mobile menu button */}
        <button
          className="md:hidden rounded border px-2 py-1"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          ☰
        </button>

        {/* links */}
        <ul className={`md:flex gap-6 ${open ? 'block' : 'hidden'} md:block`}>
          {links.map(({ href, label, external }) => {
            const active = !external && pathname === href;
            return (
              <li key={href} className="py-2 md:py-0">
                {external ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-600 hover:text-slate-900"
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    href={href}
                    className={linkClass(active)}
                    onClick={() => setOpen(false)}
                  >
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
