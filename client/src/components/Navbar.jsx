import logo from "../assets/logo.png";
import arrow_icon from "../assets/arrow_icon.svg";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();
  const { credit, loadCreditsData } = useContext(AppContext);

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
        <div>
          {" "}
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
