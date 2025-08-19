// apps/web/lib/api.ts
export const API_BASE =
  process.env.NEXT_PUBLIC_API ||
  process.env.NEXT_PUBLIC_API_URL ||
  '';

type Options = RequestInit & {
  token?: string | null;
  body?: any; // will auto-JSON if it's a plain object
};

export async function apiRequest<T = any>(
  path: string,
  options: Options = {}
): Promise<T> {
  if (!API_BASE) {
    throw new Error(
      'NEXT_PUBLIC_API (or NEXT_PUBLIC_API_URL) is missing. Set it in Vercel Environment Variables.'
    );
  }

  const { token, body, headers, ...rest } = options;

  const finalHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    ...(headers as Record<string, string>),
  };
  if (token) finalHeaders['Authorization'] = `Bearer ${token}`;

  const res = await fetch(`${API_BASE.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`, {
    method: body ? 'POST' : 'GET',
    body: body && typeof body === 'object' ? JSON.stringify(body) : (body as any),
    headers: finalHeaders,
    ...rest,
  });

  // Try to parse JSON; if not JSON, throw text
  const text = await res.text();
  let data: any;
  try {
    data = text ? JSON.parse(text) : null;
  } catch {
    // non-JSON
    if (!res.ok) throw new Error(text || `HTTP ${res.status}`);
    return text as unknown as T;
  }

  if (!res.ok) {
    const msg = data?.message || data?.error || `HTTP ${res.status}`;
    throw new Error(msg);
  }

  return data as T;
}
