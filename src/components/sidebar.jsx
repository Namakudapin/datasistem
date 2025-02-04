// components/Sidebar.jsx
import { Home, Inbox, FileText, LayoutGrid, CheckCircle } from 'lucide-react';

export default function Sidebar() {
  return (
    <>
      <div className="w-64 flex-shrink-0" />
      <div className="fixed left-0 top-0 h-screen w-64 p-6 bg-white shadow-md overflow-y-auto">
        <div className="w-16 h-16 bg-emerald-400 flex items-center justify-center rounded-lg mb-8">
          <img
            src="/sofa 1.svg"
            alt="Logo"
            className="w-14 h-14"
          />
        </div>

        <nav className="space-y-4">
          <div className="flex items-center gap-3 text-emerald-500 p-3 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition">
            <Home size={24} />
            <span>Home</span>
          </div>
          <div className="flex items-center gap-3 text-gray-500 p-3 rounded-lg hover:bg-gray-100 transition">
            <Inbox size={24} />
            <span>Inbox</span>
          </div>
          <div className="flex items-center gap-3 text-gray-500 p-3 rounded-lg hover:bg-gray-100 transition">
            <FileText size={24} />
            <span>Docs</span>
          </div>
          <div className="flex items-center gap-3 text-gray-500  p-3 rounded-lg hover:bg-gray-100 transition">
            <LayoutGrid size={24} />
            <span>Dashboard</span>
          </div>
          <div className="flex items-center gap-3 text-gray-500 p-3 rounded-lg hover:bg-gray-100 transition">
            <CheckCircle size={24} />
            <span>Task</span>
          </div>
        </nav>
      </div>
    </>
  );
}
