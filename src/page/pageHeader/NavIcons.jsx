import React from "react";
import {
    faUser,
    faHeart,
    faShoppingCart,
    faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function NavIcons() {
    return (
        <div className="flex items-center space-x-5 text-gray-700">
            <FontAwesomeIcon icon={faUser} className="cursor-pointer text-lg" />
            <FontAwesomeIcon icon={faHeart} className="cursor-pointer text-lg" />
            <FontAwesomeIcon icon={faShoppingCart} className="cursor-pointer text-lg" />
            <FontAwesomeIcon icon={faBars} className="cursor-pointer text-lg" />
        </div>
    );
}
