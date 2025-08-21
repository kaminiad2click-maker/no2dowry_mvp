import React, { useState } from 'react';

export default function Profile() {
  const [profile, setProfile] = useState({ name: "", age: "", city: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    alert("Profile saved!");
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md">
      <h1 className="text-2xl font-bold mb-4">Profile Settings</h1>
      <input name="name" placeholder="Name" className="w-full mb-3 p-2 border rounded" onChange={handleChange} />
      <input name="age" placeholder="Age" className="w-full mb-3 p-2 border rounded" onChange={handleChange} />
      <input name="city" placeholder="City" className="w-full mb-3 p-2 border rounded" onChange={handleChange} />
      <button onClick={handleSave} className="mt-3 bg-rose-500 text-white px-4 py-2 rounded-lg hover:bg-rose-600">
        Save
      </button>
    </div>
  );
}