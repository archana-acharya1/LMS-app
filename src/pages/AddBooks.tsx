import CustomInput from "../components/CustomInput";

export default function AddBooks() {

  // TODO: API Integration
  
  return (
    <div className="flex flex-col items-start gap-4">
      <h1 className="text-lg font-bold">Add Books</h1>
      <form className="flex flex-col space-y-4 bg-white p-8 rounded-lg shadow-md w-full">
        <div className="flex flex-row space-x-4">
          <div className="flex flex-col space-y-2 w-1/2">
            <CustomInput label="Title" type="text" />
            <CustomInput label="Author" type="text" />
            <CustomInput label="ISBN" type="text" />
            <CustomInput label="Publisher" type="text" />
          </div>
          <div className="flex flex-col space-y-2 w-1/2">
            <CustomInput label="Published Date" type="date" />
            <CustomInput label="Category" type="string" />
            <CustomInput label="Available Copies" type="text" />
            <CustomInput label="Total Copies" type="text" />
          </div>
        </div>
        <div className="flex justify-end">
          <button className="bg-black w-[150px] text-white py-2 rounded-md">
            + Add Book
          </button>
        </div>
      </form>
    </div>
  );
}

// FOR SPACING
// margin
// padding
// gap
// space-x
// space-y