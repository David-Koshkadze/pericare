import React from "react";
import hero_cover from "../assets/hero_cover.jpg";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="mt-8">
      <Image src={hero_cover} alt="hero cover" />
    </div>
  );
}
