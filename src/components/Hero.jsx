import React from "react";

function Hero() {

  return (
    <div>
      <div className="text-white flex justify-center py-20 px-25 z-100">
        <div className="py-6 w-34 Loader">
            <h2 className="text-[3vw]">
                01
            </h2>
        </div>
        <div className="flex flex-col -space-y-[3vw] uppercase items-start">
          <div className="Loader size-fit overflow-hidden">
            <div className="Loader flex text-[3vw]"></div>
            <h1 className="heading text-[7vw]">We design</h1>
          </div>
          <div className="Loader size-fit overflow-hidden">
            <h1 className="heading text-[7vw]">unique</h1>
          </div>
          <div className="Loader size-fit overflow-hidden">
            <h1 className="heading text-[7vw]">web /graphic</h1>
          </div>
          <div className="Loader size-fit overflow-hidden">
            <h1 className="heading text-[7vw]">Experience</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
