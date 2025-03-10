import React, { useEffect, useState } from "react";
import CustomInput from "../components/CustomInput";
import { useNavigate, useParams } from "react-router";

export default function EditMember() {
  const [memberData, setMemberData] = useState<any>({});
  const [isEditing, setIsEditing] = useState(false); // Form initially in view-only mode

  const token = localStorage.getItem("token");
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const updatedMemberData = {
      ...memberData,
      registered_date: new Date(memberData.registered_date).toISOString(), // Convert to ISO before sending
    };

    try {
      const response = await fetch(`http://localhost:3000/members/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedMemberData),
      });

      if (response.ok) {
        alert("Member updated successfully!");
        navigate("/members");
      } else {
        alert("Failed to update member.");
      }
    } catch (error) {
      console.error("Error updating member:", error);
      alert("Failed to update member.");
    }
  };

  const findMembers = async () => {
    try {
      const response = await fetch(`http://localhost:3000/members/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const parsedData = await response.json();

      // **Convert ISO date to 'YYYY-MM-DD' for input field**
      setMemberData({
        ...parsedData,
        registered_date: parsedData.registered_date
          ? new Date(parsedData.registered_date).toISOString().split("T")[0]
          : "", 
      });
    } catch (err) {
      console.log("Error fetching member:", err);
    }
  };

  useEffect(() => {
    findMembers();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setMemberData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="flex flex-col items-start gap-4">
      <h1 className="text-lg font-bold">Edit Member</h1>

      <div className="flex justify-end w-full">
        <button
          onClick={() => setIsEditing((prev) => !prev)}
          className="bg-black w-[150px] text-white py-2 rounded-md cursor-pointer"
        >
          {isEditing ? "Cancel" : "Edit"}
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 bg-white p-8 rounded-lg shadow-md w-full"
      >
        <div className="flex flex-row space-x-4">
          <div className="flex flex-col space-y-2 w-1/2">
            <CustomInput
              value={memberData.name || ""}
              label="Name"
              type="text"
              name="name"
              onChange={handleChange}
              disabled={!isEditing} // Disabled when not editing
            />
            <CustomInput
              value={memberData.phone || ""}
              label="Phone"
              type="text"
              name="phone"
              onChange={handleChange}
              disabled={!isEditing}
            />
            <CustomInput
              value={memberData.address || ""}
              label="Address"
              type="string"
              name="address"
              onChange={handleChange}
              disabled={!isEditing}
            />
            <CustomInput
              value={memberData.email || ""}
              label="Email"
              type="text"
              name="email"
              onChange={handleChange}
              disabled={!isEditing}
            />
            <CustomInput
              value={memberData.registered_date || ""}
              label="Registered Date"
              type="date"
              name="registered_date"
              onChange={handleChange}
              disabled={!isEditing}
            />
          </div>
        </div>

        {isEditing && (
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-green-600 w-[150px] text-white py-2 rounded-md cursor-pointer"
            >
              Save
            </button>
          </div>
        )}
      </form>
    </div>
  );
}
