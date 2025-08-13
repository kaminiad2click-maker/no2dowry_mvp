'use client';

import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t bg-white">
      <div className="mx-auto max-w-5xl p-4 text-xs text-slate-500">
        © {new Date().getFullYear()} no2dowry — MVP
      </div>
    </footer>
  );
}
