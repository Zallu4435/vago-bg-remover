import { useContext } from "react";
import upload_btn_icon from "../assets/upload_btn_icon.svg";
import header_img from "../assets/header_img.png";
import { AppContext } from "../context/AppContext";

const Header = () => {
  const {removeBg} = useContext(AppContext);

  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12">
        {/* Left content section */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-neutral-700 leading-tight">
            Remove the{" "}
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
              background
            </span>{" "}
            from <span className="whitespace-nowrap">the code</span>{" "}
            <span className="whitespace-nowrap">images for free.</span>
          </h1>

          <p className="text-sm sm:text-base text-gray-500 max-w-xl">
            Easily remove backgrounds from your images with just one click.
            Upload your image and get a clean, transparent background in
            seconds!
          </p>

          <div>
            <input
              onChange={(e) => removeBg(e.target.files[0])}
              type="file"
              accept="image/*"
              id="upload1"
              className="hidden"
            />
            <label
              htmlFor="upload1"
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:scale-105 transition-all duration-700"
            >
              <img
                width={20}
                src={upload_btn_icon}
                alt="upload icon"
                className="w-4 sm:w-5"
              />
              <span className="text-white text-sm sm:text-base">
                Upload your Image
              </span>
            </label>
          </div>
        </div>

        {/* Right image section */}
        <div className="w-full md:w-1/2">
          <img
            src={header_img}
            alt="Header illustration"
            className="w-full h-auto object-contain max-w-md mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
