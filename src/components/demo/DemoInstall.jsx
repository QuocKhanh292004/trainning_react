import React from "react";
import { FaMouse, FaDownload, FaHeart } from "react-icons/fa";

const steps = [
  {
    icon: <FaMouse />,
    text: "Install Herion",
  },
  {
    icon: <FaDownload />,
    text: "Import Demo Content",
  },
  {
    icon: <FaHeart />,
    text: "Have Fun!",
  },
];

function DemoInstall() {
  return (
    <div className="bg-black text-white py-20 px-6 md:px-24">
      <div className="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-16">
        {/* Left Content */}
        <div>
          <h2 className="text-5xl font-pacifico text-gray-400">Demo Import</h2>
          <h3 className="text-2xl md:text-3xl font-oswald font-bold mt-4 uppercase">
            One-click Demo Install
          </h3>
          <p className="text-gray-300 mt-6 text-sm md:text-base leading-relaxed">
            Herion includes a One-Click Demo Importer, to allow you to import
            the demo content easily. <br />
            It is the cool way to set up your theme in a couple of minutes from
            this starting point.
          </p>
          <button className="mt-8 px-6 py-3 bg-[#f92663] hover:bg-[#e71f56] transition text-white font-bold text-sm uppercase">
            Get Your Copy
          </button>
        </div>

        {/* Right Timeline */}
        <div className="relative flex flex-col items-start">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex items-center relative z-10 min-h-[100px]"
            >
              {/* Icon + line */}
              <div className="flex flex-col items-center relative z-10">
                <div className="w-16 h-16 rounded-full border-2 border-white flex items-center justify-center text-xl bg-black">
                  {step.icon}
                </div>
                {/* Line below icon except last */}
                {index !== steps.length - 1 && (
                  <div
                    className="w-px flex-grow bg-white"
                    style={{ height: "0px" }}
                  ></div>
                )}
              </div>

              {/* Text */}
              <div className="ml-6 text-white text-sm md:text-base font-bold font-oswald uppercase">
                {step.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DemoInstall;
