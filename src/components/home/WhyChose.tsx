import { CalendarRange, Construction, Headset } from "lucide-react";
import Image from "next/image";
import React from "react";

interface propstypes {
  img: string;
  head: string;
  headspan: string;
  headtwo: string;
  para: string;
}

function WhyChose({ img, head, headspan, headtwo, para }: propstypes) {
  return (
    <>
      <div className="py-5 md:px-15 p-3">
        <div className="flex md:flex-row flex-col justify-between bg-[url('/wavyBlobRight.svg')] bg-cover bg-center">
          <div className="md:w-[50%]">
            <h1 className="font-medium leading-15 md:text-[50px] text-[30px]">
              {head} <br />
              <span className="text-(--btn-pink)">{headspan}</span> {headtwo}
            </h1>
            <h1 className="w-full mt-5 md:text-[20px] text-[10px]">{para}</h1>
          </div>
          <div className="">
            <Image height={531} width={420} src={img} alt="" />
          </div>
        </div>
        <div className=" w-full  mt-20 flex  items-center  rounded-2xl md:border-ring md:border ">
          <div className="w-full flex md:flex-row flex-col gap-5 md:items-center justify-between">
            <h1 className="font-bold md:w-[20%] text-[25px] ml-4 md:p-4 ">
              Uninterrupted Connectivity Across the USA
            </h1>
            <div className="flex  items-center gap-5">
              <Construction size={60} />
              <h1 className="text-[20px]">
                Effortless <br /> Coverage
              </h1>
            </div>
            <div className="flex items-center gap-5">
              <CalendarRange size={60} />
              <h1 className="text-[20px]">
                Custom Plans <br /> To Choose
              </h1>
            </div>
            <div className="flex gap-2 mr-4 text-[20px]">
              {" "}
              <Headset size={60} />
              <h1 className="flex items-center">24/7 Support</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChose;
