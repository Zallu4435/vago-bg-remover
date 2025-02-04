import { useState, useEffect, useContext } from "react";
import { AppContext } from "../context/AppContext";
import { TransactionHistory } from "../modals/TransactionHistory";
import { assets } from "../assets/assets";
import { plans } from "../assets/assets";
import axios from "axios";

const BuyCredit = () => {
  const [loading, setLoading] = useState({}); 
  const [showHistory, setShowHistory] = useState(false);

  const { backendUrl, payment } = useContext(AppContext);

  useEffect(() => {
    axios
      .get(`${backendUrl}/api/user/credits`)
      .catch((error) => {
        console.error("Error fetching user credits:", error);
      });
  }, [backendUrl]);

  const handlePayment = async (plan) => {
    setLoading(prev => ({ ...prev, [plan.id]: true }));
    
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY,
      amount: plan.price * 100,
      currency: "INR",
      name: "Your Company Name",
      description: `Purchase ${plan.credits} credits`,
      image: assets?.logo_icon,
      handler: async (response) => {
        try {
          await processPayment(plan);
        } catch (error) {
          console.error("Payment processing error:", error);
        } finally {
          setLoading(prev => ({ ...prev, [plan.id]: false }));
        }
      },
      modal: {
        ondismiss: () => {
          setLoading(prev => ({ ...prev, [plan.id]: false }));
        }
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#000000",
      },
    };

    const razorpay = new window.Razorpay(options);
    razorpay.open();
  };

  const processPayment = async (plan) => {
    try {
      await payment(plan);
      await axios.get(`${backendUrl}/api/user/credits`);
    } catch (err) {
      console.error("Error processing payment:", err);
      throw err;
    }
  };

  return (
    <div className="min-h-[80vh] text-center pt-14 mb-10">
      <h1 className="text-center text-xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-500 to-gray-400 bg-clip-text text-transparent mb-14">
        Choose the plan that's right for you
      </h1>

      <div className="flex flex-wrap justify-center gap-6 text-left">
        {plans?.map((item, index) => (
          <div
            key={index}
            className="bg-white drop-shadow-sm border rounded-lg p-12 px-8 text-gray-700 hover:scale-105 transition-all duration-500"
          >
            <img width={40} src={assets?.logo_icon} alt="" />
            <p className="mt-3 font-semibold">{item.id}</p>
            <p className="text-sm">{item.desc}</p>
            <p className="mt-6">
              <span className="text-3xl font-medium">{item.price}</span>/{" "}
              {item.credits} credits
            </p>
            <button
              onClick={() => handlePayment(item)}
              className="w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52 hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={loading[item.id]}
            >
              {loading[item.id] ? "Processing..." : "Purchase"}
            </button>
          </div>
        ))}
      </div>

      <button
        onClick={() => setShowHistory(true)}
        className="mt-10 bg-gray-800 text-white md:mt-16 py-2 px-6 rounded-md hover:bg-gray-700"
      >
        View Transaction History
      </button>

      <TransactionHistory
        isOpen={showHistory}
        onClose={() => setShowHistory(false)}
      />
    </div>
  );
};

export default BuyCredit;