// import { useEffect } from "react";

// const Profile = () => {
//   const { user } = useUser();

//   const fetchData = async () => {
//     const response = await fetch("http://localhost:3000/books",{
//         method: "GET",
//         headers: {
//             "content-type": "application/json",
//             Authorization: `Bearer ${token}`,
//         },
//     })
//   }

//   useEffect(() => {
//     const storedName = localStorage.getItem("userName");
//     if (storedName) {
//       console.log(`User logged in: ${storedName}`);
//     }
//   }, [user]);


//   return (
//     <div>
//       <h1>Profile</h1>
//       <p>Welcome, {user?.name || "Guest"}</p>
//     </div>
//   );
// };
