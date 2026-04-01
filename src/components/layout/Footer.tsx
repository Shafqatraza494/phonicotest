import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <>
      <div className="flex md:flex-row container w-full flex-col justify-between py-10 md:px-15 px-3 ">
        <div className="md:w-[33%]">
          <Image height={90} width={90} src={"/siteLogo.png"} alt="image" />
          <p className="text-[16px] md:w-85 py-5 text-black">
            Stay Connected, Anytime and Anywhere with Phonico! Your Journey, Our
            Commitment to Unbeatable Connectivity.
          </p>
          <div className="flex gap-3  ">
            <Phone className="text-(--btn-pink) flex items-center" />
            <h1 className="w-full">
              <span className="text-(--btn-pink)">(484)746-6426</span>
            </h1>
          </div>
          <div className="flex gap-3 text-[20px] items-center mt-5">
            <Mail className="text-(--btn-pink)" />
            <h1>
              <span className="text-(--btn-pink)">support@phonico.com</span>
            </h1>
          </div>
          <div className="flex md:flex-row md:gap-10 gap-8 w-full mt-5">
            <Link href={"https://www.instagram.com/"}>
              <Instagram />
            </Link>
            <Link href={"https://www.linkedin.com/"}> <Linkedin /></Link>
            <Link href={"https://www.facebook.com/"}> <Facebook /></Link>
            <Link href={"https://x.com/"}><Twitter /></Link>
          </div>
        </div>
        <div className="w-[33%] flex  justify-center  flex-col gap-5">
          <h1 className="md:text-[24px]   mt-5 font-bold">Quick Links</h1>
          <ul className="gap-3 flex flex-col">
            <Link href={"/"}>
              <li>Home</li>
            </Link>
            <Link href={"/blogs"}>
              <li>Blog</li>
            </Link>
            <li>Term of use</li>
            <li>Privacy of policy</li>
          </ul>
        </div>
        <div className="w-[33%]">
          <h1 className="flex font-bold text-[24px]  md:mt-15">
            Download the App now
          </h1>
          <div className="flex  gap-5 mt-5 ">
            <Link href={"https://apps.apple.com/"}>
              <Image height={40} width={150} src={"/appleLink.svg"} alt="" />
            </Link>
            <Link href={"https://play.google.com/"}>
              <Image height={40} width={150} src={"/playLink.svg"} alt="" />
            </Link>
          </div>
        </div>
      </div>
      <h1 className="flex  justify-center m-auto pb-6">
        Phonico © 2026. All Rights Reserved
      </h1>
    </>
  );
}

export default Footer;
