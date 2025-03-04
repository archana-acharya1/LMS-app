import { LogOut, User } from "lucide-react";
import { NavLink, useNavigate } from "react-router";

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <aside className="bg-white w-64 py-8 flex flex-col justify-between">
      {/*
          we use "/users" for absolute path
          and "users" for relative path
        */}
      <ul>
        <NavLink
          to="users"
          className={({ isActive }) =>
            `
            hover:bg-amber-100 p-4 flex w-full justify-start items-center
            ${isActive ? "bg-gray-300" : ""}
            `
          }
        >
          <li className="hover:bg-amber-100">Users</li>
        </NavLink>
        <NavLink
          to="books"
          className={({ isActive }) =>
            `
          hover:bg-amber-100 p-4 flex w-full justify-start items-center
          ${isActive ? "bg-gray-300" : ""}
          `
          }
        >
          <li className="hover:bg-amber-100">Books</li>
        </NavLink>

        <NavLink
          to="members"
          className={({ isActive }) =>
            `
          hover:bg-amber-100 p-4 flex w-full justify-start items-center
          ${isActive ? "bg-gray-300" : ""}
          `
          }
        >
          <li className="hover:bg-amber-100 p-6">
            <div className="flex gap-3">
              <User />
              Members
            </div>
          </li>
        </NavLink>
      </ul>
      <button
        type="button"
        className="text-xl px-4 cursor-pointer"
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
      >
        <div className="flex gap-3 ">
          <LogOut />
          Logout
        </div>
      </button>
    </aside>
  );
}
