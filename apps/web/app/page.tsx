
'use client';
import { useState } from 'react';

const API = process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:4000';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState<string | null>(null);
  const [userId, setUserId] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [dob, setDob] = useState('1998-02-08');
  const [about, setAbout] = useState('');
  const [order, setOrder] = useState<any>(null);
  const [msg, setMsg] = useState<string>('');

  async function signup() {
    setMsg('');
    try {
      const res = await fetch(`${API}/auth/signup`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) });
      const data = await res.json();
      if (res.ok) { setToken(data.token); setUserId(data.userId); setMsg('Signed up!'); }
      else { setMsg(data.message || 'Signup failed'); }
    } catch (e:any) { setMsg(e.message); }
  }

  async function login() {
    setMsg('');
    try {
      const res = await fetch(`${API}/auth/login`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) });
      const data = await res.json();
      if (res.ok) { setToken(data.token); setUserId(data.userId); setMsg('Logged in!'); }
      else { setMsg(data.message || 'Login failed'); }
    } catch (e:any) { setMsg(e.message); }
  }

  async function saveProfile() {
    if (!userId) { setMsg('Please sign up/login first'); return; }
    try {
      const res = await fetch(`${API}/profile/${userId}`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ name, about, dob: new Date(dob), gender: 'female', languages: ['en'] }) });
      const data = await res.json();
      if (res.ok) setMsg('Profile saved');
      else setMsg(data.message || 'Failed to save profile');
    } catch (e:any) { setMsg(e.message); }
  }

  async function createOrder() {
    try {
      const res = await fetch(`${API}/payments/create-order`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ amountInr: 19900 }) });
      const data = await res.json();
      setOrder(data);
    } catch (e:any) { setMsg(e.message); }
  }

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold">no2dowry — MVP</h1>
      <p className="text-sm opacity-70">Sign up, create a profile, and simulate a payment order.</p>

      <section className="p-4 border rounded-xl space-y-2">
        <h2 className="font-semibold">Auth</h2>
        <input className="border p-2 rounded w-full" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="border p-2 rounded w-full" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
        <div className="flex gap-2">
          <button onClick={signup} className="px-3 py-2 border rounded">Sign up</button>
          <button onClick={login} className="px-3 py-2 border rounded">Log in</button>
        </div>
        {token && <div className="text-xs break-all">JWT: {token}</div>}
        {msg && <div className="text-sm text-blue-600">{msg}</div>}
      </section>

      <section className="p-4 border rounded-xl space-y-2">
        <h2 className="font-semibold">Profile</h2>
        <input className="border p-2 rounded w-full" placeholder="Full name" value={name} onChange={e=>setName(e.target.value)} />
        <input className="border p-2 rounded w-full" type="date" value={dob} onChange={e=>setDob(e.target.value)} />
        <textarea className="border p-2 rounded w-full" placeholder="About you" value={about} onChange={e=>setAbout(e.target.value)} />
        <button onClick={saveProfile} className="px-3 py-2 border rounded">Save Profile</button>
      </section>

      <section className="p-4 border rounded-xl space-y-2">
        <h2 className="font-semibold">Payments (stub)</h2>
        <button onClick={createOrder} className="px-3 py-2 border rounded">Create Order ₹199</button>
        {order && <pre className="text-xs bg-slate-50 p-2 rounded">{JSON.stringify(order, null, 2)}</pre>}
      </section>
    </main>
  )
}
