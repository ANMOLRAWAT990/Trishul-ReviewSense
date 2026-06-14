import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-slate-200 bg-white/80 px-6 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <Link to="/" className="text-xl font-bold tracking-tight text-slate-900">
          Senti<span className="text-blue-600">Naut</span>
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/about" className="text-sm font-medium text-slate-600 hover:text-blue-600">About</Link>
        <Link to="/login" className="text-sm font-medium text-blue-600 hover:text-blue-700">Log in</Link>
      </div>
    </nav>
  );
}
