export default function ProfilePage() {
  return (
    <main className="p-6">
      <h1 className="text-xl font-semibold">Profile</h1>
      {/* Client component below */}
      <ProfileForm />
    </main>
  );
}

import ProfileForm from "./ProfileForm";
