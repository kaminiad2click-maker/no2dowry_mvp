export default function Page() {
  return (
    <section className="space-y-4">
      <h1 className="text-2xl font-semibold">It works 🎉</h1>
      <p className="text-slate-600">
        Frontend is up with App Router (Next.js). Edit <code className="px-1 rounded bg-slate-100">apps/web/app/page.tsx</code>
        to start building your UI.
      </p>
      <ul className="list-disc pl-5 text-slate-700">
        <li>
          API base URL (from <code>.env.local</code>):{' '}
          <code className="px-1 rounded bg-slate-100">{process.env.NEXT_PUBLIC_API ?? 'NOT SET'}</code>
        </li>
      </ul>
    </section>
  );
}
