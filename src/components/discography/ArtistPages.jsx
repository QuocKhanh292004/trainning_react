import React, { useState } from "react";
import { motion } from "framer-motion";
import TemplateCard from "../templates/TemplateCard";

const artistSinglePages = [
  {
    title: "KRISTY SINGH",
    image: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_10h34_39-450x289.jpg",
    link: "#",
  },
  {
    title: "Fall of Spice",
    image: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_10h34_58-450x289.jpg",
    link: "#",
  },
  {
    title: "Royal Blaze",
    image: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_10h35_33-450x289.jpg",
    link: "#",
  },
  {
    title: "Simple Listing",
    image: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_10h35_53-450x289.jpg",
    link: "#",
  },
  {
    title: "Grid Style",
    image: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_10h35_53-450x289.jpg",
    link: "#",
  },
];

const artistListing = [
  {
    title: "Simple Listing",
    image: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_10h45_59-450x289.jpg",
    link: "#",
  },
  {
    title: "Grid Style",
    image: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_10h45_59-450x289.jpg",
    link: "#",
  },
  {
    title: "Dark Layout",
    image: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_10h45_59-450x289.jpg",
    link: "#",
  },
  {
    title: "Dark Layout",
    image: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_10h45_59-450x289.jpg",
    link: "#",
  },
  {
    title: "Dark Layout",
    image: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_10h36_25-450x289.jpg",
    link: "#",
  },
];

function ArtistPages() {
  const [activeTab, setActiveTab] = useState("single");
  const data = activeTab === "single" ? artistSinglePages : artistListing;

  return (
      <div className="py-16 px-6 md:px-20 bg-white text-center">
        <motion.h2
            className="text-5xl font-pacifico text-gray-500"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
        >
          Artist Pages
        </motion.h2>

        <motion.h3
            className="text-2xl font-oswald font-bold mt-2 uppercase"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
        >
          Simple or Custom Layouts
        </motion.h3>

        <motion.p
            className="mt-4 text-gray-500 max-w-3xl mx-auto text-sm md:text-base"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
        >
          Herion can be used for your record label website. You can create an
          unlimited number of pages for each artist and choose between simple
          default layouts, automatically generated from the release, videos and
          events artist category, or create a custom page. It’s all up-to-you!
        </motion.p>

        {/* Tabs */}
        <motion.div
            className="flex justify-center mt-10 border-b border-gray-300 mb-10"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
        >
          <button
              onClick={() => setActiveTab("single")}
              className={`px-6 py-2 font-bold text-sm uppercase border-b-2 transition-all duration-300 ${
                  activeTab === "single"
                      ? "border-black text-black"
                      : "border-transparent text-gray-400 hover:text-black"
              }`}
          >
            Artist Single Pages
          </button>
          <button
              onClick={() => setActiveTab("listing")}
              className={`px-6 py-2 font-bold text-sm uppercase border-b-2 transition-all duration-300 ${
                  activeTab === "listing"
                      ? "border-black text-black"
                      : "border-transparent text-gray-400 hover:text-black"
              }`}
          >
            Artist Listing
          </button>
        </motion.div>

        {/* Grid List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((item, index) => (
              <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <TemplateCard image={item.image} title={item.title} link={item.link} />
              </motion.div>
          ))}

          {/* Dòng chữ cuối */}
          <motion.div
              className="flex items-center justify-center h-[289px] w-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: data.length * 0.1 }}
          >
            <p className="text-3xl font-pacifico font-bold text-black">
              and more...
            </p>
          </motion.div>
        </div>

        <div className="mt-15">and more....</div>
      </div>
  );
}

export default ArtistPages;
