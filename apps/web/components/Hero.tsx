import React from "react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-100 via-white to-white" />
      <div className="relative mx-auto max-w-5xl px-4 py-16 sm:py-20">
        <p className="text-center text-sm uppercase tracking-widest text-rose-600">
          modern • respectful • no dowry
        </p>
        <h1 className="mt-3 text-center text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
          Find your forever <span className="inline-block">❤️</span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-slate-600">
          Build meaningful connections—simple, respectful, and built for compatibility.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex justify-center gap-4">
          <Link
            href="/signup"
            className="rounded-full bg-rose-500 px-6 py-3 text-white shadow-sm hover:bg-rose-600"
          >
            Create your profile
          </Link>
          <Link
            href="/login"
            className="rounded-full border px-6 py-3 hover:bg-slate-50"
          >
            I already have an account
          </Link>
        </div>
      </div>
    </section>
  );
}
