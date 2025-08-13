import Link from 'next/link';

export default function CTA() {
  return (
    <section className="mx-auto mt-12 max-w-6xl px-4">
      <div className="rounded-3xl bg-gradient-to-r from-fuchsia-100 via-rose-100 to-indigo-100 p-8">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-xl font-semibold text-slate-900">Ready to meet kind, like-minded people?</h3>
            <p className="mt-1 text-sm text-slate-700">Start with a simple profile. No dowry. No judgment.</p>
          </div>
          <Link href="/auth" className="rounded-xl bg-slate-900 px-5 py-3 text-white shadow hover:bg-slate-800">Get started</Link>
        </div>
      </div>
    </section>
  );
}
