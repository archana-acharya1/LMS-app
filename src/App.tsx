import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route } from "react-router";

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
    </Routes>
  );
};

// JSX can have only one parent element
