import React from "react";
import image_w_bg from "../assets/image_w_bg.png";
import image_wo_bg from "../assets/image_wo_bg.png";

const Result = () => {
  return (
    <div className="mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]">
      <div className="bg-white px-8 rounded-lg drop-shadow-sm">
        <div className="flex flex-col gap-8 sm:grid grid-cols-2"> 
          {/* Original Image */}
          <div>
            <p className="font-semibold text-gray-600 mb-2">Original</p>
            <img className="rounded-md border" src={image_w_bg} alt="original" />
          </div>

          {/* Background Removed Image */}
          <div>
            <p className="font-semibold text-gray-600 mb-2">Background Removed</p>
            <div className="rounded-md border border-gray-300 h-full relative bg-layer overflow-hidden">
              <img src={image_wo_bg} alt="background removed" />
              {/* Loader (Commented) */}
              {/* <div className="absolute right-1/2 bottom-1/2 transform translate-x-1/2 translate-y-1/2">
                <div className="border-4 border-violet-600 rounded-full h-12 w-12 border-t-transparent animate-spin"></div>
              </div> */}
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="flex justify-center sm:justify-end items-center flex-wrap gap-4 mt-6">
          <button className="px-8 py-2.5 text-violet-600 text-sm border border-violet-600 rounded-full hover:scale-105 transition-all duration-700">
            Try another image
          </button>
          <a href="" className="px-8 py-2.5 text-white text-sm bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full hover:scale-105 transition-all duration-700">Download image</a>
        </div>

      </div>  
    </div>
  );
};

export default Result;
