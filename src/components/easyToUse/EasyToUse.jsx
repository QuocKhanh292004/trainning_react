import React from "react";
import { motion } from "framer-motion";

function EasyToUse() {
  return (
      <div className="bg-black text-white py-20 px-6 md:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Ảnh trượt từ trái */}
          <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
          >
            <img
                src="https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/admin-1.png"
                alt="Elements"
                className="max-w-full h-auto rounded"
            />
          </motion.div>

          {/* Nội dung chữ hiện từ dưới lên */}
          <motion.div
              className="text-left"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-5xl font-pacifico text-gray-400 mb-2">
              Easy To Use
            </h2>
            <h3 className="text-2xl font-oswald uppercase font-bold mb-6">
              No Coding Required
            </h3>
            <p className="text-gray-300 text-sm md:text-base mb-10 max-w-md">
              Herion comes with an advanced drag and drop page builder to help you
              create your website easily and quickly.
            </p>

            <div className="flex gap-12">
              <div>
                <p className="text-5xl font-bold text-white">
                  200<span className="text-pink-500">+</span>
                </p>
                <p className="font-oswald text-sm mt-2 tracking-wide">
                  DEMO LAYOUTS
                </p>
              </div>

              <div>
                <p className="text-5xl font-bold text-white">
                  110<span className="text-pink-500">+</span>
                </p>
                <p className="font-oswald text-sm mt-2 tracking-wide">
                  CONTENT ELEMENTS
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
  );
}

export default EasyToUse;
