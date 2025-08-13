import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60rem_40rem_at_70%_-10%,#f0abfc_10%,transparent),radial-gradient(50rem_30rem_at_0%_30%,#fecdd3_10%,transparent)]" />
      <div className="mx-auto max-w-6xl px-4 py-20 text-center">
        <h1 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Find your <span className="bg-gradient-to-r from-rose-600 via-fuchsia-600 to-indigo-600 bg-clip-text text-transparent">forever</span> ❤️
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Modern matchmaking without dowry — simple, respectful, and built for meaningful connections.
        </p>
        <div className="mt-8 flex items-center justify-center gap-3">
          <Link href="/auth" className="rounded-xl bg-rose-600 px-5 py-3 text-white shadow-lg shadow-rose-600/20 hover:bg-rose-500">Create your profile</Link>
          <Link href="/auth" className="rounded-xl border px-5 py-3 text-slate-700 hover:border-fuchsia-300 hover:text-fuchsia-600">I already have an account</Link>
        </div>
      </div>
    </section>
  );
}
