import { Outlet } from "react-router";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function AppLayout() {
  return (
    <div className="dashboard w-full h-screen">
      <Navbar />  {/* static, used throughout the main app */}
      <div className="flex w-full h-[calc(100%-64px)]">
        <Sidebar /> {/* static, used throughout the main app */}
        <div className="flex-1 p-12 h-full overflow-y-auto">
          <Outlet /> {/* dynamic, changes based on the route */}
        </div>
      </div>
    </div>
  );
}
