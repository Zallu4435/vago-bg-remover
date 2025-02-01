import logo from "../assets/logo.png";
import arrow_icon from "../assets/arrow_icon.svg";
import { Link, useNavigate } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import credit_icon from "../assets/credit_icon.png"

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();
  const { credit, loadCreditsData } = useContext(AppContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (isSignedIn) {
      loadCreditsData();
    }
  }, [isSignedIn]);

  return (
    <div className="flex items-center justify-between mx-4 py-3 lg:mx-44">
      <Link to="/" className="flex items-center gap-2">
        <img className="w-28 sm:w-32" src={logo} alt="VAGO Logo" />
        <span className="text-2xl sm:text-3xl font-semibold">
          <span className="text-violet-600 uppercase tracking-wide font-bold">
            VAGO
          </span>
          <span className="ml-2 bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent font-normal opacity-70">
            Bg-Remover
          </span>
        </span>
      </Link>

      {isSignedIn ? (
        <div className="flex items-center gap-2 sm:gap-3 ">
          <button onClick={() => navigate('/buy-credit')} className="flex items-center gap-2 bg-blue-100 px-4 sm:px-7 py-1.5 sm:py-2.5 rounded-full hover:scale-105 transition-all duration-700 cursor-pointer">
            <img className="w-5" src={credit_icon} alt=""/>
            <p className="text-xs sm:text-sm font-medium text-gray-600">Credits: {credit}</p>
          </button>
          <p className="text-gray-600 max-sm:hidden">Hi, {user.fullName}</p>
          <UserButton />{" "}
        </div>
      ) : (
        <button
          onClick={() => openSignIn({})}
          className="bg-zinc-800 text-white flex items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-full"
        >
          Get Started
          <img src={arrow_icon} alt='"' />
        </button>
      )}
    </div>
  );
};

export default Navbar;
