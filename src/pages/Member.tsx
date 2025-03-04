import { useEffect, useState } from "react";
import "./Member.css";

export default function Members() {
  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJpYXQiOjE3NDAzMDA3ODAsImV4cCI6MTc0MTU5Njc4MH0.SUE-iAvRFZFNshSGGP7_JqwjxOQx2najRzaXBHvQiIE";

  interface Member {
    id: number;
    name: string;
    phone: string;
    address: string;
  }

  const [member, setMember] = useState<Member[]>([]);
  const fetchData = async () => {
    const response = await fetch("http://localhost:3000/members", {
      method: "Get",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    setMember(data);
  };

  useEffect(() => {
    fetchData();
  }, []);
  const Header = ["ID", "Name", "Phone", "Address"];
  return (
    <>
      <table className="table-auto">
        <thead>
          <tr>
            {Header.map((header) => (
              <th>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {member.length > 0 &&
            member.map((member) => (
              <tr key={member.id}>
                <td>{member.id}</td>
                <td>{member.name}</td>
                <td>{member.phone}</td>
                <td>{member.address}</td>
              </tr>
            ))}
          {member.length === 0 && (
            <tr>
              <td className="!text-center" colSpan={4}>
                No Data
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
}
