import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const testimonials = [
  {
    quote:
      "Haven’t even finished my project yet and have already decided that this has to be one of the best themes I’ve ever had the pleasure of working with. It’s delightfully creative and bold in ways no other theme appears to be. Huge kudos for taking the risk and releasing something for a small niche – absolutely amazing work.",
    author: "PDUESTERDIEK (HYPERBENT)",
  },
  {
    quote:
      "The theme is beautiful and easy to use. The developers are responsive and helpful. Everything just works out of the box.",
    author: "MUSICPRODUCER21",
  },
  {
    quote:
      "I’ve tried dozens of WordPress themes, but this one stands out. It’s elegant, bold, and made for musicians like me.",
    author: "DJMIKEBEATZ",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
  },
};

export default function ReviewSlider() {
  return (
    <div
      className="relative bg-cover bg-center text-white py-24 px-6 text-center"
      style={{
        backgroundImage: `url('/your-background.jpg')`, // Replace with your actual image path
      }}
    >
      <h2 className="text-4xl md:text-5xl font-bold italic opacity-80">
        Making Music Themes Since <span className="text-white">2011</span>
      </h2>
      <h3 className="text-xl md:text-2xl font-extrabold mt-4 uppercase tracking-wide">
        Latest Music Theme Reviews
      </h3>

      <div className="max-w-4xl mx-auto mt-10">
        <Carousel
          responsive={responsive}
          infinite
          autoPlay
          autoPlaySpeed={5000}
          arrows={false}
          showDots
        >
          {testimonials.map((item, idx) => (
            <div key={idx}>
              <p className="text-lg md:text-xl leading-relaxed mb-4">
                {item.quote}
              </p>
              <p className="font-bold text-sm uppercase text-blue-300">
                — {item.author}
              </p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
