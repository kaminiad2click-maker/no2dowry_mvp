import Link from "next/link";
import { getServerSession } from "next-auth";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const session = await getServerSession();
  if (session) {
    const cookieStore = cookies();
    const done = cookieStore.get("profileCompleted")?.value === "true";
    if (!done) {
      redirect("/profile/setup");
    } else {
      redirect("/dashboard");
    }
  }

  return (
    <main className="max-w-3xl mx-auto p-8 text-center">
      <h1 className="text-3xl font-bold">No2Dowry</h1>
      <p className="text-gray-600 mt-2">Find your match with values that matter.</p>
      <div className="mt-6 flex gap-4 justify-center">
        <Link className="px-4 py-2 rounded bg-rose-500 text-white" href="/signup">Sign up</Link>
        <Link className="px-4 py-2 rounded border" href="/login">Log in</Link>
      </div>
    </main>
  );
}
