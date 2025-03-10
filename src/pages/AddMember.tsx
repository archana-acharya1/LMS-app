import React, { useState } from "react";
import CustomInput from "../components/CustomInput";
import { useNavigate } from "react-router";
import { PlusIcon } from "lucide-react";

export default function AddMembers() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  // State to store validation errors
  const [errors, setErrors] = useState<{ email?: string; registered_date?: string }>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const memberData = Object.fromEntries(formData.entries());
  
    let newErrors: { email?: string; registered_date?: string } = {};
  
    // **Validate Email**
    if (!memberData.email || typeof memberData.email !== "string" || memberData.email.trim() === "") {
      newErrors.email = "Email must be a valid string and cannot be empty.";
    }
  
    // **Validate Registered Date**
    if (!memberData.registered_date) {
      newErrors.registered_date = "Registered date is required.";
    } else {
      const date = new Date(memberData.registered_date as string);
      if (isNaN(date.getTime())) {
        newErrors.registered_date = "Registered date must be a valid Date.";
      } else {
        memberData.registered_date = date.toISOString(); // Convert to ISO format for API
      }
    }
  
    // **Stop submission if there are errors**
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
  
    try {
      const response = await fetch("http://localhost:3000/members", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(memberData),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Failed to add member.");
      }
  
      alert("Member added successfully!");
      navigate("/members");
    } catch (error) {
      console.error("Error adding member:", error);
      alert(error instanceof Error ? error.message : "Something went wrong!");
    }
  };
  

  return (
    <div className="flex flex-col items-start gap-4">
      <h1 className="text-lg font-bold">Add Member</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 bg-white p-8 rounded-lg shadow-md w-full"
      >
        <div className="flex flex-row space-x-4">
          <div className="flex flex-col space-y-2 w-1/2">
            <CustomInput label="Name" type="text" name="name" />
            <CustomInput label="Phone" type="text" name="phone" />
            <CustomInput label="Email" type="email" name="email" />
            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            <CustomInput label="Address" type="text" name="address" />
            <CustomInput label="Registered Date" type="date" name="registered_date" />
            {errors.registered_date && (
              <p className="text-red-500 text-sm">{errors.registered_date}</p>
            )}
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-black w-[150px] text-white px-2 py-2 rounded-md flex items-center gap-2"
          >
            <PlusIcon size={16} />
            Add Member
          </button>
        </div>
      </form>
    </div>
  );
}
