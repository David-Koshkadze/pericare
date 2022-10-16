import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
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
      <div className="w-[1050px] mx-auto">
        <div className="flex justify-between">
          <div className="footer__links flex flex-col gap-2 w-auto md:w-full ">
            <a href="#">Contact us</a>
            <a href="#">About us</a>
          </div>

          <div>
            <div className="flex flex-col md:flex-row gap-10 mr-0 md:mr-40">
              <img className="h-14" src="/assets/women_logo.png" />
              <p>
                ძლიერი, თანასწორუფლებიანი, აღიარებული და ბედნიერი ქალი -
                თავისუფალ, უსაფრთხო, სამართლიან სამყაროში.
              </p>
            </div>

            <div className="flex gap-4">
              <FooterIcon>
                <FaFacebookF className="header-icon" />
              </FooterIcon>
              <FooterIcon>
                <FaInstagram className="header-icon" />
              </FooterIcon>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
