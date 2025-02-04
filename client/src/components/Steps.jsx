import { assets } from "../assets/assets";

const Steps = () => {
  return (
    <div className="mx-4 lg:mx-44 py-16 md:py-20">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-semibold bg-gradient-to-r from-gray-600 to-gray-400 bg-clip-text text-transparent">
        Remove Background in 3 Simple Steps
      </h1>
      <div className="flex flex-wrap justify-center gap-6 mt-12 md:mt-16">
        {/* Step 1: Upload Image */}
        <div className="flex items-start gap-4 bg-white border shadow-md rounded-lg p-6 md:p-7 hover:scale-105 transition-all duration-500 w-full sm:w-[320px]">
          <img className="w-10 md:w-12" src={assets.upload_icon} alt="Upload" />
          <div>
            <p className="text-lg md:text-xl font-medium">Upload Your Image</p>
            <p className="text-sm text-neutral-600 mt-1">
              Select an image from your device to start removing the background instantly.
            </p>
          </div>
        </div>

        {/* Step 2: Remove Background */}
        <div className="flex items-start gap-4 bg-white border shadow-md rounded-lg p-6 md:p-7 hover:scale-105 transition-all duration-500 w-full sm:w-[320px]">
          <img className="w-10 md:w-12" src={assets.remove_bg_icon} alt="Remove Background" />
          <div>
            <p className="text-lg md:text-xl font-medium">AI Processes the Image</p>
            <p className="text-sm text-neutral-600 mt-1">
              Our advanced AI removes the background automatically within seconds.
            </p>
          </div>
        </div>

        {/* Step 3: Download Image */}
        <div className="flex items-start gap-4 bg-white border shadow-md rounded-lg p-6 md:p-7 hover:scale-105 transition-all duration-500 w-full sm:w-[320px]">
          <img className="w-10 md:w-12" src={assets.download_icon} alt="Download" />
          <div>
            <p className="text-lg md:text-xl font-medium">Download Your Image</p>
            <p className="text-sm text-neutral-600 mt-1">
              Save your high-quality transparent image and use it anywhere you like.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
