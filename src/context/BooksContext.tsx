import { createContext, useEffect, useState } from "react";
import { Book } from "../pages/Books";

interface BooksContextType {
  bookData: Book[];
  setBookData: (bookData: Book[]) => void;
}

const BooksContext = createContext<BooksContextType>({
  bookData: [],
  setBookData: () => {},
});

const BooksProvider = ({ children }: { children: React.ReactNode }) => {
  const [bookData, setBookData] = useState<Book[]>([]);

  const fetchBooks = async () => {
    const token = localStorage.getItem("token"); // Move inside function
    try {
      const response = await fetch("http://localhost:3000/books", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch books: ${response.statusText}`);
      }

      const data = await response.json();

      if (!Array.isArray(data)) {
        throw new Error("Invalid data format received.");
      }

      // Sorting books by id in ascending order
      const sortedData = data.sort((a: Book, b: Book) => a.id - b.id);
      setBookData(sortedData);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <BooksContext.Provider value={{ bookData, setBookData }}>
      {children}
    </BooksContext.Provider>
  );
};

export { BooksProvider, BooksContext };
