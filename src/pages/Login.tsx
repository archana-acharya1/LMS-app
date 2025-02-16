import { useState } from "react";
import CustomInput from "../components/CustomInput";

export default function Login() {
  // useState is a react hook to store state values
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <form className="bg-white flex flex-col p-4 w-90">
      <h1 className="text-lg">Login</h1>
      <CustomInput
        label="Username"
        setValue={(value: string) => setUserName(value)}
      />
      <CustomInput
        label="Password"
        type="password"
        setValue={(value: string) => setPassword(value)}
      />
      <button onClick={handleSubmit}>Submit</button>
      {/* conditionally rendering UI */}
      <p>{isSubmitted ? JSON.stringify({ userName, password }) : ""}</p>
    </form>
  );
}
