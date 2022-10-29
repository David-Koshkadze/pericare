import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    }

    return () => (document.body.style.overflowY = "auto");
  }, [isOpen, setIsOpen]);

  const categoryLinks = [
    {
      name: "blog",
      link: "/blog"
    },
    {
      name: "pregnancy"
    },
    {
      name: "birth"
    },
    {
      name: "baby"
    },
    {
      name: "child"
    },
    {
      name: "Ukraine"
    },
    {
      name: "about us",
      link: "/about_us"
    }
  ];

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

        <div onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </div>
      </div>

      {isOpen ? (
        <div className="bg-gray-200 h-screen w-full flex flex-col pt-8 gap-4">
          {categoryLinks.map((item, idx) => (
            <div key={idx} className="mx-auto">
              <Link href="/">{item}</Link>
            </div>
          ))}
        </div>
      ) : null}

      <header className="w-full mt-2 hidden md:block">
        <div className="flex w-full justify-between">
          <Link href="/">
            <img
              src="/assets/logo.png"
              className="w-32 mb-1 cursor-pointer"
              alt="logo"
            />
          </Link>

          <div className="flex gap-6 items-center">
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
          {categoryLinks.map((item, idx) => (
            <div key={idx} className="nav-link">
              <Link href={item.link ? `${item.link}` : "/"} passHref>
                <a href={item.link ? `${item.link}` : "/"} rel="noopener">
                  {item.name}
                </a>
              </Link>
            </div>
          ))}
        </nav>
      </header>
    </>
  );
}
