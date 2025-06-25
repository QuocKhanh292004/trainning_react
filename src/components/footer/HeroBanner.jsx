import React from "react";
import { motion } from "framer-motion";

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
          {/* Dòng trên */}
          <motion.h1
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
              className="text-7xl md:text-8xl font-extrabold uppercase leading-tight tracking-wider"
          >
            Herion
          </motion.h1>

          {/* Nút */}
          <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="inline-block my-6"
          >
            <button className="bg-pink-500 px-10 py-5 font-bold text-white text-2xl shadow-lg hover:bg-pink-600 transition duration-300 rounded-lg">
              BUY NOW
            </button>
          </motion.div>

          {/* Dòng dưới */}
          <motion.h1
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
              className="text-7xl md:text-8xl font-extrabold uppercase leading-tight tracking-wider"
          >
            Theme
          </motion.h1>
        </div>
      </div>
  );
}

export default HeroBanner;
