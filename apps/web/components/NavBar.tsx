"use client";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/80 backdrop-blur">
      <nav className="container-max h-16 flex items-center justify-between">
        <a href="/" className="text-xl font-display">
          <span className="text-brand-600">no</span>2dowry
        </a>

        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li><a href="/" className="hover:text-slate-700">Home</a></li>
          <li><a href="/api" className="hover:text-slate-700">API</a></li>
        </ul>

        <div className="flex items-center gap-2">
          <a href="/auth" className="btn btn-ghost hidden sm:inline-flex">Log in</a>
          <a href="/auth" className="btn btn-primary">Sign up</a>
        </div>
      </nav>
    </header>
  );
}