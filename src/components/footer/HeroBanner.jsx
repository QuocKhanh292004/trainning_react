import React from "react";

function HeroBanner() {
  return (
    <div
      className="relative h-screen bg-cover bg-center flex items-center justify-center text-white"
      style={{
        backgroundImage:
          "url('https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/george-mihaila-j-LdPn1YFGA-unsplash.jpg')",
      }}
    >
      <div className="text-center">
        <h1 className="text-6xl font-extrabold uppercase leading-tight tracking-wider">
          Herion
        </h1>

        <div className="inline-block my-4">
          <button className="bg-pink-500 px-6 py-3 font-bold text-white text-lg shadow-md hover:bg-pink-600 transition duration-300">
            BUY NOW
          </button>
        </div>

        <h1 className="text-6xl font-extrabold uppercase leading-tight tracking-wider">
          Theme
        </h1>
      </div>
    </div>
  );
}

export default HeroBanner;
