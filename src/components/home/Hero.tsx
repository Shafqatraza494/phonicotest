"use client";

import React from "react";
import Image from "next/image";
import Button from "@/components-button/Button";

function Hero() {
  return (
    <div className="px-4 sm:px-6 lg:px-16 py-8 flex flex-col md:flex-row items-center gap-8">
      {/* LEFT: Text Section */}
      <div className="flex-1">
        <h2 className="tracking-[0.8px] text-lg sm:text-xl font-semibold">
          Phonico - Your Gateway to USA Connectivity
        </h2>

        <img
          className="mt-2"
          src="https://phonico.com/images/blueLine.svg"
          alt=""
        />

        <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-light leading-snug">
          Stay Connected With <span className="text-(--btn-pink)">Phonico</span>{" "}
          eSIM Across <br />
          The USA, Instantly!
        </h1>

        <p className="text-base sm:text-lg lg:text-xl mt-4 max-w-lg font-light">
          With Phonico eSIM, getting online in the U.S. is fast, easy, and
          completely digital. No KYC and no restrictions on Hotspot Sharing or
          Tethering. Select your Plan, Scan the QR, Activate, and Explore with
          uninterrupted coverage in all 50 states of the USA. Starting from
          $15/Month!
        </p>

        <div className="mt-6">
          <Button>Get Your USA eSIM Now</Button>
        </div>
      </div>

      {/* RIGHT: Image Section */}
      <div className="flex-1 flex justify-center md:justify-end">
        <div className="w-full max-w-sm md:max-w-md lg:max-w-lg mt-6 md:mt-0">
          <Image
            alt="hero image"
            src="/femaleHero2.webp"
            width={498}
            height={631}
            className="w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
