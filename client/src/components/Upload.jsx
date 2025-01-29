import React from "react";
import upload_btn_icon from "../assets/upload_btn_icon.svg";

const Upload = () => {
  return (
    <div className="pb-16">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-500 to-gray-400 bg-clip-text text-transparent py-6 md:py-16">
        See the magic. Try now!
      </h1>

      <div className="text-center mt-24">
        <input type="file" name="" id="upload2" hidden />
        <label
          htmlFor="upload2"
          className="inline-flex gap-3 px-8 py-3.5 rounded-full cursor-pointer bg-gradient-to-r from-violet-600 to-fuchsia-500 m-auto hover:scale-105 transition-all duration-700"
        >
          <img width={20} src={upload_btn_icon} alt="upload icon" />
          <p className="text-white text-sm">Upload your Image</p>
        </label>
      </div>
    </div>
  );
};

export default Upload;
