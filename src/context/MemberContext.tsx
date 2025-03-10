import { createContext, useEffect, useState } from "react";
import { Member } from "../pages/Member";

interface MembersContextType {
  memberData: Member[];
  setMemberData: (memberData: Member[]) => void; // Fixed name
}

const MembersContext = createContext<MembersContextType>({
  memberData: [],
  setMemberData: () => {},
});

const MembersProvider = ({ children }: any) => {
  const [memberData, setMemberData] = useState<Member[]>([]);
  const token = localStorage.getItem("token");

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:3000/members", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch members");
      }

      const data = await response.json();
      setMemberData(data);
    } catch (error) {
      console.error("Error fetching members:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    console.log("Updated memberData:", memberData); // Debugging
  }, [memberData]); // Log when memberData updates

  return (
    <MembersContext.Provider value={{ memberData, setMemberData }}>
      {children}
    </MembersContext.Provider>
  );
};

export { MembersProvider, MembersContext };
