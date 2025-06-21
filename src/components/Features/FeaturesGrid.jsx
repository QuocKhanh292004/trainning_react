import React from "react";

import {
  FaToolbox,
  FaSyncAlt,
  FaPen,
  FaCloudDownloadAlt,
  FaHeadphones,
  FaLifeRing,
  FaMapMarkerAlt,
  FaCodeBranch,
  FaThList,
  FaBullhorn,
  FaCamera,
  FaEnvelope,
} from "react-icons/fa";

const features = [
  {
    icon: <FaToolbox className="text-3xl text-red-500" />,
    title: "ENHANCED PAGE BUILDER",
    description:
      "A boosted version of WPBakery Page Builder included ($74 value) with a clean admin design and a ton of additional elements for musicians.",
  },
  {
    icon: <FaSyncAlt className="text-3xl text-red-500" />,
    title: "SLIDER REVOLUTION",
    description:
      "Comes with the Revolution Slider plugin included ($109 value). All demo slider templates are included in your theme package.",
  },
  {
    icon: <FaPen className="text-3xl text-red-500" />,
    title: "LIVE CUSTOMIZER",
    description:
      "No more bloated theme options panels. Change the main appearance of your website and see the changes instantly in the live preview.",
  },
  {
    icon: <FaCloudDownloadAlt className="text-3xl text-red-500" />,
    title: "ONE-CLICK DEMO INSTALL",
    description:
      "Import the demo data in one click and edit the content to suits your need. The easiest way to create an awesome website quickly.",
  },
  {
    icon: <FaHeadphones className="text-3xl text-red-500" />,
    title: "POWER ELITE SUPPORT",
    description:
      "Your theme package comes with 6 months of support included for free! We got a dedicated support forum with a very rich knowledge base and support staff tech guys to help you out.",
  },
  {
    icon: <FaLifeRing className="text-3xl text-red-500" />,
    title: "LIFETIME FREE UPDATES",
    description:
      "With Herion, you will get lifetime free updates. Updates may contain various theme improvements, bug fixes, and security updates.",
  },
  {
    icon: <FaMapMarkerAlt className="text-3xl text-red-500" />,
    title: "TRANSLATABLE READY",
    description:
      "Translation files are included to translate your site easily with plugins like Loco Translate or create a multilingual website using WPML.",
  },
  {
    icon: <FaCodeBranch className="text-3xl text-red-500" />,
    title: "CHILD THEME INCLUDED",
    description:
      "Herion comes packed with a ready-to-use child theme template in case you want to rebrand the theme for you or your client or if you want to add your own customization.",
  },
  {
    icon: <FaThList className="text-3xl text-red-500" />,
    title: "CONTENT BLOCKS",
    description:
      "Our integrated Content Block system allows you to create replicable headers, footers and sections of content that can be integrated into your pages.",
  },
  {
    icon: <FaBullhorn className="text-3xl text-red-500" />,
    title: "SOCIAL MEDIA INTEGRATION",
    description:
      "Integrates content from your favorite social media and music platform directly into your website, so your content is updated right away. Instagram, YouTube, Bandsintown, Spotify, Facebook, MailChimp and more...",
  },
  {
    icon: <FaCamera className="text-3xl text-red-500" />,
    title: "PHOTOS INCLUDED",
    description:
      "Except for disc artworks from the discography used for demo purpose, all photos are included and ready-to-use in your website without any additional license.",
  },
  {
    icon: <FaEnvelope className="text-3xl text-red-500" />,
    title: "CONTACT FORM 7",
    description:
      "Herion offers support for the most popular contact form plugin. Contact Form 7 is responsive, easy to use and effective.",
  },
];

export default function FeaturesGrid() {
  return (
    <div className="py-16 px-6 md:px-20 bg-white">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-4">
            <div>{feature.icon}</div>
            <div>
              <h3 className="font-bold uppercase text-sm">{feature.title}</h3>
              <p className="text-sm text-gray-600 mt-1">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
