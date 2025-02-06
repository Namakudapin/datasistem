import Sidebar from './sidebar';
import TaskBoardPage from './page';

export default function Page() {
  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <TaskBoardPage />
    </div>
  );
}