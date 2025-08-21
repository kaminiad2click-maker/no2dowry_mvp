"use client";

import { useState } from "react";

export default function ProfileForm() {
  const [profile, setProfile] = useState({ name: "", age: "", city: "" });

  return (
    <div className="mt-4 space-y-2">
      <input
        className="border p-2 rounded w-full"
        placeholder="Name"
        value={profile.name}
        onChange={(e) => setProfile({ ...profile, name: e.target.value })}
      />
      <input
        className="border p-2 rounded w-full"
        placeholder="Age"
        value={profile.age}
        onChange={(e) => setProfile({ ...profile, age: e.target.value })}
      />
      <input
        className="border p-2 rounded w-full"
        placeholder="City"
        value={profile.city}
        onChange={(e) => setProfile({ ...profile, city: e.target.value })}
      />
    </div>
  );
}
