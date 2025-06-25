import React from "react";
import {
  faSpotify,
  faYoutube,
  faInstagram,
  faFacebook,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaHandRock } from "react-icons/fa"; // icon Rock
import { SiMailchimp } from "react-icons/si";
import { motion } from "framer-motion";

const socialIcons = [
  { icon: faSpotify, key: "spotify" },
  { icon: faYoutube, key: "youtube" },
  { icon: faInstagram, key: "instagram" },
  { icon: "rock", key: "rock" }, // đặc biệt
  { icon: faTwitter, key: "twitter" },
  { icon: faFacebook, key: "facebook" },
  { icon: "mailchimp", key: "mailchimp" },
];

function Integration() {
  return (
      <div className="relative w-full h-screen overflow-hidden">
        <video
            className="absolute top-0 left-0 w-full h-full object-cover z-0 brightness-40"
            src="https://preview.wolfthemes.store/app/uploads/sites/31/2019/12/People-Watching-Concert-FREE-STOCK-FOOTAGE-1080p-FULL-HD.mp4"
            autoPlay
            loop
            muted
            playsInline
        ></video>

        {/* Overlay đen mờ để dễ đọc chữ */}
        <div className="absolute inset-0 bg-opacity-60 z-10"></div>

        {/* Nội dung */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-white text-center px-4">
          <motion.h2
              className="text-5xl font-pacifico text-gray-300"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
          >
            Social Integration
          </motion.h2>

          <motion.h3
              className="text-2xl font-oswald font-bold mt-2 uppercase"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
          >
            Social Network & Music Platform Oriented
          </motion.h3>

          <motion.p
              className="mt-4 max-w-3xl text-sm md:text-base text-gray-300"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
          >
            Embed your music and social feeds seamlessly with Herion. Display your
            media and content directly from Spotify, YouTube, Instagram,
            Bandsintown, Twitter and more...
          </motion.p>

          {/* Icon mạng xã hội */}
          <div className="flex flex-wrap gap-6 justify-center items-center mt-10 text-4xl">
            {socialIcons.map((item, index) => (
                <motion.div
                    key={item.key}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    viewport={{ once: true }}
                >
                  {item.icon === "rock" ? (
                      <FaHandRock />
                  ) : item.icon === "mailchimp" ? (
                      <SiMailchimp />
                  ) : (
                      <FontAwesomeIcon icon={item.icon} />
                  )}
                </motion.div>
            ))}
          </div>

          <motion.p
              className="mt-6 text-sm text-gray-300 italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
          >
            and more...
          </motion.p>
        </div>
      </div>
  );
}

export default Integration;
