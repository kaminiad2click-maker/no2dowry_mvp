"use client";

import { useState } from "react";
import { apiRequest } from "../../lib/api";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMsg(null);
    try {
      const res = await apiRequest("/auth/login", {
        method: "POST",
        body: { email, password },
      });
      if (res.ok && res.token) {
        localStorage.setItem("token", res.token);
        setMsg("Logged in! Redirecting to profile…");
        window.location.href = "/profile";
      } else {
        setMsg(res.message || "Invalid credentials");
      }
    } catch (err: any) {
      setMsg(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="mx-auto max-w-md px-4 py-12">
      <h1 className="mb-6 text-2xl font-semibold">Log in</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="mb-1 block text-sm text-slate-600">Email</label>
          <input
            type="email"
            className="w-full rounded-md border px-3 py-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label className="mb-1 block text-sm text-slate-600">Password</label>
          <input
            type="password"
            className="w-full rounded-md border px-3 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-rose-500 px-4 py-2 font-medium text-white hover:bg-rose-600 disabled:opacity-60"
        >
          {loading ? "Signing in…" : "Log in"}
        </button>

        <p className="text-center text-sm">
          New here?{" "}
          <a className="text-rose-600 underline" href="/signup">
            Create an account
          </a>
        </p>

        {msg && (
          <p className="rounded-md bg-slate-50 p-3 text-center text-sm text-slate-700">
            {msg}
          </p>
        )}
      </form>
    </main>
  );
}
