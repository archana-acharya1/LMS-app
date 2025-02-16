import { useState } from "react";
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

export default function Register() {
  // useState is a react hook to store state values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log({ formData });
    try {
      const validValues = await registerSchema.validate(formData, {
        abortEarly: false,
      });
      console.log(validValues);
      setError(null);
      setIsSubmitted(true);
      // API call
    } catch (error: any) {
      console.log(JSON.stringify(error));
      setError(error.errors[0]);
    }
  };

  return (
    <div className="flex flex-col w-90">
      <form className="bg-white flex flex-col p-4 w-full gap-2">
        <h1 className="text-lg font-bold text-center">Register</h1>
        <CustomInput
          label="Name"
          setValue={(value: string) =>
            setFormData({ ...formData, name: value })
          }
          // error={errorObject.name}
        />
        <CustomInput
          label="Email"
          type="email"
          setValue={(value: string) =>
            setFormData({ ...formData, email: value })
          }
          // error={errorObject.email}
        />
        <CustomInput
          label="Phone"
          type="tel"
          setValue={(value: string) =>
            setFormData({ ...formData, phone: value })
          }
        />
        <CustomInput
          label="Password"
          type="password"
          setValue={(value: string) =>
            setFormData({ ...formData, password: value })
          }
        />
        {error}

        <button
          type="submit"
          className="bg-black text-white mt-4 rounded py-1"
          onClick={handleSubmit}
        >
          Submit
        </button>

        <p className="w-full mt-4 text-center">
          Already have an account?
          <span className="ml-2 text-blue-500 hover:underline">
            <NavLink to="/login">Login</NavLink>
          </span>
        </p>
      </form>
      {/* conditionally rendering UI */}
      <p>{isSubmitted ? JSON.stringify(formData) : ""}</p>
    </div>
  );
}
