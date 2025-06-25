import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import BackGround from "../../assets/images/BackGround.jpg";

function Describe() {
  return (
      <div
          className="relative w-full h-screen bg-cover bg-center"
          style={{ backgroundImage: `url(${BackGround})` }}
      >
        <div className="absolute inset-0 bg-opacity-60 flex items-center pl-36">
          <div className="max-w-xl">

            {/* Tiêu đề phụ */}
            <motion.h2
                className="text-2xl font-light font-oswald"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true, amount: 0.5 }}
            >
              Music{" "}
              <span className="font-pacifico text-black">WordPress Theme</span>
            </motion.h2>

            {/* Tiêu đề chính */}
            <motion.h1
                className="text-4xl font-bold mt-4 leading-tight font-oswald"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
            >
              DEDICATED TO BANDS, LABELS,
              <br />
              FESTIVALS, MUSIC STORE AND
              <br />
              MORE...
            </motion.h1>

            {/* Đoạn mô tả */}
            <motion.p
                className="mt-6 font-bold text-black font-oswald"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true, amount: 0.5 }}
            >
              NO CODING REQUIRED
            </motion.p>

            {/* Nút */}
            <motion.button
                className="mt-4 px-6 py-3 border border-black font-bold hover:bg-black hover:text-white transition-all font-oswald"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true, amount: 0.5 }}
            >
              VIEW DEMOS
            </motion.button>
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

        {/* Buy Now góc trên */}
        <div className="absolute top-4 right-4 font-oswald font-bold text-sm">
          BUY NOW
        </div>
      </div>
  );
}

export default Describe;
