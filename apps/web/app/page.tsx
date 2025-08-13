'use client';

import React, { useState } from 'react';

const API = process.env.NEXT_PUBLIC_API ?? '';

export default function AuthPage() {
  const [email, setEmail] = useState('test123@gmail.com');
  const [password, setPassword] = useState('password');
  const [msg, setMsg] = useState('');
  const [token, setToken] = useState<string | null>(null);

  async function call(path: string, body: any) {
    setMsg(''); 
    try {
      const res = await fetch(`${API}/${path}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setMsg(JSON.stringify(data, null, 2));
        if (data?.token) setToken(data.token);
      } else {
        setMsg(data?.message || 'Request failed');
      }
    } catch (e: any) {
      setMsg(e?.message || 'Network error');
    }
  }

  return (
    <main className="mx-auto max-w-2xl p-6 space-y-4">
      <h1 className="text-2xl font-semibold">Auth</h1>

      <div className="grid gap-2">
        <label className="text-sm">Email</label>
        <input
          className="border rounded px-3 py-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label className="text-sm">Password</label>
        <input
          type="password"
          className="border rounded px-3 py-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="flex gap-3">
        <button
          onClick={() => call('auth/signup', { email, password })}
          className="rounded bg-black text-white px-4 py-2"
        >
          Sign Up
        </button>
        <button
          onClick={() => call('auth/login', { email, password })}
          className="rounded border px-4 py-2"
        >
          Log In
        </button>
      </div>

      {token && (
        <div className="text-xs break-all p-2 bg-slate-50 border rounded">
          JWT: {token}
        </div>
      )}

      <pre className="text-sm p-3 bg-slate-50 border rounded overflow-auto">
{msg || '—'}
      </pre>
    </main>
  );
}