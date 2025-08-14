import React from 'react';

const items = [
  {
    icon: '💍',
    title: 'Zero Dowry',
    desc: 'A clear commitment: no dowry, no pressure — only compatibility.',
  },
  {
    icon: '✨',
    title: 'Smart Matches',
    desc: 'Thoughtful filters and signals to surface genuinely compatible profiles.',
  },
  {
    icon: '🔒',
    title: 'Private & Safe',
    desc: 'Privacy-first design with simple controls and secure authentication.',
  },
];

export default function Features() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
      <h2 className="text-center text-2xl font-semibold text-slate-900">
        The no2dowry experience
      </h2>

      <div className="mt-8 grid gap-6 sm:grid-cols-3">
        {items.map((f) => (
          <div
            key={f.title}
            className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md"
          >
            <div className="text-3xl">{f.icon}</div>
            <h3 className="mt-3 text-lg font-semibold">{f.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
