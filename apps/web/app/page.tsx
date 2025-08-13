export default function Home() {
  return (
    <main>
      <section className="w-full border-b bg-white">
        <div className="mx-auto max-w-5xl flex items-center justify-between p-4">
          <a href="/" className="font-semibold text-lg">no2dowry</a>
          <nav className="flex items-center gap-4">
            <a className="text-sm hover:underline" href="/">Home</a>
            <a className="text-sm hover:underline" href="/api">API</a>
          </nav>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16">
        <h1 className="text-3xl font-bold mb-3">It works 🎉</h1>
        <p className="text-slate-700">
          Frontend is up with App Router (Next.js). Edit <code>apps/web/app/page.tsx</code> to build your UI.
        </p>
        <ul className="list-disc pl-6 mt-4 text-sm text-slate-600">
          <li>API base URL (from <code>.env.local</code>): {process.env.NEXT_PUBLIC_API}</li>
        </ul>
      </section>

      <footer className="w-full border-t bg-white">
        <div className="mx-auto max-w-5xl p-4 text-xs text-slate-500">
          © {new Date().getFullYear()} no2dowry — MVP
        </div>
      </footer>
    </main>
  );
}
