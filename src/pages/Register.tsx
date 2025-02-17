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
      const validValues = await registerSchema.validate(formData);
      console.log(validValues);
      setError(null);
      setIsSubmitted(true);
      // API call
    } catch (error: any) {
      // console.log(JSON.stringify(error));
      setError(error?.errors[0]);
    }
  };

  return (
    <div className="flex flex-col">
      <form className="bg-white flex flex-col p-4">
        <CustomInput
          label="Name"
          setValue={(value: string) =>
            setFormData({ ...formData, name: value })
          }
        />
        <CustomInput
          label="Email"
          type="email"
          setValue={(value: string) =>
            setFormData({ ...formData, email: value })
          }
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

        <button type="submit" onClick={handleSubmit}>
          Submit
        </button>

        <p>
          Already have an account?
          <span>
            <NavLink to="/login">Login </NavLink>
          </span>
        </p>
      </form>
      {/* conditionally rendering UI */}

      <p>{isSubmitted ? JSON.stringify(formData) : ""}</p>
    </div>
  );
}
