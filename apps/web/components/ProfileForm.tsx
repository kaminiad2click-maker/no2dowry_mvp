"use client";

import React, { useEffect, useState } from "react";

const API_BASE =
  process.env.NEXT_PUBLIC_API_URL ?? "https://no2dowry-mvp.onrender.com";

function getUserIdFromToken(token: string | null): string | null {
  if (!token) return null;
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    return payload?.sub ?? null;
  } catch {
    return null;
  }
}

type Profile = {
  name: string;
  dob: string;
  location: string;
  bio?: string;
};

export default function ProfileForm() {
  const [profile, setProfile] = useState<Profile>({
    name: "",
    dob: "",
    location: "",
    bio: "",
  });
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  // Load current profile (if any)
  useEffect(() => {
    const token = localStorage.getItem("token");
    const userId = getUserIdFromToken(token);
    if (!token || !userId) return;

    (async () => {
      try {
        const res = await fetch(`${API_BASE}/profile/${userId}`, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          // Next.js edge caches GETs; make sure it actually fetches fresh
          cache: "no-store",
        });

        if (res.ok) {
          const data = await res.json();
          if (data) {
            setProfile((p) => ({
              ...p,
              name: data.name ?? p.name,
              dob: data.dob ?? p.dob,
              location: data.location ?? p.location,
              bio: data.bio ?? p.bio,
            }));
          }
        }
      } catch (e: any) {
        console.error("Profile load error:", e?.message || e);
      }
    })();
  }, []);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMsg("");
    setLoading(true);

    const token = localStorage.getItem("token");
    const userId = getUserIdFromToken(token);

    if (!token || !userId) {
      setLoading(false);
      setMsg("Please login again. (Missing token / user id)");
      return;
    }

    try {
      const res = await fetch(`${API_BASE}/profile/${userId}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(profile),
      });

      const data = await res.json().catch(() => ({}));
      if (res.ok) {
        setMsg("Profile saved ✅");
      } else {
        setMsg(
          data?.message
            ? `Save failed: ${data.message}`
            : `Save failed (HTTP ${res.status})`
        );
      }
    } catch (e: any) {
      setMsg(`Network error: ${e?.message || e}`);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="mx-auto max-w-xl space-y-4 p-6">
      <div>
        <label className="block text-sm font-medium">Name</label>
        <input
          className="mt-1 w-full rounded border px-3 py-2"
          value={profile.name}
          onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Date of Birth</label>
        <input
          type="date"
          className="mt-1 w-full rounded border px-3 py-2"
          value={profile.dob}
          onChange={(e) => setProfile({ ...profile, dob: e.target.value })}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Location</label>
        <input
          className="mt-1 w-full rounded border px-3 py-2"
          value={profile.location}
          onChange={(e) => setProfile({ ...profile, location: e.target.value })}
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Bio</label>
        <textarea
          className="mt-1 w-full rounded border px-3 py-2"
          rows={4}
          value={profile.bio}
          onChange={(e) => setProfile({ ...profile, bio: e.target.value })}
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="rounded-full bg-rose-500 px-6 py-3 text-white hover:bg-rose-600 disabled:opacity-50"
      >
        {loading ? "Saving…" : "Save Profile"}
      </button>

      {msg && <p className="pt-2 text-sm text-rose-600">{msg}</p>}
    </form>
  );
}
