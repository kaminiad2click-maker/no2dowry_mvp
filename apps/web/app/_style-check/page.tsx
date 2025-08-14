export default function StyleCheck() {
  return (
    <main className="p-10 space-y-6 bg-white min-h-screen">
      <h1 className="text-4xl font-bold text-brand-600">Tailwind is working ✅</h1>
      <p className="text-ink-600">
        If this heading is pink-ish and the spacing looks good, your Tailwind pipeline is active.
      </p>

      <section className="grid gap-4 md:grid-cols-2">
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Card styles</h2>
          <p className="text-ink-600">Rounded corners, soft border, and shadow are applied via the <code>card</code> utility class from globals.css.</p>
        </div>
        <div className="card">
          <h2 className="text-xl font-semibold mb-2">Buttons</h2>
          <div className="flex gap-3">
            <button className="btn-primary">Primary</button>
            <button className="btn-outline">Outline</button>
          </div>
        </div>
      </section>

      <div className="mt-8">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-brand-600 hover:text-brand-700 underline underline-offset-4"
        >
          ← Back to Home
        </a>
      </div>
    </main>
  );
}
