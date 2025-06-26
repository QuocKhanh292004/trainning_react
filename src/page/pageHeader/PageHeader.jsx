import React, { useState } from "react";
import NavItem from "./NavItem";
import NavIcons from "./NavIcons";
import MegaMenu from "./MegaMenu";

export default function PageHeader() {
    const [activeMenu, setActiveMenu] = useState(null);

    const navItems = [
        "HOME",
        "PAGES",
        "RELEASES",
        "ARTISTS",
        "EVENTS",
        "VIDEOS",
        "SHOP",
        "BLOG",
        "ELEMENTS",
    ];

    return (
        <header className="relative z-50 bg-white border-b border-gray-200">
            <div className="flex items-center justify-between px-8 py-4">
                {/* Logo */}
                <div className="text-3xl font-black italic text-gray-800">𝄞</div>

                {/* Menu */}
                <nav className="flex gap-8">
                    {navItems.map((item) => (
                        <NavItem
                            key={item}
                            label={item}
                            onHover={() => setActiveMenu(item)}
                            onLeave={() => setActiveMenu(null)}
                            isActive={activeMenu === item}
                        />
                    ))}
                </nav>

                {/* Icons */}
                <NavIcons />
            </div>

            {/* MegaMenu full width nằm dưới toàn bộ header */}
            {activeMenu && (
                <div
                    onMouseLeave={() => setActiveMenu(null)}
                    className="absolute top-full left-0 w-screen bg-white shadow-xl border-t border-gray-200"
                >
                    <MegaMenu label={activeMenu} />
                </div>
            )}
        </header>
    );
}
