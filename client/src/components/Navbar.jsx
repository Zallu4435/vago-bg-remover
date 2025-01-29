import logo from "../assets/favicon.svg";
import arrow_icon from "../assets/arrow_icon.svg";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const { openSignIn } = useClerk();
  const { isSignedIn, user } = useUser();
  return (
    <div className="flex items-center justify-between mx-4 py-3 lg:mx-44">
      <Link to="/">
        <img className="w-32 sm:w-" src={logo} alt="" />
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
