export default function CustomDialog({ title, description, isOpen }: any) {
  if (!isOpen) return null;
  return (
    <div className=" p-4 bg-white rounded flex absolute top-1/2mleft-1/2 transform -translate-x ">
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <button>Cancel</button>
      <button>Delete</button>
    </div>
  );
}
