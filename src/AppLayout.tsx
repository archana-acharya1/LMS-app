import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function AppLayout() {
  return (
    <div className="dashboard w-full h-screen bg-gray-300">
      <Navbar />
      <div className="flex w-full h-[calc(100%-64px)]">
        <Sidebar />
        <div className="flex-1 p-12 h-full overflow-y-auto">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
