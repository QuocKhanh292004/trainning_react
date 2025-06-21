import React from "react";

function TemplateCard({ image, title, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block group"
    >
      <div className="rounded overflow-hidden shadow-lg transform group-hover:scale-105 transition-all duration-300">
        <img src={image} alt={title} className="w-full h-auto" />
      </div>
      <p className="text-center mt-3 text-gray-800 font-medium">{title}</p>
    </a>
  );
}

export default TemplateCard;
