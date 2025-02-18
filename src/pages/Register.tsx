import { useEffect, useState } from "react";
import { object, string } from "yup";
import CustomInput from "../components/CustomInput";
import { NavLink } from "react-router";

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

const token = ""

// Event triggers
// - user interactions
//  - onClick
//  - onChange
//  - onSubmit
// - automatic
//  - useEffect

export default function Register() {
  // useState is a react hook to store state values
  const [error, setError] = useState<string | null>(null);
  const [triggerUseEffect, setTriggerUseEffect] = useState<boolean>(false);

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

  // always wrap API calls in try-catch block
  const fetchData = async () => {
    try {
    const response = await fetch('http://localhost:3000/users', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
    const data = await response.json();
    console.log(data);
    } catch (error) {
      console.log("error", error);
    }
  }

  const fetchDataa = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await response.json();
    console.log("dependency", data);
  }

  useEffect(() => {
    fetchData();
    console.log("abc")
  }, []) // runs on page load // used for API calls

  useEffect(() => {
    fetchDataa();
    console.log("dependency");
  }, [triggerUseEffect]) // runs on page load

  // Request method
  // - GET - default method
  // - POST - create (has request body)
  // - PATCH - update (has request body)
  // - DELETE

  return (
    <div className="flex flex-col w-90 bg-white p-4 rounded shadow-md">
      <h1 className="text-lg font-bold text-center">Register</h1>
      <form
        className="flex flex-col p-4 w-full gap-2"
        onSubmit={handleSubmit}
      >
        <CustomInput label="Name" />
        <CustomInput label="Email" type="email" />
        <CustomInput label="Phone" type="tel" />
        <CustomInput label="Password" type="password" />
        <p className="text-red-400">{error}</p>

        <button type="submit" className="bg-black text-white mt-4 rounded py-1">
          Submit
        </button>

        <button type="button" onClick={() => setTriggerUseEffect(!triggerUseEffect)} className="bg-black text-white mt-4 rounded py-1">
          Trigger API call
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
