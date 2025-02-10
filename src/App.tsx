import Navbar from "./components/Navbar";
import Content from "./components/Content";

// default export
export default function App() {
  return(
    <div className="w-screen h-screen">
     <Navbar />
     <Content />
    </div>
  )
}

// JSX can have only one parent element
