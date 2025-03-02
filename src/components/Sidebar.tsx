import { LogOutIcon } from "lucide-react";
import { NavLink, useNavigate } from "react-router";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
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
        className="text-xl px-4 cursor-pointer flex justify-start items-center"
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
      >
        <LogOutIcon className="w-6 h-6 mr-2" />
        Logout
      </button>
    </aside>
  );
}
