import React from 'react';

export default function CTA() {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-16">
      <div className="rounded-3xl bg-gradient-to-r from-rose-50 to-rose-100 p-8 sm:p-10">
        <h3 className="text-xl font-semibold text-slate-900">
          Ready to meet kind, like-minded people?
        </h3>
        <p className="mt-2 max-w-2xl text-slate-700">
          Start with a simple profile. No dowry. No judgment.
        </p>
        <div className="mt-6">
          <a
            href="/auth"
            className="inline-flex rounded-full bg-rose-500 px-6 py-3 text-white shadow-sm hover:bg-rose-600"
          >
            Get started
          </a>
        </div>
      </div>
    </section>
  );
}
