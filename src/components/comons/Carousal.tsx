"use client";

import React, { useEffect, useState } from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";
import { useRef } from "react";

const Carousal = () => {
  const [api, setApi] = useState<any>(null);
  useEffect(() => {
    if (!api) {
      return;
    }
    const interval = setInterval(() => {
      if (!api.canScrollNext()) {
        api.scrollTo(0);
      } else {
        api.scrollNext();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [api]);
  return (
    <>
      <div className="py-5 md:px-25  px-3">
        <div className="flex flex-col items-center justify-center">
          <h5 className="flex items-center justify-center">
            2,157 people have said how good Phonico
          </h5>
          <h1 className="flex mx-10 text-center md:flex-row flex-col items-center justify-center font-medium md:text-[50px] text-[30px] ">
            The Love We’ve Earned From Our
            <span className="text-(--btn-pink)">Users </span>
          </h1>
          <div className=" w-full flex justify-center relative ">
            <div className="h-100 w-[80%] bg-linear-to-r from-[#09a5e3] via-[#996e91] to-[#fff9bf]">
              <div className="absolute  left-0 w-full ">
                <Carousel setApi={setApi} className="w-full  mt-10">
                  <CarouselContent className="-ml-1">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <CarouselItem
                        key={index}
                        className="md:basis-1/2 basis-[85%] pl-1 lg:basis-1/3 "
                      >
                        <div className="p-1">
                          <Card className="h-80 border-none">
                            <CardContent className="aspect-square">
                              <div className="flex">
                                <Image
                                  height={16}
                                  width={96}
                                  src={"/5Stars.svg"}
                                  alt=""
                                />
                              </div>
                              <div>
                                <h1 className="font-bold mt-5">Easy to Use</h1>
                                <p className="mt-5">
                                  “You made it so simple. The Phonico app is
                                  much faster and easier to understand. I
                                  enjoyed the convenient activation process and
                                  flexibility.”
                                </p>

                                <div className="w-100 flex h-15 mt-7 gap-3">
                                  <div className="w-15 rounded-full flex justify-center items-center">
                                    <Image
                                      height={70}
                                      width={70}
                                      src={"/siteLogo.png"}
                                      alt=""
                                    />
                                  </div>
                                  <div className="flex flex-col justify-center">
                                    <h1 className="font-bold">Name</h1>
                                    <p>Hello here description </p>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousal;
