// create a component to display the list of books in a table
// * API call to fetch Books data
// * Display the list of books in a table

import { useNavigate } from "react-router";
import CustomDialog from "../../components/CustomDialog";
import UserData from "../../components/users.json";
import { PencilIcon, Trash2Icon } from "lucide-react";
import "../../components/CustomTable.css";
import { useState } from "react";

// const BOOKS_HEADER=["ID", "Title", "Author", "Publisher", "Published Date", "Category", "ISBN", "Available Copies", "Total Copies"]
export default function Books() {
  const HEADERS = ["ID", "Name", "Email", "Status", "Phone"];
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [currentId, setCurrentId] = useState<number | null>(null);

  const handleDelete = async () => {
    console.log("Delete button clicked", currentId);
    try {
      const response = await fetch(`http://localhost:3000/books/${currentId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        setIsOpen(false);
        setCurrentId(null);
        console.log("Book deleted successfully", response);
        window.location.reload();
      } else {
        throw new Error("Error while deleting the book");
      }
    } catch (error) {
      console.error("Error while deleting the book", error);
      setIsOpen(false);
      setCurrentId(null);
    }
  };

  const handleEdit = (id: number) => {
    console.log("Edit button clicked", id);
    navigate(`/books/edit/${id}`);
  };
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-8">Books</h1>
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
                      onClick={() => {
                        setIsOpen(true);
                        setCurrentId(user.id);
                      }}
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
      <CustomDialog
        title="Delete Book"
        description="Are you sure you want to delete this book?"
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleDelete={handleDelete}
      />
    </div>
  );
}
