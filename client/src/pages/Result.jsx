import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Result = () => {
  const { resultImage, image } = useContext(AppContext);

  return (
    <div className="container mx-auto px-4 py-8 md:py-14">
      <div className="bg-white rounded-xl shadow-md p-4 md:p-8">
        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {/* Original Image */}
          <div className="space-y-3">
            <p className="font-semibold text-gray-600">Original</p>
            <div className="relative w-full h-64 md:h-96">
              {image && (
                <img 
                  className="rounded-lg border border-gray-200 w-full h-full object-contain" 
                  src={URL.createObjectURL(image)} 
                  alt="Original image" 
                />
              )}
            </div>
          </div>
          {/* Background Removed Image */}
          <div className="space-y-3">
            <p className="font-semibold text-gray-600">Background Removed</p>
            <div className="relative w-full h-64 md:h-96">
              <div className="rounded-lg border border-gray-200 w-full h-full bg-[#f0f0f0] bg-opacity-50">
                {resultImage && (
                  <img 
                    src={resultImage} 
                    alt="Image with background removed"
                    className="w-full h-full object-contain" 
                  />
                )}
                {!resultImage && image && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="border-4 border-violet-600 rounded-full h-16 w-16 border-t-transparent animate-spin"/>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Action Buttons */}
        {resultImage && (
          <div className="mt-8 flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-4">
            <button 
              className="w-full sm:w-auto px-8 py-2.5 text-violet-600 text-sm font-medium border-2 border-violet-600 rounded-full hover:bg-violet-50 active:scale-95 transition-all duration-300"
            >
              Try another image
            </button>
            <a 
              href={resultImage} 
              download
              className="w-full sm:w-auto px-8 py-2.5 text-white text-sm font-medium bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full hover:shadow-lg active:scale-95 transition-all duration-300 text-center"
            >
              Download image
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Result;