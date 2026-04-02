import React from "react";

function Hero() {
  return (
    <div className="flex justify-center px-3 sm:px-6 py-6 sm:py-10">
      <div className="bg-destructive/8 w-full max-w-5xl rounded-xl px-4 sm:px-8 py-8 sm:py-12">
        <div className="flex flex-col items-center gap-3 text-center">

          {/* Badge */}
          <button className="bg-destructive/15 rounded-xl text-[14px] px-4 h-7">
            our Blogs
          </button>

          {/* Heading */}
          <h1 className="font-bold text-[32px] sm:text-[42px] md:text-[50px] leading-tight">
            Learn with <span className="text-(--btn-pink)">Phonico</span>
          </h1>

          {/* Subtitle */}
          <p className="text-[15px] sm:text-[18px] md:text-[20px] max-w-2xl text-ring leading-relaxed">
            Stay informed and sweeten your eSIM experience with our expert
            insights and practical tips.
          </p>

          {/* Search bar */}
          <div className="flex w-full max-w-md mt-1">
            <input
              className="flex-1 min-w-0 h-11 bg-background border border-ring px-3 text-[15px] rounded-l-[5px] focus:outline-none"
              type="text"
              placeholder="Search blogs"
            />
            <button className="bg-(--btn-pink) text-background text-sm font-medium px-5 h-11 rounded-r-[5px] shrink-0 hover:opacity-90 transition-opacity">
              Search
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Hero;