import { PencilIcon, Trash2Icon } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJpYXQiOjE3Mzk4NjY0MjIsImV4cCI6MTc0MTE2MjQyMn0.LbMnbTN3YzjXr-xCthXmc6MytDRa7NchqATL-XcDNsI";

interface Book {
  id: number;
  title: string;
  author: string;
  publisher: string;
  published_date: Date;
  ISBN: number;
  category: string;
  available_copies: number;
  total_copies: number;
}

export default function Books() {
  const [bookData, setBookData] = useState<Book[]>([]);
  const navigate = useNavigate();
  const fetchData = async () => {
    //const response = await fetch(API_URL, options - headers, body, method)
    const response = await fetch("http://localhost:3000/books", {
      method: "GET", // default method, explicit declaration not required
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json(); // convert to json object
    setBookData(data);
  };

  useEffect(() => {
    console.log("page loaded");
    fetchData();
  }, []); // runs the code on the first load

  const Header = [
    "ID",
    "Title",
    "Author",
    "Publisher",
    "Published_date",
    "ISBN",
    "Category",
    "Available_copies",
    "Total-copies",
  ];

  const token = localStorage.getItem("token");

  const handleDelete = (id: number) => {
    console.log("Delete button clicked", id);
    //TODO: API call to delete the books - method:DELETE
    try {
      const response = fetch(`http://localhost:3000/books/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Book deleted successfully", response);
    } catch (error) {
      console.error("Error while deleting the book", error);
    }
  };

  const handleEdit = (id: number) => {
    console.log("Edit button clicked", id);
    navigate(`/books/edit/${id}`);
    //TODO: API call to EDIT the books - method:PATCH
  };
  return (
    <div className="w-full h-full overflow-hidden">
      <h1 className="text-3xl ">Books</h1>

      <button
        onClick={() => navigate("/books/add")}
        className="bg-black text-white mt-4 rounded py-1 cursor-pointer"
      >
        Add Book
      </button>
      <div className="w-full overflow-auto">
      <table className="table-auto h-fit w-full bg-white">
        <thead>
          <tr>
            {Header.map((header) => (
              <th>{header}</th>
            ))}
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {bookData.length > 0 &&
            bookData.map((book) => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.publisher}</td>
                <td>{new Date(book.published_date).toLocaleDateString()}</td>
                <td>{book.ISBN}</td>
                <td>{book.category}</td>
                <td>{book.available_copies}</td>
                <td>{book.total_copies}</td>
                <td>
                  <div className="flex gap-4 text-sm items-center justify-center">
                    <button>
                      <Trash2Icon
                        className="cursor-pointer"
                        onClick={() => handleDelete(book.id)}
                        color="red"
                      />
                    </button>
                    <button>
                      <PencilIcon
                        onClick={() => handleEdit(book.id)}
                        color="green"
                      />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}
