'use client';
import Link from 'next/link';

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-midnight/10">
      <div className="container flex h-14 items-center justify-between">
        <Link href="/" className="font-display text-2xl font-extrabold">
          no<span className="text-rose-600">2</span>dowry
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/" className="hover:text-rose-600">Home</Link>
          <Link href="/api" className="hover:text-rose-600">API</Link>
          <a href="#stories" className="hover:text-rose-600">Stories</a>
          <a href="#features" className="hover:text-rose-600">Why us</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#auth" className="btn-outline">Log in</a>
          <a href="#auth" className="btn-primary">Create Profile</a>
        </div>
      </div>
    </header>
  );
}
