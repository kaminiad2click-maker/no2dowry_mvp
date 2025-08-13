'use client';

import React, { useState } from 'react';

const API = process.env.NEXT_PUBLIC_API ?? '';

export default function AuthPage() {
  const [email, setEmail] = useState('test123@gmail.com');
  const [password, setPassword] = useState('password');
  const [msg, setMsg] = useState('');
  const [token, setToken] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  async function call(path: string, body: any) {
    setMsg('');
    setBusy(true);
    try {
      const res = await fetch(`${API}/${path}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setMsg(data?.message ? data.message : 'Success ✅');
        if (data?.token) setToken(data.token);
      } else {
        setMsg(data?.message || 'Request failed');
      }
    } catch (e: any) {
      setMsg(e?.message || 'Network error');
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="min-h-[calc(100dvh-4rem)] bg-slate-50">
      {/* page container */}
      <div className="mx-auto max-w-5xl px-4 py-10">
        {/* header + subtext */}
        <div className="mb-8">
          <h1 className="text-3xl font-semibold tracking-tight">no2dowry — MVP</h1>
          <p className="text-slate-600 mt-1">
            Use your Render API at <code className="text-slate-800">{API || '—'}</code>
          </p>
        </div>

        {/* grid: left info / right auth card */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* left */}
          <section className="rounded-2xl border bg-white p-6">
            <h2 className="text-xl font-medium">What’s here?</h2>
            <ul className="mt-3 list-disc pl-5 space-y-1 text-slate-700">
              <li>Email + Password signup / login calls</li>
              <li>Shows returned JWT if the API responds with <code>token</code></li>
              <li>Tailwind UI baseline you can extend</li>
            </ul>
          </section>

          {/* right: auth card */}
          <section className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-medium">Auth</h2>

            <div className="mt-5 space-y-4">
              <div>
                <label className="block text-sm text-slate-600 mb-1">Email</label>
                <input
                  className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-slate-900/20"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm text-slate-600 mb-1">Password</label>
                <input
                  type="password"
                  className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-slate-900/20"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                />
              </div>

              <div className="flex gap-3 pt-1">
                <button
                  onClick={() => call('auth/signup', { email, password })}
                  disabled={busy}
                  className="inline-flex items-center justify-center rounded-lg bg-black px-4 py-2 text-white disabled:opacity-60"
                >
                  {busy ? 'Working…' : 'Sign Up'}
                </button>
                <button
                  onClick={() => call('auth/login', { email, password })}
                  disabled={busy}
                  className="inline-flex items-center justify-center rounded-lg border px-4 py-2 disabled:opacity-60"
                >
                  {busy ? 'Working…' : 'Log In'}
                </button>
              </div>

              {token && (
                <div className="mt-3 rounded-lg border bg-slate-50 p-3 text-xs break-all">
                  <span className="font-medium">JWT:</span> {token}
                </div>
              )}

              <div className="mt-3 rounded-lg border bg-slate-50 p-3 text-sm min-h-[48px]">
                {msg || <span className="text-slate-400">— status will appear here —</span>}
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}