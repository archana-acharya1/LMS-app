import { Routes, Route } from "react-router";
import Navbar from "./components/Navbar";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Avatar from "./components/Avatar";
import Dashboard from "./pages/Dashboard";

// default export
export default function App() {
  return (
    <div className="w-screen h-screen bg-gray-100 flex justify-center items-center">
      <AppRoutes />
    </div>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="users" element={<>Users</>} />
        <Route path="books" element={<>Books</>} />
        <Route path="profile" element={<>Profile</>} />
      </Route>
    </Routes>
  );
}

// JSX can have only one parent element
