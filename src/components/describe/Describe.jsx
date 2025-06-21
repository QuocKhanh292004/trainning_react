import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import BackGround from "../../assets/images/BackGround.jpg";

console.log("backgroud", BackGround);
console.log("typeof BackGround:", typeof BackGround);

function Describe() {
  return (
    <div
      className="relative w-full h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BackGround})`, backgroundColor: "red" }}
    >
      {/* Overlay mờ trắng */}
      <div className="absolute inset-0 bg-opacity-60 flex items-center pl-36">
        <div className="max-w-xl">
          <h2 className="text-2xl font-light font-oswald">
            Music{" "}
            <span className="font-pacifico text-black">WordPress Theme</span>
          </h2>

          <h1 className="text-4xl font-bold mt-4 leading-tight font-oswald">
            DEDICATED TO BANDS, LABELS,
            <br />
            FESTIVALS, MUSIC STORE AND
            <br />
            MORE...
          </h1>

          <p className="mt-6 font-bold text-black font-oswald">
            NO CODING REQUIRED
          </p>
          <button className="mt-4 px-6 py-3 border border-black font-bold hover:bg-black hover:text-white transition-all font-oswald">
            VIEW DEMOS
          </button>
        </div>
      </div>

      {/* Icon mua hàng & chia sẻ bên phải */}
      <div className="absolute top-1/2 right-4 transform -translate-y-1/2 space-y-2">
        <button className="bg-pink-600 p-3 text-white rounded hover:bg-pink-700">
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
        <button className="bg-black p-3 text-white rounded hover:bg-gray-800">
          <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>

      {/* Buy now */}
      <div className="absolute top-4 right-4 font-oswald font-bold text-sm">
        BUY NOW
      </div>
    </div>
  );
}

export default Describe;
