import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[85vh] bg-[url('https://t4.ftcdn.net/jpg/05/71/83/47/360_F_571834789_ujYbUnH190iUokdDhZq7GXeTBRgqYVwa.jpg')] bg-cover bg-center text-white p-6">
      <h1 className="text-4xl font-bold mb-4 text-sky-400 drop-shadow-sm">
        Welcome to NotesNest
      </h1>

      <p className="text-lg text-slate-200 mb-2">
        Your personal space for jotting down thoughts, ideas, and reminders.
      </p>

      <p className="text-slate-400 mb-6">
        Welcome to NoteNest — where your brain dumps find a cozy home!
        Jot down your wild ideas, daily to-dos, grocery lists, or world domination plans — we don’t judge. Add, edit, delete… do it all with just a few clicks. It’s fast, simple, and kind of addictive. Warning: excessive note-taking may lead to extreme organization.
      </p>

      <Link
        href="/notes"
        className="bg-sky-600 text-white px-6 py-3 rounded-lg hover:bg-sky-700 transition-colors shadow-lg"
      >
        Get Started
      </Link>
    </div>
  );
}
