import Sidebar from "@/components/sidebar";

export default function layout ({children}) {
    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <main className="flex-1 overflow-auto">{children}</main>
        </div>
    )
}