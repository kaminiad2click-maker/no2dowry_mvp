"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white">
      <Link href="/" className="font-bold text-lg">No2Dowry</Link>
      <div className="flex gap-4 items-center">
        {!session ? (
          <>
            <Link href="/signup" className="bg-white/10 hover:bg-white/20 rounded-full px-4 py-2">Sign up</Link>
            <Link href="/login" className="bg-white text-rose-600 rounded-full px-4 py-2 font-semibold">Log in</Link>
          </>
        ) : (
          <>
            <Link href="/dashboard" className="hover:underline">Dashboard</Link>
            <Link href="/profile" className="hover:underline">Profile</Link>
            <form action="/api/auth/signout" method="post">
              <button type="submit" className="bg-white/10 hover:bg-white/20 rounded-full px-4 py-2">Logout</button>
            </form>
          </>
        )}
      </div>
    </nav>
  );
}
