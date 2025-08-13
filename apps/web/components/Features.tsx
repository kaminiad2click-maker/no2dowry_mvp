type Item = { icon: string; title: string; text: string };
const items: Item[] = [
  { icon: "💍", title: "Zero Dowry",
    text: "No dowry, no pressure — only compatibility." },
  { icon: "✨", title: "Smart Matches",
    text: "Thoughtful filters and signals surface genuine matches." },
  { icon: "🔒", title: "Private & Safe",
    text: "Privacy-first design with simple controls and secure auth." },
];

export default function Features() {
  return (
    <section className="container-max pb-16 md:pb-24">
      <h2 className="text-center text-3xl md:text-4xl font-display">The no2dowry experience</h2>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it) => (
          <div key={it.title} className="card p-6">
            <div className="text-2xl">{it.icon}</div>
            <h3 className="mt-3 text-lg font-semibold">{it.title}</h3>
            <p className="mt-2 text-slate-600">{it.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
