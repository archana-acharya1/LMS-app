import React, { useEffect, useState } from "react";
import CustomInput from "../components/CustomInput";
import { useNavigate, useParams } from "react-router";

export default function EditBook() {
  const [bookData, setBookData] = useState<any>({});
  const [isEditing, setIsEditing] = useState(false);

  const token = localStorage.getItem("token");
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const bookDataReq = {
      ...bookData,
      ISBN: parseInt(bookData.ISBN, 10),
      available_copies: parseInt(bookData.available_copies, 10),
      total_copies: parseInt(bookData.total_copies, 10),
      published_date: new Date(bookData.published_date),
    };

    try {
      const response = await fetch(`http://localhost:3000/books/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(bookDataReq),
      });

      if (response.status === 201) {
        alert("Book updated successfully!");
        navigate("/books");
      }
    } catch (error) {
      console.error("Error updating book:", error);
      alert("Failed to update book.");
    }
  };

  const findBook = async () => {
    try {
      const response = await fetch(`http://localhost:3000/books/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const parsedData = await response.json();
      
      setBookData({
        ...parsedData,
        published_date: parsedData.published_date
          ? new Date(parsedData.published_date).toISOString().split("T")[0] // Format date for input[type="date"]
          : "",
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    findBook();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBookData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col items-start gap-4">
      <h1 className="text-lg font-bold">Edit Book</h1>
      
      <div className="flex justify-end w-full">
        <button
          onClick={() => setIsEditing((prev) => !prev)}
          className="bg-black w-[150px] text-white py-2 rounded-md cursor-pointer"
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 bg-white p-8 rounded-lg shadow-md w-full"
      >
        <div className="flex flex-row space-x-4">
          <div className="flex flex-col space-y-2 w-1/2">
            <CustomInput
              value={bookData.title || ""}
              label="Title"
              type="text"
              name="title"
              onChange={handleChange}
              disabled={!isEditing}
            />
            <CustomInput
              value={bookData.author || ""}
              label="Author"
              type="text"
              name="author"
              onChange={handleChange}
              disabled={!isEditing}
            />
            <CustomInput
              value={bookData.ISBN || ""}
              label="ISBN"
              type="number"
              name="ISBN"
              onChange={handleChange}
              disabled={!isEditing}
            />
            <CustomInput
              value={bookData.publisher || ""}
              label="Publisher"
              type="text"
              name="publisher"
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>

          <div className="flex flex-col space-y-2 w-1/2">
            <CustomInput
              value={bookData.published_date || ""}
              label="Published Date"
              type="date"
              name="published_date"
              onChange={handleChange}
              disabled={!isEditing}
            />
            <CustomInput
              value={bookData.category || ""}
              label="Category"
              type="text"
              name="category"
              onChange={handleChange}
              disabled={!isEditing}
            />
            <CustomInput
              value={bookData.available_copies || ""}
              label="Available Copies"
              type="number"
              name="available_copies"
              onChange={handleChange}
              disabled={!isEditing}
            />
            <CustomInput
              value={bookData.total_copies || ""}
              label="Total Copies"
              type="number"
              name="total_copies"
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </div>

        {isEditing && (
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-600 w-[150px] text-white py-2 rounded-md cursor-pointer"
              onClick={() => {
                navigate("/books");
             
              }}
            >
              Save
            </button>
          </div>
        )}
      </form>
    </div>
  );
}