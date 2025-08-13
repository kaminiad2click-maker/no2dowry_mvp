export default function Hero() {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blush-50 via-paper to-paper" />
      <div className="container py-16 md:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="font-display text-4xl md:text-6xl font-extrabold tracking-tight">
            Find your <span className="text-rose-600">forever</span>
          </h1>
          <p className="mt-4 text-lg text-midnight-700">
            Discover meaningful matches—without dowry. Modern filters, genuine profiles, and a safe experience.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#auth" className="btn-primary">Find Your Match</a>
            <a href="#features" className="btn-outline">How it works</a>
          </div>
          <div className="mt-6 text-sm text-midnight-600">
            ★★★★★ Trusted by thousands of users
          </div>
        </div>

        <div className="card p-2 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop"
            alt="Couple"
            className="h-[360px] w-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
