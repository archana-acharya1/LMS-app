import UserData from "./users.json";
import "./CustomTable.css";

export default function CustomTable() {
  const HEADERS = ["ID", "Name", "Email", "Status", "Phone"];
  return (
    <table
      border={1}
      cellPadding={8}
      className="w-full h-fit overflow-auto table-auto"
    >
      <thead>
        <tr>
          {HEADERS.map((header) => (
            <th key={header}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {UserData.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.status}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
