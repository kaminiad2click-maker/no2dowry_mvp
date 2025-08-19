'use client';

import React, { useState } from 'react';
import { apiRequest } from '../../lib/api';

type AuthResponse = { ok: boolean; token?: string; user?: { id: string; email: string; name?: string }; message?: string };

export default function SignupPage() {
  const [email, setEmail] = useState('demo+web@no2dowry.com');
  const [password, setPassword] = useState('TestPass123');
  const [name, setName] = useState('Demo User');
  const [msg, setMsg] = useState('');
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg('');
    setLoading(true);
    try {
      const data = await apiRequest<AuthResponse>('/auth/register', {
        method: 'POST',
        body: { email, password, name },
      });
      if (data?.ok && data?.token) {
        localStorage.setItem('token', data.token);
        setMsg('Signed up! Redirecting to profile…');
        window.location.href = '/profile';
      } else {
        setMsg(data?.message || 'Sign up failed');
      }
    } catch (err: any) {
      setMsg(err?.message || 'Network error');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="mx-auto max-w-md p-6">
      <h1 className="text-2xl font-semibold mb-4">Create your account</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="block text-sm mb-1">Name</label>
          <input className="w-full border rounded px-3 py-2" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input className="w-full border rounded px-3 py-2" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm mb-1">Password</label>
          <input type="password" className="w-full border rounded px-3 py-2" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button disabled={loading} className="rounded bg-rose-600 text-white px-4 py-2 disabled:opacity-60">
          {loading ? 'Please wait…' : 'Sign up'}
        </button>
      </form>
      <pre className="mt-4 text-sm p-3 bg-slate-50 border rounded overflow-auto">{msg || '—'}</pre>
    </main>
  );
}
