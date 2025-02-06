import React, { useEffect, useState } from "react";
import gsap from "gsap";

function Loader({ setLoaderComplete }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const headings = gsap.utils.toArray("h1");

    gsap.fromTo(
      headings,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        // delay: 0.5,
      }
    );
  }, []);

  useEffect(() => {
    if (count >= 100)
      gsap.to("#main", {
        display: "none",
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        onComplete: () => setLoaderComplete,
      });
    return;
  }, [count, setLoaderComplete]);

  useEffect(() => {
    if (count >= 100) return;
    const interval = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 28);
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div
      id="main"
      className="bg-[var(--loader-bg)] fixed text-white h-[100vh] w-[100vw] flex flex-col  justify-center px-25 z-100"
    >
      <div className="flex flex-col -space-y-[3vw] ">
        <div className="Loader size-fit overflow-hidden flex items-start justify-center gap-18 px-20">
          <div className="Loader flex text-[3vw] gap-2 py-[1.8vw]">
            <h2 className="w-[5vw]">{count}</h2>
            <h2>- 100</h2>
          </div>
          <h1 className="heading text-[7vw]">YOUR</h1>
        </div>
        <div className="Loader size-fit overflow-hidden">
          <h1 className="heading text-[7vw]">WEB EXPERIENCE </h1>
        </div>
        <div className="Loader size-fit overflow-hidden">
          <h1 className="heading text-[7vw] h-50">IS LOADING RIGHT NOW</h1>
        </div>
      </div>
      <div className="text-center size-fit w-[55%]">
        <h3>Please wait</h3>
        <h3>a few seconds.</h3>
      </div>
    </div>
  );
}

export default Loader;
