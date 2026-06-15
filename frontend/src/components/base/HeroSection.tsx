import Image from "next/image";
import React from "react";

function HeroSection() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Image src={`/banner.svg`} alt="banner_img" height={600} width={600} />
    </div>
  );
}

export default HeroSection;
