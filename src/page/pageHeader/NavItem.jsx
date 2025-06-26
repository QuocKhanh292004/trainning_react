import React from "react";

export default function NavItem({ label, onHover, onLeave, isActive }) {
    return (
        <div
            className="relative"
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
        >
      <span
          className={`text-sm font-semibold px-1 pb-1 cursor-pointer transition-all duration-150 ${
              isActive
                  ? "border-b-2 border-black"
                  : "hover:border-b-2 hover:border-white"
          }`}
      >
        {label}
      </span>
        </div>
    );
}
