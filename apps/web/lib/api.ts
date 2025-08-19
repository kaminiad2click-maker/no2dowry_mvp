export const API = process.env.NEXT_PUBLIC_API || "";

function join(base: string, path: string) {
  if (!base) return path; // allows local dev without API
  const a = base.endsWith("/") ? base.slice(0, -1) : base;
  const p = path.startsWith("/") ? path : `/${path}`;
  return a + p;
}

export async function api(
  path: string,
  options: RequestInit = {}
): Promise<any> {
  const url = join(API, path);
  const headers = {
    "Content-Type": "application/json",
    ...(options.headers || {}),
  };

  const res = await fetch(url, { ...options, headers });

  let data: any = null;
  try { data = await res.json(); } catch {}

  if (!res.ok) {
    const msg = (data && (data.message || data.error)) || `Request failed ${res.status}`;
    throw new Error(msg);
  }
  return data;
}

export const post = (path: string, body: any) =>
  api(path, { method: "POST", body: JSON.stringify(body) });

export const get = (path: string) => api(path, { method: "GET" });
