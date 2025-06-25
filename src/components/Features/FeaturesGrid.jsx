import React from "react";
import { motion } from "framer-motion";
import {
  FaToolbox, FaSyncAlt, FaPen, FaCloudDownloadAlt, FaHeadphones,
  FaLifeRing, FaMapMarkerAlt, FaCodeBranch, FaThList, FaBullhorn,
  FaCamera, FaEnvelope
} from "react-icons/fa";

const features = [
  { icon: <FaToolbox className="text-3xl text-red-500" />, title: "ENHANCED PAGE BUILDER", description: "A boosted version..." },
  { icon: <FaSyncAlt className="text-3xl text-red-500" />, title: "SLIDER REVOLUTION", description: "Comes with the Revolution..." },
  { icon: <FaPen className="text-3xl text-red-500" />, title: "LIVE CUSTOMIZER", description: "No more bloated..." },
  { icon: <FaCloudDownloadAlt className="text-3xl text-red-500" />, title: "ONE-CLICK DEMO INSTALL", description: "Import the demo..." },
  { icon: <FaHeadphones className="text-3xl text-red-500" />, title: "POWER ELITE SUPPORT", description: "Your theme package..." },
  { icon: <FaLifeRing className="text-3xl text-red-500" />, title: "LIFETIME FREE UPDATES", description: "With Herion..." },
  { icon: <FaMapMarkerAlt className="text-3xl text-red-500" />, title: "TRANSLATABLE READY", description: "Translation files..." },
  { icon: <FaCodeBranch className="text-3xl text-red-500" />, title: "CHILD THEME INCLUDED", description: "Herion comes packed..." },
  { icon: <FaThList className="text-3xl text-red-500" />, title: "CONTENT BLOCKS", description: "Our integrated..." },
  { icon: <FaBullhorn className="text-3xl text-red-500" />, title: "SOCIAL MEDIA INTEGRATION", description: "Integrates content..." },
  { icon: <FaCamera className="text-3xl text-red-500" />, title: "PHOTOS INCLUDED", description: "Except for disc..." },
  { icon: <FaEnvelope className="text-3xl text-red-500" />, title: "CONTACT FORM 7", description: "Herion offers support..." },
];

export default function FeaturesGrid() {
  const columns = 3;

  return (
      <div className="py-16 px-6 md:px-20 bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const row = Math.floor(index / columns);
            const col = index % columns;
            const delay = (row + col) * 0.12;

            return (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30, y: -30 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay,
                    }}
                    className="flex items-start gap-4"
                >
                  <div>{feature.icon}</div>
                  <div>
                    <h3 className="font-bold uppercase text-sm">{feature.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                  </div>
                </motion.div>
            );
          })}
        </div>
      </div>
  );
}
