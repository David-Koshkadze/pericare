import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
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
      name: "ბლოგი",
      link: "/blog",
    },
    {
      name: "ორსულობა",
    },
    {
      name: "მშობიარობა",
    },
    {
      name: "ახალშობილი",
    },
    {
      name: "ბავშვი",
    },
    {
      name: "უკრაინა",
    },
    {
      name: "ჩვენს შესახებ",
      link: "/about_us",
    },
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
            <div key={idx} className="mx-auto mb-4">
              <Link href={item.link ? `${item.link}` : "/"}>
                <a
                  href={item.link ? `${item.link}` : "/"}
                  rel="noopener"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              </Link>
            </div>
          ))}
          <div className="mx-auto mt-10 flex gap-8">
            <Link href="https://www.facebook.com/Pericare">
              <FaFacebookF className="header-icon w-6 h-6"/>
            </Link>
            <Link href="youtube.com">
              <FaYoutube className="header-icon w-6 h-6" />
            </Link>
          </div>
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
            <div className="flex gap-5">
              <Link href="https://www.facebook.com/Pericare">
                <FaFacebookF className="header-icon" />
              </Link>
              <Link href="youtube.com">
                <FaYoutube className="header-icon" />
              </Link>
            </div>
          </div>
        </div>

        <nav className="nav__items flex justify-between w-full h-[42px]">
          {categoryLinks.map((item, idx) => (
            <Link key={idx} href={item.link ? `${item.link}` : "/"} passHref>
              <a
                href={item.link ? `${item.link}` : "/"}
                rel="noopener"
                className="nav-link"
              >
                {item.name}
              </a>
            </Link>
          ))}
        </nav>
      </header>
    </>
  );
}
