'use client';
import { React, useState, useEffect } from 'react';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { v4 as uuidv4 } from 'uuid';

const Notes = () => {
  const [form, setForm] = useState({
    title: "",
    notes: ""
  })
  const [notesArray, setNotesArray] = useState([]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value
    });
  };
  const saveNote = async () => {
    const id = form.id || uuidv4();
    const createdAt = new Date().toISOString();
    const newEntry = { ...form, id, createdAt };

    await fetch("https://notesnest-tki8.onrender.com/api/notes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newEntry),
    });

    setNotesArray([...notesArray, newEntry]);
    setForm({ title: "", notes: "" });

    toast('Note saved successfully', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    console.log("Note saved!");
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div className="flex flex-col min-h-[85vh] items-center justify-center bg-[url('https://t4.ftcdn.net/jpg/05/71/83/47/360_F_571834789_ujYbUnH190iUokdDhZq7GXeTBRgqYVwa.jpg')] bg-cover bg-center text-white px-4 py-10">
        <div className="mt-10 w-full max-w-xl bg-white/20 backdrop-blur-md p-8 rounded-2xl shadow-2xl flex flex-col gap-5">
          <h2 className="text-2xl font-semibold text-center text-white drop-shadow">Create a New Note</h2>

          <div className="flex flex-col gap-2">
            <label htmlFor="title" className="text-sm font-medium">Title</label>
            <input
              type="text"
              id="title"
              value={form.title}
              name="title"
              onChange={handleChange}
              placeholder="Enter a title"
              className="w-full px-4 py-2 bg-white/10 border border-white/30 text-white rounded-lg placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-sky-400 transition"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="notes" className="text-sm font-medium">Write your notes</label>
            <textarea
              id="notes"
              rows={5}
              value={form.notes}
              onChange={handleChange}
              name="notes"
              placeholder="Type something amazing..."
              className="w-full px-4 py-3 bg-white/10 border border-white/30 text-white rounded-lg placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-sky-400 transition resize-none"
            />
          </div>

          <div className="flex justify-between pt-4">
            <button onClick={() => saveNote()} className="bg-blue-500 hover:bg-blue-600 cursor-pointer text-white font-medium px-5 py-2 rounded-lg transition shadow-md shadow-blue-500/30">
              Save Note
            </button>
            <Link href="/notes/saved" className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-5 py-2 rounded-lg transition shadow-md shadow-emerald-500/30 flex items-center justify-center">
              View Saved Notes
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notes;
