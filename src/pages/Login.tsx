import { useState } from "react";
import CustomInput from "../components/CustomInput";
import { NavLink } from "react-router";

export default function Login() {
  // useState is a react hook to store state values
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formValues = Object.fromEntries(formData);
    console.log(formValues);

    // TODO: API call to login user
  };

  return (
    <div className="flex flex-col w-90 bg-white p-4 rounded shadow-md">
      <h1 className="text-lg font-bold text-center">Login</h1>
      <form className="flex flex-col p-4 w-full gap-2" onSubmit={handleSubmit}>
        <CustomInput label="Username" />
        <CustomInput label="Password" type="password" />
        <p className="text-red-400">{error}</p>
        <button type="submit" className="bg-black text-white mt-4 rounded py-1">
          Submit
        </button>
        <p className="w-full mt-4 text-center">
          Don't have an account?
          <span className="ml-2 text-blue-500 hover:underline">
            <NavLink to="/register">Register</NavLink>
          </span>
        </p>
      </form>
    </div>
  );
}
