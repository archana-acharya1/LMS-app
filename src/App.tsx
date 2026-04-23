import { Routes, Route, Navigate } from "react-router";
import Register from "./pages/Register";
import Login from "./pages/Login";
import CustomTable from "./components/CustomTable";
import AppLayout from "./AppLayout";
import Members from "./pages/Member";
import AddBooks from "./pages/books/AddBooks";
import EditMember from "./pages/EditMembers";
import AddMembers from "./pages/AddMember";
import Transaction from "./pages/transactions/Transaction";
import AddTransaction from "./pages/transactions/AddTransactions";
import EditTransaction from "./pages/transactions/EditTransaction";
import Books from "./pages/books/Books";
import EditBook from "./pages/EditBook";

export default function App() {
  return (
    <div className="w-screen h-screen bg-gray-100 flex justify-center items-center">
      <AppRoutes />
    </div>
  );
}

const ProtectedRoute = () => {
  const token = localStorage.getItem("token");
  return token ? <AppLayout /> : <Navigate to="/login" replace />;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Protected Routes */}
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Users />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/add" element={<AddBooks />} />
        <Route path="/members" element={<Members />} />
        <Route path="/table" element={<CustomTable />} />
        
        <Route path="/books/edit/:id" element={<EditBook />} />
        <Route path="/members/add" element={<AddMembers />} />
        <Route path="/members/edit/:id" element={<EditMember />} />
        <Route path="/transactions" element={<Transaction />} />
        <Route path="/transactions/add" element={<AddTransaction />} />
        <Route path="/transactions/edit" element={<EditTransaction />} />
      </Route>

      {/* Redirect unknown routes */}
      {/* <Route path="*" element={<Navigate to="/login" />} /> */}
    </Routes>
  );
};

function Users() {
  return <h1>Users</h1>;
}
