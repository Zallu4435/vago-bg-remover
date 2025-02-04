import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useAuth } from "@clerk/clerk-react";


export const TransactionHistory = ({ isOpen, onClose }) => {
  const [transactions, setTransactions] = useState([]);
  const { backendUrl } = useContext(AppContext);
  const { getToken } = useAuth();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      const fetchTransactions = async () => {
        try {
          const token = await getToken();

          const response = await axios.get(`${backendUrl}/api/user/user-transactions`, {
            headers: {
              token: token,
            },
          });

          setTransactions(response.data);
        } catch (error) {
          console.error("Error fetching transactions:", error);
        }
      };

      fetchTransactions();
    }
  }, [isOpen, backendUrl, getToken]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
    >
      <div className="bg-white rounded-lg p-6 w-[90%] max-w-4xl max-h-[90vh] overflow-auto shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Transaction History</h2>
          <button
            onClick={onClose}
            className="text-gray-500 text-3xl font-bold hover:text-gray-700"
          >
            ×
          </button>
        </div>

        {transactions.length === 0 ? (
          <p className="text-center text-gray-500 py-8">No transactions found</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="text-left p-4 border-b">Date</th>
                  <th className="text-left p-4 border-b">Plan ID</th>
                  <th className="text-left p-4 border-b">Credits</th>
                  <th className="text-left p-4 border-b">Amount</th>
                  <th className="text-left p-4 border-b">Status</th>
                </tr>
              </thead>
              <tbody>
                {transactions.map((transaction) => (
                  <tr key={transaction._id} className="hover:bg-gray-50">
                    <td className="p-4 border-b">
                      {new Date(transaction.transactionDate).toLocaleDateString()}
                    </td>
                    <td className="p-4 border-b">{transaction.planId}</td>
                    <td className="p-4 border-b">{transaction.credits}</td>
                    <td className="p-4 border-b">{transaction.amount} INR</td>
                    <td className="p-4 border-b">
                      <span
                        className={`px-2 py-1 rounded-full text-sm ${
                          transaction.paymentStatus === "success"
                            ? "bg-green-100 text-green-800"
                            : transaction.paymentStatus === "pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-red-100 text-red-800"
                        }`}
                      >
                        {transaction.paymentStatus}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-gray-800 text-white px-6 py-2 rounded-md hover:bg-gray-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
