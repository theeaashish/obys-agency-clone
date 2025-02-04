import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function Hero({ animateHero }) {
  const heroRef = useRef(null);

  useEffect(() => {
    if (animateHero) {
      const heroItems = heroRef.current.querySelectorAll("h1");
      gsap.fromTo(
        heroItems,
        { y: 150, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
        }
      );
    }
  }, [animateHero]);

  return (
    <div>
      <div className="text-white flex justify-center py-20 px-25">
        <div className="py-6 w-34 Loader">
          <h2 className="text-[3vw]">01</h2>
        </div>
        <div ref={heroRef} className="flex flex-col -space-y-[3vw] uppercase items-start">
          <div className="Loader size-fit overflow-hidden">
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
