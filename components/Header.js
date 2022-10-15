import React from "react";
import Image from "next/image";

import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Header() {
  return (
    <header className="w-full mt-2">
      <div className="flex w-full justify-between">
        <div className="w-32 mb-1">
          <img src="/assets/logo.png" alt="logo" />
        </div>

        <div className="flex gap-6">
          <p>+995 593 55 56 40</p>
          <div className="flex gap-5">
            <FaFacebookF className="header-icon" />
            <FaTwitter className="header-icon" />
            <FaInstagram className="header-icon" />
          </div>
        </div>
      </div>

      <nav className="nav__items flex justify-between w-full h-[42px]">
        <div className="nav-link">Pregnancy</div>
        <div className="nav-link">Birth</div>
        <div className="nav-link">Baby</div>
        <div className="nav-link">Child</div>
        <div className="nav-link">A-Z topics</div>
        <div className="nav-link">Tools and services</div>
      </nav>
    </header>
  );
}
