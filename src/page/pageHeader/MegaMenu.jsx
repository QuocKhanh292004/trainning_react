import React from "react";

const menuData = [
    {
        title: "HOMEPAGES *1",
        items: ["Main Home", "Home Alt", "Band Home", "One-Page", "Minimal"],
    },
    {
        title: "HOMEPAGES *2",
        items: ["Studio", "DJ Events", "Festival", "Interactive", "Slider"],
    },
    {
        title: "HOMEPAGES *3",
        items: ["Videos", "Metro", "Discography", "Blog", "Shop"],
    },
];

export default function MegaMenu({ label }) {
    return (
        <div className="w-full px-8 py-8 transition-all duration-300 ease-out">
            <div className="w-full flex justify-between items-start gap-10">
                {menuData.map((col) => (
                    <div key={col.title} className="space-y-1 min-w-[200px]">
                        <h3 className="font-bold text-sm mb-2 uppercase">{col.title}</h3>
                        {col.items.map((item) => (
                            <p key={item} className="text-gray-700 text-sm hover:underline cursor-pointer">
                                {item}
                            </p>
                        ))}
                    </div>
                ))}

                <div className="space-y-2">
                    <h3 className="font-bold text-sm mb-2 uppercase">Landing</h3>
                    <img
                        src="https://cdn.pixabay.com/photo/2016/11/29/04/17/record-player-1868289_1280.jpg"
                        alt="Landing"
                        className="w-52 rounded-md shadow"
                    />
                </div>
            </div>
        </div>
    );
}
