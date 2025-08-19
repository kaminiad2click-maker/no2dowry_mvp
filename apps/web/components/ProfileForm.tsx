// apps/web/components/ProfileForm.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { ProfileAPI, decodeJwtSub, type Profile } from '@/lib/api';

type Props = { initialToken?: string | null };

const INTERESTS = ['Travel', 'Music', 'Reading', 'Fitness', 'Cooking', 'Movies', 'Art', 'Tech'];

export default function ProfileForm({ initialToken = null }: Props) {
  const [token, setToken] = useState<string | null>(initialToken ?? null);
  const [userId, setUserId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string>('');
  const [profile, setProfile] = useState<Profile>({
    name: '',
    dob: '',
    location: '',
    education: '',
    bio: '',
    preferences: {
      minAge: 21,
      maxAge: 35,
      religion: '',
      preferredLocation: '',
      preferredEducation: '',
      interests: [],
    },
  });

  useEffect(() => {
    if (!token && typeof window !== 'undefined') {
      const t = window.localStorage.getItem('no2dowry_jwt');
      if (t) setToken(t);
    }
  }, []);

  useEffect(() => {
    if (token) {
      if (typeof window !== 'undefined') {
        window.localStorage.setItem('no2dowry_jwt', token);
      }
      const sub = decodeJwtSub(token);
      setUserId(sub);
      if (sub) void fetchProfile(sub, token);
    }
  }, [token]);

  async function fetchProfile(uid: string, tok: string) {
    setLoading(true);
    setMsg('');
    try {
      const data = await ProfileAPI.get(uid, tok);
      setProfile(prev => ({ ...prev, ...data }));
      setMsg('Loaded profile ✓');
    } catch (e: any) {
      setMsg(e?.message || 'Failed to load profile');
    } finally {
      setLoading(false);
    }
  }

  function toggleInterest(i: string) {
    const curr = new Set(profile.preferences?.interests || []);
    if (curr.has(i)) curr.delete(i); else curr.add(i);
    setProfile(p => ({
      ...p,
      preferences: { ...(p.preferences || {}), interests: Array.from(curr) }
    }));
  }

  async function save() {
    if (!token) { setMsg('Please paste JWT token first.'); return; }
    const uid = userId || decodeJwtSub(token);
    if (!uid) { setMsg('Could not read user id from token.'); return; }
    setLoading(true);
    setMsg('');
    try {
      const saved = await ProfileAPI.upsert(uid, profile, token);
      setProfile(prev => ({ ...prev, ...saved }));
      setMsg('Saved ✓');
    } catch (e: any) {
      setMsg(e?.message || 'Save failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mx-auto max-w-3xl p-6">
      <div className="rounded-2xl border bg-white/70 backdrop-blur p-6 shadow-sm">
        <h1 className="text-2xl font-semibold mb-1">Your Profile</h1>
        <p className="text-slate-500 mb-4">Fill your details and preferences to get better matches.</p>

        <div className="mb-6 grid gap-2">
          <label className="text-sm font-medium">JWT Token (from login)</label>
          <input
            className="w-full rounded-xl border px-3 py-2 text-sm"
            placeholder="paste your JWT token here"
            value={token ?? ''}
            onChange={(e) => setToken(e.target.value || null)}
          />
          <p className="text-xs text-slate-500">
            We decode your token locally to identify you (no server call).
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="grid gap-2">
            <label className="text-sm font-medium">Name</label>
            <input
              className="rounded-xl border px-3 py-2"
              value={profile.name || ''}
              onChange={(e) => setProfile(p => ({ ...p, name: e.target.value }))}
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">Date of Birth</label>
            <input
              type="date"
              className="rounded-xl border px-3 py-2"
              value={profile.dob ? profile.dob.slice(0,10) : ''}
              onChange={(e) => setProfile(p => ({ ...p, dob: e.target.value }))}
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">Location</label>
            <input
              className="rounded-xl border px-3 py-2"
              value={profile.location || ''}
              onChange={(e) => setProfile(p => ({ ...p, location: e.target.value }))}
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm font-medium">Education</label>
            <input
              className="rounded-xl border px-3 py-2"
              value={profile.education || ''}
              onChange={(e) => setProfile(p => ({ ...p, education: e.target.value }))}
            />
          </div>
          <div className="md:col-span-2 grid gap-2">
            <label className="text-sm font-medium">Bio</label>
            <textarea
              rows={3}
              className="rounded-xl border px-3 py-2"
              value={profile.bio || ''}
              onChange={(e) => setProfile(p => ({ ...p, bio: e.target.value }))}
            />
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-3">Preferences</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="grid gap-2">
              <label className="text-sm font-medium">Min Age</label>
              <input
                type="number"
                className="rounded-xl border px-3 py-2"
                value={profile.preferences?.minAge ?? 21}
                onChange={(e) => setProfile(p => ({ ...p, preferences: { ...(p.preferences||{}), minAge: Number(e.target.value) } }))}
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium">Max Age</label>
              <input
                type="number"
                className="rounded-xl border px-3 py-2"
                value={profile.preferences?.maxAge ?? 35}
                onChange={(e) => setProfile(p => ({ ...p, preferences: { ...(p.preferences||{}), maxAge: Number(e.target.value) } }))}
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium">Religion</label>
              <input
                className="rounded-xl border px-3 py-2"
                value={profile.preferences?.religion || ''}
                onChange={(e) => setProfile(p => ({ ...p, preferences: { ...(p.preferences||{}), religion: e.target.value } }))}
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium">Preferred Location</label>
              <input
                className="rounded-xl border px-3 py-2"
                value={profile.preferences?.preferredLocation || ''}
                onChange={(e) => setProfile(p => ({ ...p, preferences: { ...(p.preferences||{}), preferredLocation: e.target.value } }))}
              />
            </div>
            <div className="grid gap-2">
              <label className="text-sm font-medium">Preferred Education</label>
              <input
                className="rounded-xl border px-3 py-2"
                value={profile.preferences?.preferredEducation || ''}
                onChange={(e) => setProfile(p => ({ ...p, preferences: { ...(p.preferences||{}), preferredEducation: e.target.value } }))}
              />
            </div>
          </div>

          <div className="mt-6">
            <label className="text-sm font-medium mb-2 block">Interests</label>
            <div className="flex flex-wrap gap-2">
              {INTERESTS.map(i => {
                const active = profile.preferences?.interests?.includes(i);
                return (
                  <button
                    key={i}
                    type="button"
                    onClick={() => toggleInterest(i)}
                    className={`px-3 py-1.5 rounded-full border text-sm transition ${
                      active ? 'bg-rose-100 border-rose-300' : 'bg-white hover:bg-slate-50'
                    }`}
                  >
                    {i}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <button
            onClick={save}
            disabled={loading}
            className="px-4 py-2 rounded-xl bg-rose-600 text-white hover:bg-rose-700 disabled:opacity-50"
          >
            {loading ? 'Saving…' : 'Save Profile'}
          </button>
          {userId && <span className="text-xs text-slate-500">UserID: {userId}</span>}
        </div>

        {!!msg && (
          <div className="mt-3 text-sm rounded-lg border px-3 py-2 bg-slate-50">{msg}</div>
        )}
      </div>
    </div>
  );
}
