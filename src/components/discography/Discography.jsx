import React, { useState } from "react";
import TemplateCard from "../templates/TemplateCard";
import MoreText from "./MoreText";
import { motion } from "framer-motion";

const releaseSinglePages = [
  {
    title: "Info at Right",
    image:
      "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_10h34_39-450x289.jpg",
    link: "#",
  },
  {
    title: "Info at Left",
    image:
      "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_10h34_58-450x289.jpg",
    link: "#",
  },
  {
    title: "Wide Width",
    image:
      "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_10h35_33-450x289.jpg",
    link: "#",
  },
  {
    title: "Compact",
    image:
      "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_10h35_53-450x289.jpg",
    link: "#",
  },
  {
    title: "Minimal A",
    image:
      "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_12h43_40-450x289.jpg",
    link: "#",
  },
  {
    title: "Minimal B",
    image:
      "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_12h44_00-450x289.jpg",
    link: "#",
  },
  {
    title: "Minimal C",
    image:
      "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_12h44_16-450x289.jpg",
    link: "#",
  },
  {
    title: "Minimal D",
    image:
      "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_12h44_32-450x289.jpg",
    link: "#",
  },
];

const releaseListing = [
  {
    title: "Compact",
    image:
      "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_12h48_04-450x289.jpg",
    link: "#",
  },
  {
    title: "Minimal A",
    image:
      "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_12h48_04-450x289.jpg",
    link: "#",
  },
  {
    title: "Minimal B",
    image:
      "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_12h48_04-450x289.jpg",
    link: "#",
  },
  {
    title: "Minimal C",
    image:
      "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_12h48_04-450x289.jpg",
    link: "#",
  },
  {
    title: "Minimal D",
    image:
      "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_12h48_04-450x289.jpg",
    link: "#",
  },
];

function Discography() {
  const [activeTab, setActiveTab] = useState("single");
  const data = activeTab === "single" ? releaseSinglePages : releaseListing;

  return (
      <div className="py-16 px-6 md:px-20 bg-white text-center">
        <motion.h2
            className="text-5xl font-pacifico text-gray-500"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
          Discography
        </motion.h2>

        <motion.h3
            className="text-2xl font-oswald font-bold mt-2 uppercase"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
        >
          Release Pages
        </motion.h3>

        <motion.p
            className="mt-4 text-gray-500 max-w-3xl mx-auto text-sm md:text-base"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
        >
          Single release pages don’t have to be boring and all the same! You can
          use a different layout for each release, and use the page builder
          template system if you want all release pages with the same custom
          layout.
        </motion.p>

        {/* Tabs */}
        <div className="flex justify-center mt-10 border-b border-gray-300 mb-10">
          <button
              onClick={() => setActiveTab("single")}
              className={`px-6 py-2 font-bold text-sm uppercase border-b-2 transition-all duration-300 ${
                  activeTab === "single"
                      ? "border-black text-black"
                      : "border-transparent text-gray-400 hover:text-black"
              }`}
          >
            Release Single Pages
          </button>
          <button
              onClick={() => setActiveTab("listing")}
              className={`px-6 py-2 font-bold text-sm uppercase border-b-2 transition-all duration-300 ${
                  activeTab === "listing"
                      ? "border-black text-black"
                      : "border-transparent text-gray-400 hover:text-black"
              }`}
          >
            Release Listing
          </button>
        </div>

        {/* Grid list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((item, index) => (
              <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <TemplateCard
                    image={item.image}
                    title={item.title}
                    link={item.link}
                />
              </motion.div>
          ))}

          <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: data.length * 0.1 }}
              className="flex items-center justify-center h-full"
          >
            <MoreText />
          </motion.div>
        </div>

        <motion.div
            className="mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: data.length * 0.1 + 0.3 }}
            viewport={{ once: true }}
        >
          and more....
        </motion.div>
      </div>
  );
}

export default Discography;