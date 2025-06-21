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
        <h2 className="text-5xl font-pacifico text-gray-300">
          Social Integration
        </h2>
        <h3 className="text-2xl font-oswald font-bold mt-2 uppercase">
          Social Network & Music Platform Oriented
        </h3>
        <p className="mt-4 max-w-3xl text-sm md:text-base text-gray-300">
          Embed your music and social feeds seamlessly with Herion. Display your
          media and content directly from Spotify, YouTube, Instagram,
          Bandsintown, Twitter and more...
        </p>

        {/* Icon mạng xã hội */}
        <div className="flex flex-wrap gap-6 justify-center items-center mt-10 text-4xl">
          <FontAwesomeIcon icon={faSpotify} />
          <FontAwesomeIcon icon={faYoutube} />
          <FontAwesomeIcon icon={faInstagram} />
          <FaHandRock /> {/* Rock icon */}
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faFacebook} />
          <SiMailchimp />
        </div>

        <p className="mt-6 text-sm text-gray-300 italic">and more...</p>
      </div>
    </div>
  );
}

export default Integration;
