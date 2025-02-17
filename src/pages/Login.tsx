import { useState } from "react";
import { NavLink } from "react-router";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitted(true);
  };
  return (
    <div className="flex flex-col w-90 bg-white p-4 rounded shadow-md">
      <h1 className="text-lg font-bold text-center">Login</h1>
      <form className="bg-white flex flex-col p-4">
        <div className="flex flex-col p-2">
          <label>UserName</label>
          <input
            type="text"
            onChange={(event) => {
              setUserName(event.target.value);
            }}
            className="border"
          />
        </div>
        <div className="flex flex-col p-2">
          <label>Password</label>
          <input
            type="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
            className="border"
          />
        </div>

        <button onClick={handleSubmit}>Submit</button>
        <p>
          Don't have an Account?
          <span className="ml-2 text-blue-500 hover:underline">
            <NavLink to="/register"> Register</NavLink>
          </span>
        </p>
        <p>{isSubmitted ? JSON.stringify({ userName, password }) : ""}</p>
      </form>
    </div>
  );
}
