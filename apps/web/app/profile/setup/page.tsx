"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

type Profile = {
  gender: string;
  occupation: string;
  hometown: string;
  city: string;
  diet: "veg" | "non-veg" | "eggitarian" | "" ;
  preferences: string;
};

export default function ProfileSetupPage() {
  const router = useRouter();
  const [profile, setProfile] = useState<Profile>({
    gender: "",
    occupation: "",
    hometown: "",
    city: "",
    diet: "",
    preferences: "",
  });
  const [photos, setPhotos] = useState<FileList | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      const resp = await fetch("/api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...profile,
          photos: photos ? Array.from(photos).map(f => ({ name: f.name, size: f.size, type: f.type })) : []
        }),
      });
      if (!resp.ok) throw new Error("Failed to save profile");
      router.push("/dashboard");
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-semibold mb-4">Complete your profile</h1>
      <p className="text-gray-600 mb-6">Tell us a bit more so we can show you better matches.</p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium mb-1">Gender</label>
            <select
              value={profile.gender}
              onChange={(e) => setProfile({ ...profile, gender: e.target.value })}
              className="w-full border rounded-lg p-2"
              required
            >
              <option value="">Select</option>
              <option value="female">Female</option>
              <option value="male">Male</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Occupation</label>
            <input
              value={profile.occupation}
              onChange={(e) => setProfile({ ...profile, occupation: e.target.value })}
              className="w-full border rounded-lg p-2"
              placeholder="e.g., Software Engineer"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Home town</label>
            <input
              value={profile.hometown}
              onChange={(e) => setProfile({ ...profile, hometown: e.target.value })}
              className="w-full border rounded-lg p-2"
              placeholder="e.g., Jaipur"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Current city</label>
            <input
              value={profile.city}
              onChange={(e) => setProfile({ ...profile, city: e.target.value })}
              className="w-full border rounded-lg p-2"
              placeholder="e.g., Bengaluru"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Diet</label>
            <select
              value={profile.diet}
              onChange={(e) => setProfile({ ...profile, diet: e.target.value as Profile["diet"] })}
              className="w-full border rounded-lg p-2"
              required
            >
              <option value="">Select</option>
              <option value="veg">Veg</option>
              <option value="non-veg">Non-veg</option>
              <option value="eggitarian">Eggitarian</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium mb-1">Preferences (short)</label>
            <input
              value={profile.preferences}
              onChange={(e) => setProfile({ ...profile, preferences: e.target.value })}
              className="w-full border rounded-lg p-2"
              placeholder="e.g., caste/religion/education..."
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Photos</label>
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={(e) => setPhotos(e.target.files)}
            className="w-full"
          />
        </div>

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <button
          type="submit"
          disabled={submitting}
          className="rounded-lg px-4 py-2 bg-rose-500 text-white disabled:opacity-60"
        >
          {submitting ? "Saving..." : "Save & Continue"}
        </button>
      </form>
    </main>
  );
}
