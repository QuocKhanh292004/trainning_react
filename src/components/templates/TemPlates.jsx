import React from "react";
import TemplateCard from "./TemplateCard";
import { motion } from "framer-motion";

// Bạn có thể thay thế đường dẫn ảnh thật ở đây
const templates = [
  {
    title: "Main Home",
    image:
      "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-27_11h39_28-450x289.jpg",
    link: "https://preview.wolfthemes.store/herion/home/",
  },
  {
    title: "One-Page",
    image:
      "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-27_11h40_08-450x289.jpg",
    link: "https://preview.wolfthemes.store/herion/home/one-page/",
  },
  {
    title: "Band Home",
    image:
      "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-27_10h26_34-450x289.jpg",
    link: "https://preview.wolfthemes.store/herion/home/band-home/",
  },
  {
    title: "Record Shop",
    image:
      "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-27_10h26_34-450x289.jpg",
    link: "#",
  },
  {
    title: "DJ Producer",
    image:
      "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-27_10h26_34-450x289.jpg",
    link: "#",
  },
  {
    title: "DJ Producer",
    image:
      "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-27_10h26_34-450x289.jpg",
    link: "#",
  },
  {
    title: "DJ Producer",
    image:
      "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-27_10h26_34-450x289.jpg",
    link: "#",
  },
  {
    title: "DJ Producer",
    image:
      "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-27_10h26_34-450x289.jpg",
    link: "#",
  },
  {
    title: "DJ Producer",
    image:
      "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-27_10h26_34-450x289.jpg",
    link: "#",
  },
  {
    title: "DJ Producer",
    image:
      "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-27_10h26_34-450x289.jpg",
    link: "#",
  },
  {
    title: "DJ Producer",
    image:
      "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-27_10h26_34-450x289.jpg",
    link: "#",
  },
  {
    title: "DJ Producer",
    image:
      "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-27_10h26_34-450x289.jpg",
    link: "#",
  },
  {
    title: "DJ Producer",
    image:
      "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-27_10h26_34-450x289.jpg",
    link: "#",
  },
  {
    title: "DJ Producer",
    image:
      "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-27_10h26_34-450x289.jpg",
    link: "#",
  },
  {
    title: "DJ Producer",
    image:
      "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-27_10h26_34-450x289.jpg",
    link: "#",
  },
];

function Templates() {
  return (
      <div className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-5xl text-center font-pacifico text-gray-700">
          {templates.length} Templates
        </h2>
        <h3 className="text-2xl text-center font-oswald font-bold mt-2">
          HOMEPAGES
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {templates.map((tpl, index) => (
              <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              >
                <TemplateCard
                    image={tpl.image}
                    title={tpl.title}
                    link={tpl.link}
                />
              </motion.div>
          ))}
        </div>
      </div>
  );
}

export default Templates;
