import React, { useState } from "react";
import TemplateCard from "../templates/TemplateCard";

const artistSinglePages = [
  {
    title: "KRISTY SINGH",
    image:
      "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_10h34_39-450x289.jpg",
    link: "#",
  },
  {
    title: "Fall of Spice",
    image:
      "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_10h34_58-450x289.jpg",
    link: "#",
  },
  {
    title: "Royal Blaze",
    image:
      "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_10h35_33-450x289.jpg",
    link: "#",
  },
  {
    title: "Simple Listing",
    image:
      "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_10h35_53-450x289.jpg",
    link: "#",
  },
  {
    title: "Grid Style",
    image:
      "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_10h35_53-450x289.jpg",
    link: "#",
  },
];

const artistListing = [
  {
    title: "Simple Listing",
    image:
      "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_10h45_59-450x289.jpg",
    link: "#",
  },
  {
    title: "Grid Style",
    image:
      "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_10h45_59-450x289.jpg",
    link: "#",
  },
  {
    title: "Dark Layout",
    image:
      "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_10h45_59-450x289.jpg",
    link: "#",
  },
  {
    title: "Dark Layout",
    image:
      "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_10h45_59-450x289.jpg",
    link: "#",
  },
  {
    title: "Dark Layout",
    image:
      "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-30_10h36_25-450x289.jpg",
    link: "#",
  },
];

function ArtistPages() {
  const [activeTab, setActiveTab] = useState("single");

  const data = activeTab === "single" ? artistSinglePages : artistListing;

  return (
    <div className="py-16 px-6 md:px-20 bg-white text-center">
      <h2 className="text-5xl font-pacifico text-gray-500">Artist Pages</h2>
      <h3 className="text-2xl font-oswald font-bold mt-2 uppercase">
        Simple or Custom Layouts
      </h3>

      <p className="mt-4 text-gray-500 max-w-3xl mx-auto text-sm md:text-base">
        Herion can be used for your record label website. You can create an
        unlimited number of pages for each artist and choose between simple
        default layouts, automatically generated from the release, videos and
        events artist category, or create a custom page. It’s all up-to-you!
      </p>

      <div className="flex justify-center mt-10 border-b border-gray-300 mb-10">
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
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {data.map((item, index) => (
          <TemplateCard
            key={index}
            image={item.image}
            title={item.title}
            link={item.link}
          />
        ))}

        {/* Thay MoreText bằng div inline luôn cho bạn */}
        <div className="flex items-center justify-center h-[289px] w-full">
          <p className="text-3xl font-pacifico font-bold text-black">
            and more...
          </p>
        </div>
      </div>
      <div className="mt-15">and more....</div>
    </div>
  );
}

export default ArtistPages;
