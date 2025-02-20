import { useEffect, useState } from "react";
import { object, string } from "yup";
import CustomInput from "../components/CustomInput";
import { data, NavLink } from "react-router";

const registerSchema = object({
  name: string()
    .trim()
    .required()
    .min(3, "Name should be atleast 3 characters"),
  email: string().trim().required().email(),
  phone: string()
    .required()
    .min(10)
    .matches(/^[0-9]*$/, "Phone should not contain string!"),
  password: string().required("Password is a required field!"),
});

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJpYXQiOjE3Mzk4NjY0MjIsImV4cCI6MTc0MTE2MjQyMn0.LbMnbTN3YzjXr-xCthXmc6MytDRa7NchqATL-XcDNsI";

export default function Register() {
  // useState is a react hook to store state values
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // input values extraction from the form
    const formData = new FormData(e.target as HTMLFormElement);
    const formValues = Object.fromEntries(formData);

    // Validation using Yup
    try {
      await registerSchema.validate(formValues, { abortEarly: false });

      // TODO: API call to register user
    } catch (error: any) {
      setError(error.errors.join("\n"));
      return;
    }
    console.log(formValues);
  };

  return (
    <div className="flex flex-col w-90 bg-white p-4 rounded shadow-md">
      <h1 className="text-lg font-bold text-center">Register</h1>
      <form className="flex flex-col p-4 w-full gap-2" onSubmit={handleSubmit}>
        <CustomInput label="Name" />
        <CustomInput label="Email" type="email" />
        <CustomInput label="Phone" type="tel" />
        <CustomInput label="Password" type="password" />
        <p className="text-red-400">{error}</p>

        <button type="submit" className="bg-black text-white mt-4 rounded py-1">
          Submit
        </button>

        <p className="w-full mt-4 text-center">
          Already have an account?
          <span className="ml-2 text-blue-500 hover:underline">
            <NavLink to="/login">Login</NavLink>
          </span>
        </p>
      </form>
    </div>
  );
}
