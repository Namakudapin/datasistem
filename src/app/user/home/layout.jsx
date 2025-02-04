import Navbar from "@/components/navbar";


export default function HomeLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}