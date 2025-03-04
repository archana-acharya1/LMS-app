<<<<<<< HEAD
import { LogOut, User } from "lucide-react";
=======
import { LogOutIcon } from "lucide-react";
>>>>>>> f6bc836ecf1ea62ad69479646c4519b718d6c587
import { NavLink, useNavigate } from "react-router";

export default function Sidebar() {
  const navigate = useNavigate();
<<<<<<< HEAD
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
=======

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
>>>>>>> f6bc836ecf1ea62ad69479646c4519b718d6c587
        onClick={() => {
          localStorage.removeItem("token");
          navigate("/login");
        }}
      >
<<<<<<< HEAD
        <div className="flex gap-3 ">
          <LogOut />
          Logout
        </div>
=======
        <LogOutIcon className="w-6 h-6 mr-2" />
        Logout
>>>>>>> f6bc836ecf1ea62ad69479646c4519b718d6c587
      </button>
    </aside>
  );
}
