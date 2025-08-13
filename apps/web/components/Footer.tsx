export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-100 bg-white">
      <div className="container-max py-8 text-sm text-slate-500">
        <div className="flex flex-col items-center gap-2 md:flex-row md:justify-between">
          <p>© {new Date().getFullYear()} <span className="text-slate-700">no2dowry</span> — MVP</p>
          <p>Built with <span className="text-brand-600">♥</span></p>
        </div>
      </div>
    </footer>
  );
}
