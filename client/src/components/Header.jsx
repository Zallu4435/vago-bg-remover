import { useContext } from "react";
import { assets } from "../assets/assets";
import { AppContext } from "../context/AppContext";

const Header = () => {
  const {removeBg} = useContext(AppContext);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 lg:py-20 max-w-7xl">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 lg:gap-16 xl:gap-24">
        {/* Left content section */}
        <div className="w-full md:w-1/2 space-y-6 lg:space-y-8 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-neutral-700 leading-tight lg:leading-tight xl:leading-tight">
            Remove the{" "}
            <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
              background
            </span>{" "}
            from{" "} 
            <span className="whitespace-nowrap">the code</span>{" "}
            <span className="whitespace-nowrap">images for free.</span>
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-gray-500 max-w-xl lg:max-w-2xl">
            Easily remove backgrounds from your images with just one click.
            Upload your image and get a clean, transparent background in
            seconds!
          </p>

          <div className="pt-4">
            <input
              onChange={(e) => removeBg(e.target.files[0])}
              type="file"
              accept="image/*"
              id="upload1"
              className="hidden"
            />
            <label
              htmlFor="upload1"
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-3.5 lg:px-10 lg:py-4 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:scale-105 transition-all duration-700"
            >
              <img
                src={assets?.upload_btn_icon}
                alt="upload icon"
                className="w-4 sm:w-5 lg:w-6"
              />
              <span className="text-white text-sm sm:text-base lg:text-lg whitespace-nowrap">
                Upload your Image
              </span>
            </label>
          </div>
        </div>

        {/* Right image section */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <img
            src={assets?.header_img}
            alt="Header illustration"
            className="w-full max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;