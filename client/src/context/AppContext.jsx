import { useAuth, useClerk, useUser } from "@clerk/clerk-react";
import { createContext, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

const AppContextProvider = (props) => {
  const [credit, setCredit] = useState(false);
  const [image, setImage] = useState(false);
  const [resultImage, setResultImage] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const navigate = useNavigate();

  const { getToken } = useAuth();
  const { isSignedIn } = useUser();
  const { openSignIn } = useClerk();

  const loadCreditsData = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get(`${backendUrl}/api/user/credits`, {
        headers: { token },
      });
      if (data.success) {
        setCredit(data.credits);
      }
    } catch (err) {
      console.log(err);
      toast.error(err?.message);
    }
  };

  const payment = async (plan) => {
    try {
      const token = await getToken();
      const { data } = await axios.post(
        `${backendUrl}/api/user/update-credits`,
        {
          credits: plan.credits,
          planId: plan.id,
          amount: plan.price,
        },
        {
          headers: {
            token,
          },
        }
      );

      setCredit(data.credits);
      toast.success("Payment successful! Your credits have been updated.");
    } catch (err) {
      console.log(err);
      toast.error("Error during payment processing.");
    }
  };

  const removeBg = async (image) => {
    try {
      if (!isSignedIn) {
        return openSignIn();
      }
      setImage(image);
      setResultImage(false);
      navigate("/result");

      const token = await getToken();
      const formData = new FormData();
      image && formData.append("image", image);

      const { data } = await axios.post(
        `${backendUrl}/api/image/remove-bg`,
        formData,
        {
          headers: {
            token: token,
          },
        }
      );

      if (data.success) {
        setResultImage(data.resultImage);
        if (data.creditBalance) {
          setCredit(data.creditBalance);
        }
        navigate("/result");
      } else {
        toast.error(data.message || "Error removing background");
        if (data.creditBalance === 0) {
          navigate("/buy-credit");
        }
      }
    } catch (err) {
      console.log(err);
      toast.error(err?.message || "An error occurred");
    }
  };

  const value = {
    credit,
    setCredit,
    loadCreditsData,
    backendUrl,
    image,
    setImage,
    removeBg,
    resultImage,
    setResultImage,
    payment,
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
