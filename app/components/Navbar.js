import React from 'react';
import Link from 'next/link';
import { StickyNote } from 'lucide-react'; // alternative to CloudSun

const Navbar = () => {
  return (
    <nav className="backdrop-blur-md bg-white/5 border-b border-sky-500/30 shadow-md shadow-sky-900/20 px-8 py-4 flex justify-between items-center fixed w-full z-50">
      <div className="flex items-center gap-2">
        <StickyNote className="text-sky-400 w-6 h-6 animate-pulse" />
        <Link href="/" className="text-2xl font-bold text-sky-400 hover:text-sky-300 transition duration-300">
          NotesNest
        </Link>
      </div>

      <div className="space-x-8 text-sm font-medium text-slate-200">
        <Link href="/" className="hover:text-sky-400 transition duration-300">Home</Link>
        <Link href="/about" className="hover:text-sky-400 transition duration-300">About</Link>
        <Link href="/contact" className="hover:text-sky-400 transition duration-300">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;