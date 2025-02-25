import { Routes, Route, Navigate } from "react-router";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AppLayout from "./AppLayout";
import Books from "./pages/Books";

// default export
export default function App() {
  return (
    <div className="w-screen h-screen bg-gray-100 flex justify-center items-center">
      <AppRoutes />
    </div>
  );
}

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");
  return token ? <AppLayout /> : <Navigate to="login" />;
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="users" element={<h1>Users</h1>} />
        <Route path="books" element={<Books />} />
      </Route>
    </Routes>
  );
}

// JSX can have only one parent element
