import React, { useContext, useState, useMemo } from "react";
import CustomInput from "../../components/CustomInput";
import { useNavigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { BooksContext } from "../../context/BooksContext";
import { MembersContext } from "../../context/MemberContext";

export default function AddTransaction() {
  const [transactionType, setTransactionType] = useState("Borrow");
  const [bookId, setBookId] = useState<number | null>(null);
  const [memberId, setMemberId] = useState<number | null>(null);
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const { bookData } = useContext(BooksContext);
  const { memberData } = useContext(MembersContext);
  console.log({ token });

  const memberOptions = useMemo(
    () =>
      memberData.map((member) => ({
        label: member.name,
        value: member.id,
      })),
    [memberData]
  );

  const bookOptions = useMemo(
    () =>
      bookData.map((book) => ({
        label: book.title,
        value: book.id,
      })),
    [bookData]
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const transactionData = Object.fromEntries(formData.entries());

    const deadline = transactionData.deadline as string;

    if (!deadline || !memberId || !bookId) {
      alert("Please fill all fields correctly.");
      return;
    }

    const transactionDataReq = {
      deadline: deadline,
      member_id: memberId,
      book_id: bookId,
      transaction_type: transactionType,
    };

    try {
      const response = await fetch("http://localhost:3000/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(transactionDataReq),
      });

      const result = await response.json();

      if (response.status === 201) {
        alert("Transaction added successfully!");
        navigate("/transactions");
      } else {
        console.error("Failed to add transaction:", result);
        alert(result.message || "Failed to add transaction.");
      }
    } catch (error) {
      console.error("Error adding transaction:", error);
      alert("Failed to add transaction.");
    }
  };
  console.log(memberOptions);

  return (
    <div className="flex flex-col items-start gap-4 w-full">
      <h1 className="text-lg font-bold">Add Transaction</h1>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 bg-white p-8 rounded-lg shadow-md w-full"
      >
        <div className="flex flex-col gap-4 w-full">
          <div className="flex gap-4 w-full">
            <div className="flex flex-col w-full">
              <label htmlFor="book_id">Book</label>
              <select
                name="book_id"
                className="w-full border h-8 rounded border-gray-300 px-2"
                defaultValue={""}
                onChange={(e) => setBookId(parseInt(e.target.value, 10))}
                required
              >
                <option value="">Select Book</option>
                {bookOptions.map((book) => (
                  <option key={book.value} value={book.value}>
                    {book.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col w-full">
              <label htmlFor="member_id">Member</label>
              <select
                name="member_id"
                className="w-full border h-8 rounded border-gray-300 px-2"
                defaultValue={""}
                onChange={(e) => setMemberId(parseInt(e.target.value, 10))}
                required
              >
                <option value="">Select Member</option>
                {memberOptions.map((member) => (
                  <option key={member.value} value={member.value}>
                    {member.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex gap-4 w-full">
            <div className="flex flex-col w-full">
              <label htmlFor="transaction_type">Transaction Type</label>
              <select
                name="transaction_type"
                className="w-full border h-8 rounded border-gray-300 px-2"
                defaultValue={"Borrow"}
                onChange={(e) => setTransactionType(e.target.value)}
              >
                <option value="Borrow">Borrow</option>
                <option value="Return">Return</option>
              </select>
            </div>

            <CustomInput
              label="Deadline"
              type="date"
              name="deadline"
              required
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-black w-[150px] text-white py-2 rounded-md cursor-pointer"
          >
            Add Transaction
          </button>
        </div>
      </form>
    </div>
  );
}
