import UserData from "./users.json";
import "./CustomTable.css";
import { PencilIcon, Trash2Icon } from "lucide-react";
import { useNavigate } from "react-router";

export default function CustomTable() {
  const HEADERS = ["ID", "Name", "Email", "Status", "Phone"];
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  const handleDelete = (id: number) => {
    console.log("Delete button clicked", id);
    try {
      const response = fetch(`http://localhost:3000/books/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        }
      });
      console.log("Book deleted successfully", response);
    } catch (error) {
      console.error("Error while deleting the book", error);
    }
  };

  const handleEdit = (id: number) => {
    console.log("Edit button clicked", id);
    navigate(`/books/edit/${id}`);
  };

  return (
    <table
      border={1}
      cellPadding={8}
      className="w-full h-fit overflow-auto table-auto"
    >
      <thead>
        <tr>
          {HEADERS.map((header) => (
            <th key={header}>{header}</th>
          ))}
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {UserData.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.status}</td>
            <td>{user.phone}</td>
            <td>
              <div className="flex gap-4 text-sm items-center justify-center">
                <button>
                  <Trash2Icon
                    className="cursor-pointer"
                    onClick={() => handleDelete(user.id)}
                    color="red"
                  />
                </button>
                <button>
                  <PencilIcon
                    onClick={() => handleEdit(user.id)}
                    color="green"
                  />
                </button>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
