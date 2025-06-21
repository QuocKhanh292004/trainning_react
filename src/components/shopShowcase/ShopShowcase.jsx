import React, { useRef, useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const images = [
  {
    src: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/12/store-alt.jpg",
    alt: "Shop 1",
  },
  {
    src: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/12/checkout.jpg",
    alt: "Shop 2",
  },
  {
    src: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/12/cart.jpg",
    alt: "Shop 3",
  },
  {
    src: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/12/product-mp3.jpg",
    alt: "Shop 4",
  },
  {
    src: "https://preview.wolfthemes.store/app/uploads/sites/31/2019/12/store-alt.jpg",
    alt: "Shop 5",
  },
];

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

function ShopShowcase() {
  const carouselRef = useRef();
  const [itemsToShow, setItemsToShow] = useState(3);

  // Cập nhật số lượng ảnh đang hiển thị dựa vào kích thước màn hình
  useEffect(() => {
    const updateItemsToShow = () => {
      const width = window.innerWidth;
      if (width >= 1024) setItemsToShow(3);
      else if (width >= 768) setItemsToShow(2);
      else setItemsToShow(1);
    };
    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const handleClick = (index) => {
    const centerIndex = Math.max(0, index - Math.floor(itemsToShow / 2));
    if (carouselRef.current) {
      carouselRef.current.goToSlide(centerIndex, true);
    }
  };

  return (
    <div className="bg-white py-20 px-6 md:px-20">
      <h2 className="text-center text-5xl font-pacifico text-gray-600 mb-2">
        Sell Your Merch
      </h2>
      <h3 className="text-center text-2xl font-oswald font-bold uppercase mb-6">
        WooCommerce Shop
      </h3>
      <p className="text-center text-gray-500 max-w-4xl mx-auto text-sm md:text-base mb-10">
        Sell your merch online using the most powerful and secure e-commerce
        WordPress theme: WooCommerce. Herion is built to integrate WooCommerce
        smoothly in its design.
      </p>

      <Carousel
        ref={carouselRef}
        responsive={responsive}
        infinite={false}
        autoPlay={false}
        arrows={true}
        draggable={true}
        swipeable={true}
        keyBoardControl={true}
        containerClass="carousel-container"
        itemClass="px-4 cursor-pointer"
      >
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            onClick={() => handleClick(index)}
            className="w-full rounded-xl shadow-md transition-all hover:scale-105"
          />
        ))}
      </Carousel>
    </div>
  );
}

export default ShopShowcase;
