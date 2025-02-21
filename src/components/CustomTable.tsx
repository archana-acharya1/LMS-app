import UserData from "./users.json";
import "./CustomTable.css";

export default function CustomTable() {
  const HEADERS = ["ID", "Name", "Email", "Status", "Phone"];
  return (
    <table className="w-fit h-fit">
      <thead>
        {HEADERS.map((header) => (
          <th>{header}</th>
        ))}
      </thead>
      <tbody>
        {UserData.map((user) => (
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.status}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}