import React, { useState } from "react";
import TemplateCard from "../templates/TemplateCard";
import MoreText from "./MoreText";

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
      <h2 className="text-5xl font-pacifico text-gray-500">Discography</h2>
      <h3 className="text-2xl font-oswald font-bold mt-2 uppercase">
        Release Pages
      </h3>

      <p className="mt-4 text-gray-500 max-w-3xl mx-auto text-sm md:text-base">
        Single release pages don’t have to be boring and all the same! You can
        use a different layout for each release, and use the page builder
        template system if you want all release pages with the same custom
        layout.
      </p>

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
          <TemplateCard
            key={index}
            image={item.image}
            title={item.title}
            link={item.link}
          />
        ))}
        {/* MoreText nằm trong grid luôn */}
        <div className="flex items-center justify-center h-full">
          <MoreText />
        </div>
      </div>
      <div className="mt-20"> and more....</div>
    </div>
  );
}

export default Discography;
