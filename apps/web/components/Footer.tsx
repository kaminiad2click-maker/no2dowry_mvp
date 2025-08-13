export default function Footer() {
  return (
    <footer className="mt-20 border-t border-midnight/10">
      <div className="container py-10 grid gap-6 md:grid-cols-3 text-sm">
        <div>
          <div className="font-display text-xl font-bold mb-2">
            no<span className="text-rose-600">2</span>dowry
          </div>
          <p className="text-midnight-600">
            Matrimony without dowry — modern, safe and respectful.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Company</h4>
          <ul className="space-y-1 text-midnight-600">
            <li><a href="#features">About</a></li>
            <li><a href="#stories">Success Stories</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Legal</h4>
          <ul className="space-y-1 text-midnight-600">
            <li><a href="#privacy">Privacy</a></li>
            <li><a href="#terms">Terms</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-midnight/10">
        <div className="container py-4 text-xs text-midnight-500">
          © {new Date().getFullYear()} no2dowry — MVP
        </div>
      </div>
    </footer>
  );
}
