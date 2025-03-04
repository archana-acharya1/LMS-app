import { Routes, Route, Navigate } from "react-router";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Users from "./pages/Users";
import Books from "./pages/Books";
import CustomTable from "./components/CustomTable";
import AppLayout from "./AppLayout";
import Members from "./pages/Member";
import AddBooks from "./pages/AddBooks";
import EditBook from "./pages/EditBook";

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
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      {/* <Route path="profile" element={<Profile />} /> */}
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="users" element={<Users />} />
        <Route path="books" element={<Books />} />
        <Route path="members" element={<Members />} />
        <Route path="table" element={<CustomTable />} />
        <Route path="books/add" element={<AddBooks />} />
        <Route path="books/edit/:id" element={<EditBook />} />
      </Route>
    </Routes>
  );
};

// JSX can have only one parent element
