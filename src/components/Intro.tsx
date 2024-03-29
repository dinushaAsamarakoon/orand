import React from "react";

const Intro = () => {
  return (
    <div
      className="flex w-full h-full pb-10 justify-center bg-[#043873] pt-44 top-0 sm:px-0 px-2"
      id="home"
    >
      <div
        className="flex w-full h-full justify-center"
        style={{
          backgroundImage: `url(/assets/images/intro_wind.png)`,
          backgroundSize: "100% 100%",
        }}
      >
        <div className="grid sm:grid-cols-2">
          <div className="flex flex-col justify-center items-start mx-auto sm:mx-5 lg:mx-20 my-auto">
            <h1 className="flex flex-wrap my-3 text-3xl sm:text-5xl font-inter text-white">
              MAKE YOUR IMAGINATION REAL
            </h1>
            <p className="my-3 text-white">
              Design based software which allows you or your company to make
              your website, Create your design and SEO.
            </p>
            <div className="w-full flex flex-wrap justify-start my-3">
              <button className="flex flex-row bg-[#4F9CF9] px-8 py-2 rounded-lg items-center">
                <span className="mr-2 text-white">Contact Us</span>
                <img src="/assets/icons/right_arrow_white.svg" />
              </button>
            </div>
          </div>
          <div className="">
            <img src="/assets/images/intro_section.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
