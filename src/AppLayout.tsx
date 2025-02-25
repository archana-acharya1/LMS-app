import { NavLink, Outlet, useNavigate } from "react-router";
import Navbar from "./components/Navbar";

export default function AppLayout() {
  const navigate = useNavigate();
  return (
    <div className="dashboard w-full h-screen">
      <Navbar />
      <div className="flex w-full h-[calc(100%-64px)]">
        <aside className="bg-white w-64 py-8 shadow-sm flex flex-col justify-between">
          <ul className="text-xl">
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
          <button
            type="button"
            className="text-xl px-4 cursor-pointer"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
          >
            Logout
          </button>
        </aside>
        <div className="flex-1 p-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
