import { Routes, Route, Navigate } from "react-router";
import Register from "./pages/Register";
import Login from "./pages/Login";
import AppLayout from "./AppLayout";
import Books from "./pages/books/Books";
import AddBooks from "./pages/books/AddBooks";

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
        <Route path="users" element={<Users />} />
        <Route path="books" element={<Books />} />
        <Route path="books/add" element={<AddBooks />} />
      </Route>
    </Routes>
  );
}

function Users() {
  return <h1>Users</h1>;
}

// JSX can have only one parent element
