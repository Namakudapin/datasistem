import Sidebar from './sidebar';
import HomeClass from './page';
export default function Page() {
  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <HomeClass />
    </div>
  );
}