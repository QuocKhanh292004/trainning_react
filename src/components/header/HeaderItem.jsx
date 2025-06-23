import React, { useState, useEffect } from "react";

function HeaderItem() {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowHeader(window.scrollY <= 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`w-full fixed top-0 left-0 z-50 transition-opacity duration-500 ${
        showHeader ? "opacity-100" : "opacity-0 pointer-events-none"
      } bg-white text-black px-6 py-3 flex justify-between items-center`}
    >
      <div className="font-bold">H</div>
      <div>BUY NOW</div>
    </div>
  );
}

export default HeaderItem;
