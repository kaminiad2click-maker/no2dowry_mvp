type Item = { title: string; desc: string; icon: string };
const items: Item[] = [
  { title: "30-Day Money Back", desc: "If you don’t find a meaningful connection in 30 days, we’ll refund our fee.", icon: "💝" },
  { title: "Verified Profiles",  desc: "Blue-tick verification and human checks keep the community safe.",     icon: "✅" },
  { title: "Smart Matching (AI)",desc: "Modern matching that learns your preferences to surface better profiles.", icon: "🤖" },
];

export default function Features() {
  return (
    <section id="features" className="container py-16">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-10">
        The no2dowry Experience
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it) => (
          <div key={it.title} className="card p-6">
            <div className="text-3xl mb-3">{it.icon}</div>
            <h3 className="font-semibold text-lg">{it.title}</h3>
            <p className="text-midnight-700 mt-1">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
