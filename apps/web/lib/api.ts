// apps/web/lib/api.ts
export const API_BASE =
  process.env.NEXT_PUBLIC_API?.replace(/\/+$/,'') ?? '';

export type Profile = {
  id?: string;
  userId?: string;
  name?: string;
  dob?: string; // ISO
  location?: string;
  education?: string;
  bio?: string;
  preferences?: {
    minAge?: number;
    maxAge?: number;
    religion?: string;
    preferredLocation?: string;
    preferredEducation?: string;
    interests?: string[];
  }
};

export function decodeJwtSub(token: string | null): string | null {
  if (!token) return null;
  try {
    const payload = JSON.parse(
      Buffer.from(token.split('.')[1].replace(/-/g,'+').replace(/_/g,'/'), 'base64').toString('utf8')
    );
    return payload?.sub ?? null;
  } catch {
    return null;
  }
}

async function api<T>(
  path: string,
  options: RequestInit = {},
  token?: string | null
): Promise<T> {
  if (!API_BASE) throw new Error("NEXT_PUBLIC_API not set");
  const url = `${API_BASE}/${path.replace(/^\/+/, '')}`;
  const headers: Record<string,string> = {
    'Content-Type': 'application/json',
    ...(options.headers as Record<string,string> || {}),
  };
  if (token) headers['Authorization'] = `Bearer ${token}`;
  const res = await fetch(url, { ...options, headers, cache: 'no-store' });
  if (!res.ok) {
    let detail: any = null;
    try { detail = await res.json(); } catch {}
    throw new Error(detail?.message || `HTTP ${res.status}`);
  }
  return res.json() as Promise<T>;
}

export const ProfileAPI = {
  get(userId: string, token?: string | null) {
    return api<Profile>(`profile/${userId}`, { method: 'GET' }, token);
  },
  upsert(userId: string, profile: Profile, token?: string | null) {
    return api<Profile>(`profile/${userId}`, {
      method: 'POST',
      body: JSON.stringify(profile),
    }, token);
  }
};
