import Image from "next/image";
import React from "react";

interface propstypes {
  head: string;
  headspan: string;
  headtwo: string;
  img: string;
  para: string;
}

function Interdoucing({ head, headspan, headtwo, img, para }: propstypes) {
  return (
    <>
      <div className="py-5 md:px-15 px-3 ">
        <div className=" w-full rounded-[50px] bg-ring/15 ">
          <div className="flex md:flex-row flex-col justify-between px-6 py-5 md:px-0 md:py-0">
            <div className="md:mx-10 md:w-[50%]  w-full">
              <h1 className=" font-medium md:text-[50px]   text-[30px]  ">
                {head}
                <span className="text-(--btn-pink)"> {headspan}</span> {headtwo}
              </h1>
              <h1 className=" md:text-[20px] text-[15px]">{para}</h1>
              <h1 className="font-bold mt-5 text-[20px]">
                Download the App now
              </h1>
              <div className="flex md:flex-row flex-col gap-5 mt-5">
                <Image height={60} width={190} src={"/appleLink.svg"} alt="" />
                <Image height={60} width={190} src={"/playLink.svg"} alt="" />
              </div>
            </div>
            <div className="flex justify-center w-[50%] mt-10">
              <Image src={img} height={571} width={281} alt="img" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Interdoucing;
