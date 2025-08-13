export default function CTA() {
  return (
    <section className="container mt-12">
      <div className="rounded-2xl bg-rose-50 border border-rose-100 p-8 md:p-10 flex items-center justify-between gap-6">
        <div>
          <h3 className="font-display text-2xl font-bold">Ready to begin?</h3>
          <p className="text-midnight-700">Create your profile and start meeting compatible matches—no dowry, ever.</p>
        </div>
        <a href="#auth" className="btn-primary">Get Started</a>
      </div>
    </section>
  );
}