'use client';
import Link from 'next/link';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="text-xl font-bold tracking-tight">
          <span className="bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500 bg-clip-text text-transparent">
            no2dowry
          </span>
        </Link>
        <div className="hidden gap-6 md:flex text-sm text-slate-700">
          <Link href="/" className="hover:text-rose-600">Home</Link>
          <Link href="/api" className="hover:text-rose-600">API</Link>
        </div>
        <div className="flex gap-2">
          <Link href="/auth" className="rounded-lg border px-3 py-2 text-sm hover:border-rose-300 hover:text-rose-600">Log in</Link>
          <Link href="/auth" className="rounded-lg bg-rose-600 px-3 py-2 text-sm font-medium text-white shadow hover:bg-rose-500">Sign up</Link>
        </div>
      </nav>
    </header>
  );
}
