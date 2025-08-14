import React from "react";

export default function Testimonials() {
  const items = [
    {
      name: "Aarav & Isha",
      text: "We matched over shared values, not showy demands. Honest, simple and respectful.",
    },
    {
      name: "Rohit & Meera",
      text: "The ‘zero dowry’ clarity made conversations comfortable from day one.",
    },
    {
      name: "Kabir & Aanya",
      text: "Clean design, no pressure, just meaningful profiles. Loved it.",
    },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-rose-50 via-white to-white" />
      <div className="relative mx-auto max-w-5xl px-4 py-16">
        <h2 className="text-center text-2xl font-semibold text-slate-900">Success stories</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {items.map((t) => (
            <div key={t.name} className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="text-3xl">💬</div>
              <p className="mt-3 text-slate-700">“{t.text}”</p>
              <div className="mt-4 text-sm font-medium text-rose-600">{t.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
