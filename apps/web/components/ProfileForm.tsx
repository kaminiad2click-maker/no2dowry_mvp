import { useState } from "react";
import { apiRequest } from "../lib/api";

type Profile = {
  name: string;
  dob: string;          // "YYYY-MM-DD"
  location: string;
  preferences?: string[];
  bio?: string;
};

export default function ProfileForm() {
  const [profile, setProfile] = useState<Profile>({
    name: "",
    dob: "",
    location: "",
    preferences: [],
    bio: ""
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await apiRequest("/profile", {
        method: "POST",
        body: profile
      });
      setSuccess(true);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name</label>
        <input name="name" value={profile.name} onChange={handleChange} />
      </div>
      <div>
        <label>Date of Birth</label>
        <input type="date" name="dob" value={profile.dob} onChange={handleChange} />
      </div>
      <div>
        <label>Location</label>
        <input name="location" value={profile.location} onChange={handleChange} />
      </div>
      <div>
        <label>Bio</label>
        <textarea name="bio" value={profile.bio} onChange={handleChange}></textarea>
      </div>
      <button type="submit" disabled={loading}>
        {loading ? "Saving..." : "Save Profile"}
      </button>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {success && <p style={{ color: "green" }}>Profile saved!</p>}
    </form>
  );
}
