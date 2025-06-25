// TemplateCard.jsx
import React from "react";
import { motion } from "framer-motion";

function TemplateCard({ image, title, link }) {
  return (
      <motion.a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="block overflow-hidden rounded shadow-md hover:shadow-xl transition-shadow duration-300"
          variants={{
            hidden: { opacity: 0, y: 40 },
            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
          }}
      >
        <img src={image} alt={title} className="w-full h-auto" />
        <div className="p-4 font-oswald font-bold text-center">{title}</div>
      </motion.a>
  );
}

export default TemplateCard;
