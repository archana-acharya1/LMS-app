import React, { useEffect, useState } from "react";
import CustomInput from "../components/CustomInput";
import { useNavigate, useParams } from "react-router";

export default function EditBook() {
  const [bookData, setBookData] = useState<any>({});
  const token = localStorage.getItem("token");
  const { id } = useParams();
  console.log({ id });

  const navigate = useNavigate();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const bookData = JSON.stringify(Object.fromEntries(formData.entries())); // Convert FormData to object
    const parsedData = JSON.parse(bookData);
    const bookDataReq = {
      ...parsedData,
      ISBN: parseInt(parsedData.ISBN, 10),
      available_copies: parseInt(parsedData.available_copies, 10),
      total_copies: parseInt(parsedData.total_copies),
      published_date: new Date(parsedData.published_date),
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
        alert("Book added successfully!");
        navigate("/books");
      }
    } catch (error) {
      console.error("Error adding book:", error);
      alert("Failed to add book.");
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
      setBookData(parsedData);
      console.log(parsedData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    findBook();
  }, []);

  return (
    <div className="flex flex-col items-start gap-4">
      <h1 className="text-lg font-bold">Edit Book</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 bg-white p-8 rounded-lg shadow-md w-full"
      >
        <div className="flex flex-row space-x-4">
          <div className="flex flex-col space-y-2 w-1/2">
            <CustomInput
              value={bookData.title}
              label="Title"
              type="text"
              name="title"
            />
            <CustomInput label="Author" type="text" name="author" />
            <CustomInput label="ISBN" type="number" name="ISBN" />
            <CustomInput label="Publisher" type="text" name="publisher" />
          </div>
          <div className="flex flex-col space-y-2 w-1/2">
            <CustomInput
              label="Published Date"
              type="date"
              name="published_date"
            />
            <CustomInput label="Category" type="text" name="category" />
            <CustomInput
              label="Available Copies"
              type="number"
              name="available_copies"
            />
            <CustomInput
              label="Total Copies"
              type="number"
              name="total_copies"
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-black w-[150px] text-white py-2 rounded-md cursor-pointer"
          >
            + Add Book
          </button>
        </div>
      </form>
    </div>
  );
}
