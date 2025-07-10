'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center sticky top-0 z-50 px-6 py-4 bg-white shadow-md text-black">
        {/* <nav className="sticky top-0 z-50  > */}
      <h1 className="text-2xl font-bold">
        Karimi F's Portfolio
          </h1>
      <div className="text-xl font-bold text-red-500">
        
      </div>

      <div className="flex gap-6 text-sm md:text-base">
        <Link href="/" className="hover:underline text-black hover:text-red-500">Home</Link>
        <Link href="/about" className="hover:underline text-black hover:text-red-500">About</Link>
        <Link href="/contact" className="hover:underline text-black hover:text-red-500">Contact</Link>

        
      </div>
    </nav>
  );
}
