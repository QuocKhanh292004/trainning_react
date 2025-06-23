import React from "react";
import {
  FaWpforms, // thay cho WPBakery
  FaSyncAlt, // thay cho Slider Revolution
  FaCubes, // thay cho Wolf Page Builder
  FaCheckCircle,
} from "react-icons/fa";

const plugins = [
  {
    name: "WPBakery Page Builder",
    save: "$74",
    icon: <FaWpforms className="text-4xl text-sky-600 mb-4 mx-auto" />,
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
    icon: <FaSyncAlt className="text-4xl text-red-500 mb-4 mx-auto" />,
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
    icon: <FaCubes className="text-4xl text-indigo-600 mb-4 mx-auto" />,
    features: [
      "Only Available with our Themes",
      "Extends WPBakery Page Builder",
      "Adds Tons of Elements and Options",
    ],
  },
];

const PremiumPluginsSection = () => {
  return (
    <section className="text-center py-12 px-4 bg-white">
      <h2 className="text-4xl font-semibold text-gray-800 mb-2 italic">
        Save Money
      </h2>
      <p className="text-xl font-bold uppercase text-gray-900 tracking-wide mb-6">
        $90 of premium plugin included
      </p>
      <p className="max-w-2xl mx-auto text-gray-500 mb-12">
        Includes WPBakery Page Builder and Slider Revolution premium plugins.
        Save money and start building your website using the best tools
        available on the market today.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {plugins.map((plugin, index) => (
          <div key={index} className="border rounded-lg p-6 shadow-sm">
            {plugin.icon}
            <h3 className="font-semibold text-lg mb-1">{plugin.name}</h3>
            <p className="text-pink-500 font-medium text-lg mb-4">
              {plugin.save.startsWith("$")
                ? `Save ${plugin.save}`
                : plugin.save}
            </p>
            <ul className="text-sm text-gray-600 space-y-2 text-left">
              {plugin.features.map((feature, i) => (
                <li key={i} className="flex items-start gap-2">
                  <FaCheckCircle className="text-pink-500 mt-1" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PremiumPluginsSection;
