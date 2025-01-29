import React from "react";
import upload_btn_icon from "../assets/upload_btn_icon.svg";
import header_img from "../assets/header_img.png";

const Header = () => {
  return (
    <div>
      <div className="flex items-center justify-between max-sm:flex-col-reverse gap-y-10 px-4 mt-10 lg:px-44 sm:mt-20">
        <h1 className="text-4xl xl:text-5xl 2xl:text-6xl font-bold text-neutral-700 leading-tight">
          Remove the <br className="max-md:hidden"/>{" "}
          <span className="bg-gradient-to-r from-violet-600 to-fuchsia-500 bg-clip-text text-transparent">
            background
          </span>{" "}
          <span> from </span> <br className="max-md:hidden"/> <h1>the code</h1>
          images for free.
        </h1>
        <p className="my-6 text-[15px] text-gray-500">
          jsjdJD Isdjsdjsid sijdisjdijsdi sijdisjdisjd sjidisjdijsd sidjsijdisjd
          sijdsijdijsd sijdisjdisjd{" "}
        </p>
        <div>
          <input type="file" name="" id="upload1" hidden />
          <label htmlFor="upload1"
            className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700"
          >
            <img 
            width={20}
            src={upload_btn_icon} alt="upload icon" />
            <p
            className="text-white text-sm">Upload your Image</p>
          </label>
        </div>
      </div>

      <div className="w-full max-w-md">
        <img src={header_img}/>
      </div>
    </div>
  );
};

export default Header;
