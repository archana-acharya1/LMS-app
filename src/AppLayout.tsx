import { NavLink, Outlet } from "react-router";
import Navbar from "./components/Navbar";

export default function AppLayout() {
  return (
    <div className="dashboard w-full h-screen">
      <Navbar />
      <div className="flex w-full h-[calc(100%-64px)]">
        <aside className="bg-white w-64 py-4 shadow-sm">
          {/*
          we use "/users" for absolute path
          and "users" for relative path
        */}
          <ul>
            <li>
              <NavLink
                to="users"
                className={({ isActive }) => `
                hover:bg-amber-100 p-4 flex w-full justify-start items-center
                  ${isActive ? " bg-gray-300" : ""}
                `}
              >
                Users
              </NavLink>
            </li>
            <li>
              <NavLink
                to="books"
                className={({ isActive }) => `
                hover:bg-amber-100 p-4 flex w-full justify-start items-center
                  ${isActive ? " bg-gray-300" : ""}
                `}
              >
                Books
              </NavLink>
            </li>
          </ul>
        </aside>
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
