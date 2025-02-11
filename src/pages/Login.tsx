import { useState } from "react";

export default function Form() {
  // useState is a react hook to store state values
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <form className="bg-white flex flex-col p-4">
      <div className="flex flex-col p-2">
        <label>Username</label>
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
      {/* conditionally rendering UI */}
      <p>{isSubmitted ? JSON.stringify({ userName, password }) : ""}</p>
    </form>
  );
}
