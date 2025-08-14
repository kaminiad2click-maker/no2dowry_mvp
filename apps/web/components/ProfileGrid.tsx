import React from "react";

export default function ProfileGrid() {
  const people = [
    { name: "Aditi, 27", tag: "Designer • Delhi" },
    { name: "Neha, 29", tag: "Engineer • Pune" },
    { name: "Riya, 26", tag: "Writer • Bengaluru" },
    { name: "Ananya, 28", tag: "Doctor • Mumbai" },
  ];

  return (
    <section className="mx-auto max-w-5xl px-4 pb-16">
      <h2 className="text-center text-2xl font-semibold text-slate-900">Real people, real values</h2>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {people.map((p) => (
          <div
            key={p.name}
            className="rounded-2xl border bg-white p-5 text-center shadow-sm hover:shadow-md transition"
          >
            <div className="mx-auto mb-3 h-16 w-16 rounded-full bg-gradient-to-br from-rose-200 to-fuchsia-200" />
            <div className="font-semibold">{p.name}</div>
            <div className="text-sm text-slate-600">{p.tag}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
