'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Page = () => {
  const [notesArray, setNotesArray] = useState([]);

  // Fetch saved notes from backend
  const getNotes = async () => {
    try {
      const req = await fetch("http://localhost:8080/"); // Or your actual backend route
      const notes = await req.json();
      console.log("Fetched Notes:", notes);
      setNotesArray(notes);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
  };

  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="flex flex-col min-h-[85vh] items-center bg-[url('https://t4.ftcdn.net/jpg/05/71/83/47/360_F_571834789_ujYbUnH190iUokdDhZq7GXeTBRgqYVwa.jpg')] bg-cover bg-center text-white px-4 py-10">
      <h1 className="text-4xl font-bold mb-4 text-sky-400 drop-shadow-sm mt-10">Your Saved Notes</h1>

      <div className="mt-5 w-full max-w-[70%] bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-2xl flex flex-col gap-5">
        {notesArray.length === 0 && (
          <p className='text-center text-white/80'>No notes saved yet.</p>
        )}

        {notesArray.map(note => (
          <div key={note._id || note.id} className="relative p-4 border border-white/30 rounded-lg bg-white/10 shadow-lg">
            {note.createdAt && (
              <div className="absolute top-2 right-3 text-xs text-white/60">
                {new Date(note.createdAt).toLocaleString('en-IN', {
                  day: 'numeric',
                  month: 'short',
                  year: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit',
                  hour12: true
                })}
              </div>
            )}
            <h2 className="text-xl font-semibold">{note.title}</h2>
            <p className="text-white/80 whitespace-pre-line">{note.notes}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;
