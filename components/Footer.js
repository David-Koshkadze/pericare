import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Image from "next/image";

function FooterIcon({ children, link }) {
  return (
    <div className="bg-white rounded-full w-10 h-10 grid place-content-center">
      <a href={link} target="_blank" rel="noreferrer">
        {children}
      </a>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="w-full bg-[#666666] pt-10 pb-10 text-white ">
      <div className="max-w-[1050px] mx-auto px-4 lg:px-0 relative">
        <div className="flex justify-between flex-col md:flex-row">
          <div className="footer__links flex flex-col gap-2 w-auto md:w-full ">
            <a href="#">Contact us</a>
            <a href="#">About us</a>
          </div>

          <div className="mt-10 md:mt-0">
            <div className="flex flex-col md:flex-row gap-10 mr-0 md:mr-40">
              <div className="flex gap-4 absolute top-0 right-4 md:relative">
                <FooterIcon>
                  <FaFacebookF className="header-icon" />
                </FooterIcon>
                <FooterIcon>
                  <FaInstagram className="header-icon" />
                </FooterIcon>
              </div>

              <div className="w-full">
                <img className="h-14" src="/assets/women_logo.png" />
                <p>
                  ძლიერი, თანასწორუფლებიანი, აღიარებული და ბედნიერი ქალი -
                  თავისუფალ, უსაფრთხო, სამართლიან სამყაროში.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
