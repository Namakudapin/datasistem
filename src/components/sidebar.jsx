"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Inbox, LayoutGrid, CheckCircle, Menu } from "lucide-react";

const sidebar = [
  { href: "/dashboard-marketing/home", icon: Home, label: "Home", section: "Main Navigation" },
  { href: "/dashboard-marketing/dashboard", icon: LayoutGrid, label: "Dashboard", section: "Master Data" },
  { href: "/dashboard-marketing/inbox", icon: Inbox, label: "Inbox" },
  { href: "/dashboard-marketing/task", icon: CheckCircle, label: "Task" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white shadow-md p-3 flex justify-between items-center z-50">
        <button onClick={() => setIsOpen(!isOpen)} className="text-black">
          <Menu size={24} />
        </button>
        <div className="w-10 h-10 bg-white flex items-center justify-center rounded-lg">
          <img src="/sofa 1.svg" alt="Logo" className="w-8 h-8" />
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsOpen(false)} />
      )}

      <div
        className={`fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200 shadow-md z-50 transition-transform duration-300 ease-in-out
          ${isOpen ? "translate-x-0" : "-translate-x-full"} 
          md:translate-x-0 md:static md:h-screen`}
      >
        <div className="flex flex-col h-full">
          <div className="p-6">
            <div className="w-14 h-14 bg-white flex items-center justify-center rounded-lg mx-auto">
              <img src="/sofa 1.svg" alt="Logo" className="w-12 h-12" />
            </div>
          </div>

          <nav className="flex-1 px-6 space-y-4 overflow-y-visible">
            {sidebar.map(({ href, icon: Icon, label, section }) => (
              <div key={href}>
                {section && (
                  <p className={`text-sm text-black uppercase font-semibold mb-3 ${section === "Main Navigation" ? "" : "mt-8"}`}>
                    {section}
                  </p>
                )}
                <Link 
                  href={href} 
                  className={`flex gap-3 p-3 text-base transition-all group rounded-lg font-medium
                    ${pathname === href 
                      ? "bg-indigo-100 text-indigo-600" 
                      : "text-gray-600 hover:bg-indigo-100 hover:text-indigo-600"}`}
                  onClick={() => setIsOpen(false)}
                >
                  <Icon 
                    className={`${
                      pathname === href 
                        ? "text-indigo-600" 
                        : "text-gray-600 group-hover:text-indigo-600"
                    }`} 
                    size={22} 
                  />
                  <span className={`${
                    pathname === href 
                      ? "text-indigo-600" 
                      : "text-gray-600 group-hover:text-indigo-600"
                  }`}>
                    {label}
                  </span>
                </Link>
              </div>
            ))}
          </nav>
        </div>
      </div>
      <div className="md:hidden h-16" />
    </>
  );
}
