import React from "react";
import upload_icon from "../assets/upload_icon.svg";
import remove_bg_icon from "../assets/remove_bg_icon.svg";
import downloas_icon from "../assets/download_icon.svg";

const Steps = () => {
  return (
    <div className="mx-4 lg:mx-44 py-24 xl:py-20">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold bg-gradient-to-r from-gray-500 to-gray-400 bg-clip-text text-transparent">
        Steps to remove background image in seconds
      </h1>
      <div className="flex items-start flex-wrap gap-4 mt-16 xl:mt-14 justify-center">
        <div className="flex items-start gap-4 bg-white border drop-shadow-md rounded p-7 pb-10 hover:scale-105 transition-all duration-500">
          <img className="max-w-9" src={upload_icon} alt="" />
          <div>
            <p className="text-xl font-medium">Remove background</p>
            <p className="text-sm text-neutral-500 mt-1">
              This is a demo text, will replace it later. <br /> This is a
              demo..
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white border drop-shadow-md rounded p-7 pb-10 hover:scale-105 transition-all duration-500">
          <img className="max-w-9" src={remove_bg_icon} alt="" />
          <div>
            <p className="text-xl font-medium">Upload image</p>
            <p className="text-sm text-neutral-500 mt-1">
              This is a demo text, will replace it later. <br /> This is a
              demo..
            </p>
          </div>
        </div>
        <div className="flex items-start gap-4 bg-white border drop-shadow-md rounded p-7 pb-10 hover:scale-105 transition-all duration-500">
          <img className="max-w-9" src={downloas_icon} alt="" />
          <div>
            <p className="text-xl font-medium">Download image</p>
            <p className="text-sm text-neutral-500 mt-1">
              This is a demo text, will replace it later. <br /> This is a
              demo..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
