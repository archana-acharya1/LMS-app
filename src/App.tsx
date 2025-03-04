import { Routes, Route, Navigate } from "react-router";
import Register from "./pages/Register";
import Login from "./pages/Login";
<<<<<<< HEAD
import Users from "./pages/Users";
import Books from "./pages/Books";
import CustomTable from "./components/CustomTable";
import AppLayout from "./AppLayout";
import Members from "./pages/Member";
import AddBooks from "./pages/AddBooks";
import EditBook from "./pages/EditBook";
=======
import AppLayout from "./AppLayout";
import Books from "./pages/books/Books";
import AddBooks from "./pages/books/AddBooks";
>>>>>>> f6bc836ecf1ea62ad69479646c4519b718d6c587

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
<<<<<<< HEAD
};

const AppRoutes = () => {
=======
}

function AppRoutes() {
>>>>>>> f6bc836ecf1ea62ad69479646c4519b718d6c587
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
<<<<<<< HEAD
      {/* <Route path="profile" element={<Profile />} /> */}
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="users" element={<Users />} />
        <Route path="books" element={<Books />} />
        <Route path="members" element={<Members />} />
        <Route path="table" element={<CustomTable />} />
        <Route path="books/add" element={<AddBooks />} />
        <Route path="books/edit/:id" element={<EditBook />} />
=======
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="users" element={<Users />} />
        <Route path="books" element={<Books />} />
        <Route path="books/add" element={<AddBooks />} />
        {/* TODO: add route for book edit - it's a dynamic route */}
>>>>>>> f6bc836ecf1ea62ad69479646c4519b718d6c587
      </Route>
    </Routes>
  );
};

function Users() {
  return <h1>Users</h1>;
}

// JSX can have only one parent element
