import Navbar from "./components/Navbar";
// import Content from "./components/Content";
// import Card from "./components/Card";
import Form from "./pages/Login";

// default export
export default function App() {
  return(
    <div className="w-screen h-screen bg-gray-100">
     <Navbar />
     <div className="p-4 flex justify-center">
      {/* <Card /> */}
      <Form />
     </div>
     {/* <Content /> */}
    </div>
  )
}

// JSX can have only one parent element
