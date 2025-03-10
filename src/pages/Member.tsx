import { PencilIcon, Plus, Trash2Icon } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { MembersContext } from "../context/MemberContext";

export interface Member {
  id: number;
  name: string;
  phone: string;
  email: string;
  address: string;
  registered_date: string;
}

export default function Members() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const { memberData, setMemberData } = useContext(MembersContext);

  const handleDelete = async (id: number) => {
    console.log("Delete button clicked", id);
    try {
      const response = await fetch(`http://localhost:3000/members/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete member");
      }

      console.log("Member deleted successfully");
      const filteredMembers = memberData.filter((member) => member.id !== id);
      setMemberData(filteredMembers)
    } catch (error) {
      console.error("Error while deleting the member:", error);
    }
  };

  const handleEdit = (id: number) => {
    console.log("Edit button clicked", id);
    navigate(`/members/edit/${id}`);
  };

  return (
    <div className="w-full h-full overflow-hidden">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-3xl">Members</h1>
        <button
          onClick={() => navigate("/members/add")}
          className="bg-black text-white px-4 py-2 rounded flex items-center gap-2"
        >
          <Plus size={18} />
          Add Member
        </button>
      </div>

      <div className="w-full overflow-auto">
        <table className="table-auto w-full bg-white border-collapse border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="border p-2">ID</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Phone</th>
              <th className="border p-2">Email</th>
              <th className="border p-2">Address</th>
              <th className="border p-2">Registered Date</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {memberData.length > 0 ? (
              memberData.map((member) => (
                <tr key={member.id} className="text-center">
                  <td className="border p-2">{member.id}</td>
                  <td className="border p-2">{member.name}</td>
                  <td className="border p-2">{member.phone}</td>
                  <td className="border p-2">{member.email}</td>
                  <td className="border p-2">{member.address}</td>
                  <td className="border p-2">{member.registered_date}</td>
                  <td className="border p-2">
                    <div className="flex gap-4 justify-center">
                      <button onClick={() => handleDelete(member.id)}>
                        <Trash2Icon className="cursor-pointer text-red-500" />
                      </button>
                      <button onClick={() => handleEdit(member.id)}>
                        <PencilIcon className="cursor-pointer text-green-500" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center p-4">
                  No members found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
