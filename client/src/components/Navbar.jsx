import { assets } from '../assets/assets'
import { Link, useNavigate } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

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
    <div className="flex items-center justify-between px-4 py-3 lg:px-44">
      {/* Logo Section */}
      <Link to="/" className="flex items-center gap-1 sm:gap-2">
        <img 
          className="w-20 sm:w-28 md:w-32" 
          src={assets?.logo} 
          alt="VAGO Logo" 
        />
        <div className="flex flex-col sm:flex-row items-start sm:items-center">
          <span className="text-lg sm:text-2xl md:text-3xl font-semibold text-violet-600 uppercase tracking-wide">
            VAGO
          </span>
          <span className="text-sm sm:text-2xl md:text-3xl ml-0 sm:ml-2 bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent font-normal opacity-70">
            Bg-Remover
          </span>
        </div>
      </Link>

      {/* Auth Section */}
      {isSignedIn ? (
        <div className="flex items-center gap-2 sm:gap-3">
          <button 
            onClick={() => navigate('/buy-credit')} 
            className="flex items-center gap-1 sm:gap-2 bg-blue-100 px-2 sm:px-4 md:px-7 py-1.5 sm:py-2.5 rounded-full hover:scale-105 transition-all duration-700 cursor-pointer"
          >
            <img 
              className="w-4 sm:w-5" 
              src={assets?.credit_icon} 
              alt=""
            />
            <p className="text-xs sm:text-sm font-medium text-gray-600 whitespace-nowrap">
              Credits: {credit}
            </p>
          </button>
          
          <p className="hidden md:block text-gray-600">
            Hi, {user.fullName}
          </p>
          
          <div className="scale-75 sm:scale-90 md:scale-100">
            <UserButton />
          </div>
        </div>
      ) : (
        <button
          onClick={() => openSignIn({})}
          className="bg-zinc-800 text-white flex items-center gap-2 sm:gap-4 px-3 py-1.5 sm:px-8 sm:py-3 text-xs sm:text-sm rounded-full whitespace-nowrap"
        >
          Get Started
          <img 
            className="w-4 sm:w-auto" 
            src={assets?.arrow_icon} 
            alt='"' 
          />
        </button>
      )}
    </div>
  );
};

export default Navbar;