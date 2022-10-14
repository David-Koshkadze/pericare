import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function FooterIcon({ children, link }) {
  return (
    <div className="bg-white rounded-full w-10 h-10 grid place-content-center">
      <a href={link} target="_blank">
        {children}
      </a>
    </div>
  );
}

export default function Footer() {
  return (
    <div className="w-full bg-[#666666] pt-10 pb-10 text-white">
      <div className="w-[1050px] mx-auto">
        <div className="flex justify-between">
          <div className="footer__links flex flex-col gap-2">
            <a href="#">Contact us</a>
            <a href="#">About us</a>
            <a href="#">A-Z topics</a>
            <a href="#">Symptom Checker</a>
            <a href="#">Terms of use</a>
            <a href="#">Privacy</a>
          </div>

          <div className="flex gap-4">
            <FooterIcon>
              <FaFacebookF className="header-icon" />
            </FooterIcon>
            <FooterIcon>
              <FaTwitter className="header-icon" />
            </FooterIcon>
            <FooterIcon>
              <FaInstagram className="header-icon" />
            </FooterIcon>
          </div>
        </div>
      </div>
    </div>
  );
}
