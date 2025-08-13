export default function Hero() {
  return (
    <section className="relative">
      {/* soft top gradient */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(60%_60%_at_50%_-10%,rgba(244,63,94,0.20),transparent_60%)]" />
      <div className="container-max py-16 md:py-24 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-pink-200 bg-pink-50 px-3 py-1 text-xs font-medium text-brand-700">
          modern • respectful • no dowry
        </span>

        <h1 className="mt-6 text-4xl md:text-6xl font-display">
          Find your forever <span className="text-brand-600">♥</span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Modern matchmaking without dowry — simple, respectful, and built for meaningful connections.
        </p>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a href="/auth" className="btn btn-primary">Create your profile</a>
          <a href="/auth" className="btn btn-ghost">I already have an account</a>
        </div>
      </div>
    </section>
  );
}
