import { Routes, Route } from "react-router";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Users from "./pages/Users";

// default export
export default function App() {
  return (
    <div className="w-screen h-screen bg-gray-100 flex justify-center items-center">
      <AppRoutes />
    </div>
  );
}

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="users" element={<Users />} />
    </Routes>
  );
};

// JSX can have only one parent element
