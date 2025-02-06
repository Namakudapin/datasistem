import Sidebar from './sidebar';
import Inbox from './page';
export default function Page() {
  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <Inbox />
    </div>
  );
}