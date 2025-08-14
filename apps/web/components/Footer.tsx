import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto max-w-5xl px-4 py-6 text-xs text-slate-500">
        © {new Date().getFullYear()} no2dowry — MVP • Built with 💗
      </div>
    </footer>
  );
}
