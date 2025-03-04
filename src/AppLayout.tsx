import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function AppLayout() {
  return (
<<<<<<< HEAD
    <div className="dashboard w-full h-screen bg-gray-300">
      <Navbar />
      <div className="flex w-full h-[calc(100%-64px)]">
        <Sidebar />
        <div className="flex-1 p-12 h-full overflow-y-auto">
          <Outlet />
=======
    <div className="dashboard w-full h-screen">
      <Navbar />  {/* static, used throughout the main app */}
      <div className="flex w-full h-[calc(100%-64px)]">
        <Sidebar /> {/* static, used throughout the main app */}
        <div className="flex-1 p-12 h-full overflow-y-auto">
          <Outlet /> {/* dynamic, changes based on the route */}
>>>>>>> f6bc836ecf1ea62ad69479646c4519b718d6c587
        </div>
      </div>
    </div>
  );
}
