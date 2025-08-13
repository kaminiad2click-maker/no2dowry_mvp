export default function CTA() {
  return (
    <section className="relative">
      <div className="container-max">
        <div className="card overflow-hidden bg-gradient-to-r from-brand-50 to-fuchsia-50">
          <div className="p-8 md:p-12 text-center">
            <h3 className="text-2xl md:text-3xl font-display">
              Ready to meet kind, like-minded people?
            </h3>
            <p className="mt-3 text-slate-600">
              Start with a simple profile. No dowry. No judgement.
            </p>
            <div className="mt-6 flex justify-center">
              <a className="btn btn-primary" href="/auth">Get started</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
