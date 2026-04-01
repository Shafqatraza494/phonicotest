import React from "react";

function Hero() {
  return (
    <>
      <div className="flex justify-center">
        <div className="px-3 py-10 bg-destructive/8 w-[90%] h-70 ">
          <div className=" justify-center items-center flex  flex-col gap-2">
            <button className="bg-destructive/15 rounded-xl text-[14px] w-20 h-7">
              our Blogs
            </button>
            <h1 className="font-bold text-[50px]">
              Learn with <span className="text-(--btn-pink)">Phonico</span>
            </h1>
            <p className="text-[20px]">
              Stay informed and sweeten your eSIM experience with our expert
              insights and practical tips.
            </p>
            <div className="w-[35%]">
              <input
                className="h-10 w-[70%] bg-background border border-ring p-3 text-[16px] "
                type="text"
                placeholder="Search blogs"
                name=""
                id=""
              />
              <button className=" bg-(--btn-pink) rounded-[5px] text-background  w-20 h-11">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
