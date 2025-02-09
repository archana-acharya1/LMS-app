export default function Greetings({ name, greetings= "Good Morning" }: any) {
  return (
    <h1 className="text-lg text-red-600 font-bold text-center">Hi, {name}! {greetings}!!</h1>
  )
}