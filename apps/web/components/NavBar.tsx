import React from 'react';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="bg-rose-500 text-white px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold text-lg">No2Dowry</h1>
      <div className="space-x-6">
        <Link href="/dashboard" className="hover:underline">Dashboard</Link>
        <Link href="/profile" className="hover:underline">Profile</Link>
        <Link href="/login" className="hover:underline">Logout</Link>
      </div>
    </nav>
  );
}