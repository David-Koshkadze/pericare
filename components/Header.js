import React from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

export default function Header() {
  return (
    <>
      <div className="w-full flex justify-between items-center md:hidden px-4 bg-slate-200">
        <Link href="/">
          <img
            src="/assets/logo.png"
            className="w-20 mb-1 cursor-pointer"
            alt="logo"
          />
        </Link>

        <div>
          Menu
        </div>

      </div>

      <header className="w-full mt-2 hidden md:block">
        <div className="flex w-full justify-between">
          <Link href="/">
            <img
              src="/assets/logo.png"
              className="w-32 mb-1 cursor-pointer"
              alt="logo"
            />
          </Link>

          <div className="flex gap-6">
            <p>+995 593 55 56 40</p>
            <div className="flex gap-5">
              <Link href="https://www.facebook.com/Pericare">
                <FaFacebookF className="header-icon" />
              </Link>
              <Link href="youtube.com">
                <FaInstagram className="header-icon" />
              </Link>
            </div>
          </div>
        </div>

        <nav className="nav__items flex justify-between w-full h-[42px]">
          <div className="nav-link">Pregnancy</div>
          <div className="nav-link">Birth</div>
          <div className="nav-link">Baby</div>
          <div className="nav-link">Child</div>
          <div className="nav-link">Ukraine</div>
          <div className="nav-link">About Us</div>
        </nav>
      </header>
    </>
  );
}
