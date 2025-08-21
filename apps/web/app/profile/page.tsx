import Link from "next/link";

export default function ProfilePage() {
  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-semibold">My Profile</h1>
      <p className="text-gray-600 mt-4">
        This page will show your profile details. To (re)fill your onboarding details, use the setup flow.
      </p>
      <div className="mt-6">
        <Link href="/profile/setup" className="rounded-lg px-4 py-2 bg-rose-500 text-white inline-block">
          Go to Profile Setup
        </Link>
      </div>
    </main>
  );
}
