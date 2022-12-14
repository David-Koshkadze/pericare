import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useTranslation } from "next-i18next";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    }

    return () => (document.body.style.overflowY = "auto");
  }, [isOpen, setIsOpen]);

  const categoryLinks = [
    {
      name: t("blog"),
      link: "/blog",
    },
    {
      name: t("pregnancy"),
    },
    {
      name: t("childbirth"),
    },
    {
      name: t("baby"),
    },
    {
      name: t("child"),
    },
    {
      name: t("ომი ukraine_warში"),
    },
    {
      name: "ჩვენ შესახებ",
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
            <a
              href="https://www.facebook.com/Pericare"
              target="_blank"
              rel="noreferrer"
            >
              <FaFacebookF className="header-icon w-6 h-6" />
            </a>
            <a
              href="https://www.youtube.com/@pericare"
              target="_blank"
              rel="noreferrer"
            >
              <FaYoutube className="header-icon w-6 h-6" />
            </a>
          </div>
        </div>
      ) : null}

      <header className="w-full hidden md:block">
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
              <a
                href="https://www.facebook.com/Pericare"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF className="header-icon" />
              </a>
              <a
                href="https://www.youtube.com/@pericare"
                target="_blank"
                rel="noreferrer"
              >
                <FaYoutube className="header-icon" />
              </a>
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
