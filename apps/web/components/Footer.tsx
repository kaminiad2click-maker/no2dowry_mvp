import React from 'react';
<<<<<<< HEAD

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="mx-auto max-w-5xl p-4 text-xs text-slate-500">
        © {new Date().getFullYear()} no2dowry — MVP
=======
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-16 w-full border-t">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-500">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p>© {new Date().getFullYear()} no2dowry — Matrimony without dowry.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-slate-900">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-900">
              Terms
            </Link>
            <a
              href="mailto:hello@no2dowry.example"
              className="hover:text-slate-900"
            >
              Contact
            </a>
          </div>
        </div>
>>>>>>> 7ae1f16703a592c74f58e11e19742ec8d8fe9aa9
      </div>
    </footer>
  );
}
