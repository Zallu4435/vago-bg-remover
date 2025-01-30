import React from "react";
import image_w_bg from "../assets/image_w_bg.png";
import image_wo_bg from "../assets/image_wo_bg.png";

const Result = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-14">
      <div className="bg-white rounded-xl shadow-md p-4 md:p-8">
        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {/* Original Image */}
          <div className="space-y-3">
            <p className="font-semibold text-gray-600">Original</p>
            <div className="aspect-w-16 aspect-h-12 w-full">
              <img 
                className="rounded-lg border border-gray-200 object-cover w-full h-full" 
                src={image_w_bg} 
                alt="Original image" 
              />
            </div>
          </div>

          {/* Background Removed Image */}
          <div className="space-y-3">
            <p className="font-semibold text-gray-600">Background Removed</p>
            <div className="aspect-w-16 aspect-h-12 w-full">
              <div className="rounded-lg border border-gray-200 h-full bg-[#f0f0f0] bg-opacity-50 relative overflow-hidden">
                <img 
                  src={image_wo_bg} 
                  alt="Image with background removed"
                  className="object-contain w-full h-full" 
                />
                
                {/* Loader */}
                {false && (
                  <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-80">
                    <div className="border-4 border-violet-600 rounded-full h-12 w-12 border-t-transparent animate-spin"/>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-4">
          <button 
            className="w-full sm:w-auto px-8 py-2.5 text-violet-600 text-sm font-medium border-2 border-violet-600 rounded-full hover:bg-violet-50 active:scale-95 transition-all duration-300"
          >
            Try another image
          </button>
          
          <a 
            href="" 
            className="w-full sm:w-auto px-8 py-2.5 text-white text-sm font-medium bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full hover:shadow-lg active:scale-95 transition-all duration-300 text-center"
          >
            Download image
          </a>
        </div>
      </div>
    </div>
  );
};

export default Result;