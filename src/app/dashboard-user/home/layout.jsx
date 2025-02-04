import Sidebar from "@/components/sidebar";

export default function HomeLayout({ children }) {
  return (
    <div className="flex min-h-screen bg-[#EFF2F1]">
      {/* Sidebar */}
      <Sidebar />

      <main className="flex-1 p-8 overflow-auto">
        {children}
      </main>
    </div>
  );
}
