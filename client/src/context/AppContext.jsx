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

      // Call backend to process image with Photoroom API
      const { data } = await axios.post(
        `${backendUrl}/api/image/remove-bg`,
        formData,
        {
          headers: {
            token: token, // Include the token for authentication
            // Do not manually set Content-Type header for FormData in the browser
          },
        }
      );

      if (data.success) {
        setResultImage(data.resultImage); // Set the result image received from backend
        if (data.creditBalance) {
          setCredit(data.creditBalance); // Update credits if response includes creditBalance
        }
        navigate("/result");
      } else {
        toast.error(data.message || "Error removing background");
        if (data.creditBalance === 0) {
          navigate("/buy-credit"); // Navigate to buy page if no credits left
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
  };

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default AppContextProvider;
