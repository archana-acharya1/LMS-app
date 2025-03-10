import UserData from "./users.json";
import { PencilIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router";

export default function CustomTable() {
  const HEADERS = ["ID", "Name", "Email", "Status", "Phone"];
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleDelete = (id: number) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;
    
    try {
      const response = fetch(`http://localhost:3000/users/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("User deleted successfully", response);
    } catch (error) {
      console.error("Error while deleting the user", error);
    }
  };

  const handleEdit = (id: number) => {
    navigate(`/users/edit/${id}`);
  };

  return (
    <div className="w-full p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Users</h1>
        <button
          onClick={() => navigate("/users/add")}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          + Add User
        </button>
      </div>

      <div className="w-full overflow-auto rounded-lg shadow-md">
        <table className="w-full bg-white border-collapse rounded-lg">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              {HEADERS.map((header, index) => (
                <th key={index} className="px-4 py-3 text-left font-medium">
                  {header}
                </th>
              ))}
              <th className="px-4 py-3 text-left font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {UserData.length > 0 ? (
              UserData.map((user) => (
                <tr key={user.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-3">{user.id}</td>
                  <td className="px-4 py-3">{user.name}</td>
                  <td className="px-4 py-3">{user.email}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">{user.phone}</td>
                  {/* Actions Column */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3 justify-center">
                      <button
                        onClick={() => handleDelete(user.id)}
                        className="p-2 rounded-md bg-red-100 hover:bg-red-200 transition"
                      >
                        <Trash2Icon className="text-red-600" />
                      </button>
                      <button
                        onClick={() => handleEdit(user.id)}
                        className="p-2 rounded-md bg-green-100 hover:bg-green-200 transition"
                      >
                        <PencilIcon className="text-green-600" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="text-center py-4 text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
