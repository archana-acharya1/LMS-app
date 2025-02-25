// create a component to display the list of books in a table
// * API call to fetch Books data
// * Display the list of books in a table

import CustomTable from "../components/CustomTable";

// const BOOKS_HEADER=["ID", "Title", "Author", "Publisher", "Published Date", "Category", "ISBN", "Available Copies", "Total Copies"]
export default function Books() {
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-8">Books</h1>
      <CustomTable />
    </div>
  );
}
