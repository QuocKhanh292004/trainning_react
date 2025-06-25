import React from "react";
import { motion } from "framer-motion";
import {
  FaWpforms,
  FaSyncAlt,
  FaCubes,
  FaCheckCircle,
} from "react-icons/fa";

const plugins = [
  {
    name: "WPBakery Page Builder",
    save: "$74",
    icon: <FaWpforms className="text-5xl text-sky-600 mb-6 mx-auto" />,
    features: [
      "Full Version Included",
      "Unlimited design options",
      "Easy to use, no coding",
      "Fast & Easy",
    ],
  },
  {
    name: "Slider Revolution",
    save: "$109",
    icon: <FaSyncAlt className="text-5xl text-red-500 mb-6 mx-auto" />,
    features: [
      "Full Version Included",
      "Powerful visual editor",
      "Advanced Animations",
      "For Sliders, Headers and more",
    ],
  },
  {
    name: "Wolf Page Builder Extension",
    save: "Exclusive",
    icon: <FaCubes className="text-5xl text-indigo-600 mb-6 mx-auto" />,
    features: [
      "Only Available with our Themes",
      "Extends WPBakery Page Builder",
      "Adds Tons of Elements and Options",
    ],
  },
];

const PremiumPluginsSection = () => {
  return (
      <section className="text-center py-16 px-4 bg-white">
        <h2 className="text-5xl font-semibold text-gray-800 mb-4 italic">
          Save Money
        </h2>
        <p className="text-2xl font-bold uppercase text-gray-900 tracking-wide mb-8">
          $90 of premium plugin included
        </p>
        <p className="max-w-2xl mx-auto text-gray-500 mb-16 text-base leading-7">
          Includes WPBakery Page Builder and Slider Revolution premium plugins.
          Save money and start building your website using the best tools
          available on the market today.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {plugins.map((plugin, index) => (
              <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.15,
                    ease: "easeOut",
                  }}
                  className="border rounded-2xl p-10 shadow-lg min-h-[400px] flex flex-col justify-start"
              >
                {plugin.icon}
                <h3 className="font-semibold text-xl mb-2">{plugin.name}</h3>
                <p className="text-pink-500 font-semibold text-lg mb-6">
                  {plugin.save.startsWith("$")
                      ? `Save ${plugin.save}`
                      : plugin.save}
                </p>
                <ul className="text-base text-gray-700 space-y-3 text-left">
                  {plugin.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <FaCheckCircle className="text-pink-500 mt-1" />
                        <span>{feature}</span>
                      </li>
                  ))}
                </ul>
              </motion.div>
          ))}
        </div>
      </section>
  );
};

export default PremiumPluginsSection;
