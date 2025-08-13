const items = [
  { title: 'Zero Dowry', body: 'A clear commitment: no dowry, no pressure — only compatibility.', icon: '💍' },
  { title: 'Smart Matches', body: 'Thoughtful filters and signals to surface genuinely compatible profiles.', icon: '✨' },
  { title: 'Private & Safe', body: 'Privacy-first design with simple controls and secure authentication.', icon: '🔒' },
];

export default function Features() {
  return (
    <section className="mx-auto mt-10 max-w-6xl px-4">
      <h2 className="text-center text-2xl font-semibold text-slate-900">The no2dowry experience</h2>
      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((f) => (
          <div key={f.title} className="rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md">
            <div className="text-3xl">{f.icon}</div>
            <h3 className="mt-3 text-lg font-semibold">{f.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
