import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-slate-200 text-center p-4">
        <p className="text-sm">© 2023 <span className="text-sky-400 font-semibold">NotesNest</span>. All rights reserved.</p>
        <p className="text-xs mt-1">
          Made with <span className="text-red-400">❤️</span> by <span className="text-sky-400">NotesNest Team</span>
        </p>
      </div>
      <div className="bg-[#0f172a] border-t border-sky-500/30 text-gray-400 text-center text-xs p-2">
        Privacy Policy | Terms of Service
      </div>
    </footer>
  );
};

export default Footer;