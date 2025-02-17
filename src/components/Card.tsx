export default function Card() {
  return (
    <div className="card bg-white rounded-md w-fit p-4 flex flex-col gap-2">
      <img className="rounded-lg" src="https://placehold.co/100" />
      <p className="title text-lg text-black p-0">Heading</p>
      <p className="description text-gray-400 text-sm">This is a short description</p>
      <button className="button bg-blue-500 text-white w-full py-1 rounded-lg">Action</button>
    </div>
  )
}