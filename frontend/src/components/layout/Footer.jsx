import React from 'react';

export function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-slate-50 py-8 px-6 mt-auto">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} SentiNaut. All rights reserved.
        </p>
        <div className="flex gap-4 text-sm text-slate-500">
          <a href="#" className="hover:text-slate-900">Privacy Policy</a>
          <a href="#" className="hover:text-slate-900">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
