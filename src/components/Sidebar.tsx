import { BookIcon, DollarSign, LogOut, User } from "lucide-react";
import { useContext } from "react";
import { NavLink } from "react-router";
import { AuthContext } from "../context/AuthContext";

export default function Sidebar() {
  const { handleLogout } = useContext(AuthContext);

  return (
    <aside className="bg-white w-64 py-8 flex flex-col justify-between">
      {/*
          we use "/users" for absolute path
          and "users" for relative path
        */}
      <ul>
        <NavLink
          to="books"
          className={({ isActive }) =>
            `
          hover:bg-amber-100 p-4 flex w-full justify-start items-center
          ${isActive ? "bg-gray-300" : ""}
          `
          }
        >
          <li className="hover:bg-amber-100">
            <div className="flex gap-3">
              <BookIcon />
              Books
            </div>
          </li>
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
          <li className="hover:bg-amber-100">
            <div className="flex gap-3">
              <User />
              Members
            </div>
          </li>
        </NavLink>
        <NavLink
          to="transactions"
          className={({ isActive }) =>
            `
          hover:bg-amber-100 p-4 flex w-full justify-start items-center
          ${isActive ? "bg-gray-300" : ""}
          `
          }
        >
          <li className="hover:bg-amber-100">
          <div className="flex gap-3">
            <DollarSign />
            Transactions
            </div>
          </li>
        </NavLink>
      </ul>
      <button
        type="button"
        className="text-xl px-4 cursor-pointer"
        onClick={() => {
          handleLogout();
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
