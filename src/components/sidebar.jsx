"use client";

import { useState } from "react";
import { Home, Inbox, FileText, LayoutGrid, CheckCircle, Menu } from "lucide-react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white shadow-md p-4 flex justify-between items-center z-50">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
          <Menu size={28} />
        </button>
        <div className="w-10 h-10 bg-emerald-400 flex items-center justify-center rounded-lg">
          <img src="/sofa 1.svg" alt="Logo" className="w-8 h-8" />
        </div>
      </div>

      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar for Desktop & Mobile Menu */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white shadow-md z-50 transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 md:static md:h-screen`}
      >
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="p-6">
            <div className="w-16 h-16 bg-emerald-400 flex items-center justify-center rounded-lg mx-auto">
              <img src="/sofa 1.svg" alt="Logo" className="w-14 h-14" />
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 px-6 space-y-4 overflow-y-auto">
            <div className="flex items-center gap-3 text-emerald-500 p-3 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition">
              <Home size={24} />
              <span className="md:inline">Home</span>
            </div>
            <div className="flex items-center gap-3 text-gray-500 p-3 rounded-lg hover:bg-gray-100 transition">
              <Inbox size={24} />
              <span className="md:inline">Inbox</span>
            </div>
            <div className="flex items-center gap-3 text-gray-500 p-3 rounded-lg hover:bg-gray-100 transition">
              <FileText size={24} />
              <span className="md:inline">Docs</span>
            </div>
            <div className="flex items-center gap-3 text-gray-500 p-3 rounded-lg hover:bg-gray-100 transition">
              <LayoutGrid size={24} />
              <span className="md:inline">Dashboard</span>
            </div>
            <div className="flex items-center gap-3 text-gray-500 p-3 rounded-lg hover:bg-gray-100 transition">
              <CheckCircle size={24} />
              <span className="md:inline">Task</span>
            </div>
          </nav>
        </div>
      </div>

      {/* Content Spacing for Mobile */}
      <div className="md:hidden h-16" />
    </>
  );
}