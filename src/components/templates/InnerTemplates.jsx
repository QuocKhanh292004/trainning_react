import React from "react";
import { motion } from "framer-motion";
import TemplateCard from "../templates/TemplateCard";

const templates = [
  {
    title: "About Us",
    image:
        "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-28_13h36_33-450x289.jpg",
    link: "#",
  },
  {
    title: "About the Band",
    image:
        "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-28_13h37_17-450x289.jpg",
    link: "#",
  },
  {
    title: "About Me",
    image:
        "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-28_13h38_12-450x289.jpg",
    link: "#",
  },
  {
    title: "About Me",
    image:
        "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-28_13h37_54-450x289.jpg",
    link: "#",
  },
  {
    title: "About Me",
    image:
        "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-28_13h39_08-450x289.jpg",
    link: "#",
  },
  {
    title: "About Me",
    image:
        "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-28_13h37_29-450x289.jpg",
    link: "#",
  },
  {
    title: "About Me",
    image:
        "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-28_13h39_08-450x289.jpg",
    link: "#",
  },
  {
    title: "About Me",
    image:
        "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-28_13h38_52-450x289.jpg",
    link: "#",
  },
  {
    title: "About Me",
    image:
        "https://preview.wolfthemes.store/app/uploads/sites/31/2019/11/2019-11-28_13h37_54-450x289.jpg",
    link: "#",
  },
];

function InnerTemplates() {
  return (
      <div className="bg-white py-20 px-6 md:px-20">
        <h2 className="text-center text-5xl font-pacifico text-gray-600 mb-2">
          9 Templates
        </h2>
        <h3 className="text-center text-2xl font-oswald font-bold uppercase mb-6">
          Inner Pages
        </h3>
        <p className="text-center text-gray-500 max-w-4xl mx-auto text-sm md:text-base mb-10">
          We also created pre-made inner page layouts to make your life easier and
          allows you to put your site online as quickly as possible.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {templates.map((item, index) => (
              <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
              >
                <TemplateCard
                    image={item.image}
                    title={item.title}
                    link={item.link}
                />
              </motion.div>
          ))}
        </div>
      </div>
  );
}

export default InnerTemplates;
