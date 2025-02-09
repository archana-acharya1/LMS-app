import Greetings from "./components/Greetings";
// named export
// export const App = () => {
//   return(
//     <div>
//       <h1>Hello World</h1>
//     </div>
//   )
// }

// export {App} // named export

// default export
export default function App() {
  return(
    <>
      <Greetings name="John" greetings="Good Evening" />
      <Greetings name="Ritchie" />
    </>
  )
}

// JSX can have only one parent element
