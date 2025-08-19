export async function apiRequest<T>(
  path: string,
  opts: { method?: string; token?: string; body?: any } = {}
): Promise<T> {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL || "https://no2dowry-mvp.onrender.com";
  const headers: Record<string,string> = { "Content-Type": "application/json" };
  if (opts.token) headers.Authorization = `Bearer ${opts.token}`;
  const res = await fetch(`${base}${path}`, {
    method: opts.method || "GET",
    headers,
    body: opts.body ? JSON.stringify(opts.body) : undefined,
    cache: "no-store",
  });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}
