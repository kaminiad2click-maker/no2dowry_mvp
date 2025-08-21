import Link from "next/link";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function HomePage() {
  let session = null;
  try {
    session = await getServerSession(authOptions);
  } catch {
    // If authOptions misconfigured, fail gracefully to landing
    session = null;
  }

  if (session) {
    const done = cookies().get("profileCompleted")?.value === "true";
    redirect(done ? "/dashboard" : "/profile/setup");
  }

  // Guest landing
  return (
    <main className="text-center py-16">
      <h2 className="uppercase tracking-widest text-sm mb-2">
        MODERN • RESPECTFUL • NO DOWRY
      </h2>
      <h1 className="text-4xl font-bold">Find your forever ❤️</h1>
      <p className="text-slate-600 mt-2">
        Build meaningful connections—simple, respectful, and built for compatibility.
      </p>
      <div className="mt-6 flex gap-4 justify-center">
        <Link className="px-5 py-2 rounded bg-rose-500 text-white" href="/signup">
          Create your profile
        </Link>
        <Link className="px-5 py-2 rounded border" href="/login">
          I already have an account
        </Link>
      </div>
    </main>
  );
}
