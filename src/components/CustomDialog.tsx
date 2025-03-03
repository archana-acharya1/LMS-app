export default function CustomDialog({
  title,
  description,
  isOpen,
  setIsOpen,
  handleDelete,
}: any) {
  if (!isOpen) return null;
  return (
    <div className="h-[250px] w-[450px] shadow-md p-8 bg-white rounded flex absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-between flex-col">
      <div className="flex flex-col gap-4">
        <h1 className="text-xl">{title}</h1>
        <p className="text-gray-400 text-lg">{description}</p>
      </div>
      <div className="flex gap-4 justify-end items-center">
        <button
          className="border text-black px-4 py-2 rounded"
          onClick={() => setIsOpen(false)}
        >
          Cancel
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
