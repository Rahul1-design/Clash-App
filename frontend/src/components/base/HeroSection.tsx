import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

function HeroSection() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div>
        <img src={`/banner.svg`} alt="banner_img" height={600} width={600} />
      </div>
      <div className="text-center mt-4">
        <h1 className="text-6xl md:7xl lg:text-9xl font-extrabold bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Clash
        </h1>
        <p className="text-2xl md:text-3xl lg:text-4xl font-bold">
          Discover the better choice, together
        </p>
        <Link href={`/login`}>
          <Button className="mt-2 cursor-pointer text-xl">Start free</Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
