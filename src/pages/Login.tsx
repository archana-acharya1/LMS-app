import { useState } from "react";
import CustomInput from "../components/CustomInput";
import { NavLink, useNavigate } from "react-router";

interface FormData {
  username: string;
  password: string;
}

export default function Login() {
  // useState is a react hook to store state values
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const formValues = Object.fromEntries(formData);
    console.log(formValues);
    loginUser(formValues as unknown as FormData);

    // TODO: API call to login user
  };

  const loginUser = async (formData: any) => {
    console.log(formData);
    try {
      const response = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json(); //write in register page also
      if (!response.ok) {
        throw new Error(data.message);
      }
      localStorage.setItem("token", data.token);
      console.log(data);
      navigate("/");
    } catch (error) {
      console.log("error", error);
      setError("Invalid username or password");
    }
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
