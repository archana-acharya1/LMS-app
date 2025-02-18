import { NavLink, Outlet } from "react-router";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <div className="dashboard w-full h-screen bg-gray-300">
      <Navbar />
      <div className="flex w-full h-full">
      <aside className="bg-white w-32">

        {/*
          we use "/users" for absolute path
          and "users" for relative path
        */}
        <ul>
          <NavLink to="login">
            <li>Users</li>
          </NavLink>
          <NavLink to="books">
          <li>Books</li>
          </NavLink>
        </ul>
      </aside>
      <Outlet />
      </div>

    </div>
  )
}