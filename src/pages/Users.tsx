import { useEffect, useState } from "react";

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozLCJpYXQiOjE3Mzk4NjY0MjIsImV4cCI6MTc0MTE2MjQyMn0.LbMnbTN3YzjXr-xCthXmc6MytDRa7NchqATL-XcDNsI";

export default function Users() {
  const [userData, setUserData] = useState([]);
  const fetchData = async () => {
    //const response = await fetch(API_URL, options - headers, body, method)
    const response = await fetch("http://localhost:3000/users", {
      method: "GET", // default method, explicit declaration not required
      headers: {
        "Content-Type": "application.json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json(); // convert to json object
    setUserData(data);
  };

  useEffect(() => {
    console.log("page loaded");
    fetchData();
  }, []); // runs the code on the first load

  return (
    <div className="w-full overflow-auto">
      <h1>Users</h1>
      <h3>User Data</h3>
      <p>{JSON.stringify(userData)}</p>
    </div>
  );
}
