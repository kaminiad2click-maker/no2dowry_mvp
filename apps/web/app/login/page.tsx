'use client';

import React, { useState } from 'react';
import { apiRequest } from '../../lib/api';

type AuthResponse = { ok: boolean; token?: string; user?: { id: string; email: string; name?: string }; message?: string };

export default function LoginPage() {
  const [email, setEmail] = useState('skamtest2@gmail.com');
  const [password, setPassword] = useState('TestPass123');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg('');
    setLoading(true);
    try {
      const data = await apiRequest<AuthResponse>('/auth/login', {
        method: 'POST',
        body: { email, password },
      });
      if (data?.ok && data?.token) {
        localStorage.setItem('token', data.token);
        setMsg('Logged in! Redirecting to profile…');
        window.location.href = '/profile';
      } else {
        setMsg(data?.message || 'Login failed');
      }
    } catch (err: any) {
      setMsg(err?.message || 'Network error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-md p-6">
      <h1 className="text-2xl font-semibold mb-4">Log in</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input className="w-full border rounded px-3 py-2" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm mb-1">Password</label>
          <input type="password" className="w-full border rounded px-3 py-2" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button disabled={loading} className="rounded bg-rose-600 text-white px-4 py-2 disabled:opacity-60">
          {loading ? 'Please wait…' : 'Log in'}
        </button>
      </form>
      <pre className="mt-4 text-sm p-3 bg-slate-50 border rounded overflow-auto">{msg || '—'}</pre>
    </main>
  );
}