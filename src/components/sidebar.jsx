"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, Inbox, FileText, LayoutGrid, CheckCircle, Menu } from "lucide-react";

const sidebar = [
  {href: "/dashboard-marketing/home" , icon: Home, label: "Home"},
  {href: "/dashboard-marketing/inbox" , icon: Inbox, label: "Inbox"},
  {href: "/dashboard-marketing/docs" , icon: FileText, label: "Docs"},
  {href: "/dashboard-marketing/dashboard" , icon: LayoutGrid, label: "Dashboard"},
  {href: "/dashboard-marketing/task" , icon: CheckCircle, label: "Task"},
]

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="md:hidden fixed top-0 left-0 right-0 bg-[#00704A] shadow-md p-4 flex justify-between items-center z-50">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          <Menu size={28} />
        </button>
        <div className="w-10 h-10 bg-white flex items-center justify-center rounded-lg">
          <img src="/sofa 1.svg" alt="Logo" className="w-8 h-8" />
        </div>
      </div>

      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed inset-y-0 left-0 w-64 bg-[#00704A] shadow-md z-50 transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          md:translate-x-0 md:static md:h-screen`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6">
            <div className="w-16 h-16 bg-white flex items-center justify-center rounded-lg mx-auto">
              <img src="/sofa 1.svg" alt="Logo" className="w-14 h-14" />
            </div>
          </div>

          <nav className="flex-1 px-6 space-y-4 overflow-y-auto">
            {sidebar.map(({href, icon: Icon, label}) =>  (
              <Link key={href} href={href} className="flex gap-3 text-white p-2 hover:bg-[#005A3C] transition">
                <Icon size={24} />
                <span> {label}</span>
                </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className="md:hidden h-16" />
    </>
  );
}