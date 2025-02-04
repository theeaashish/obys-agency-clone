import React, { useEffect, useState } from "react";
import Loader from "./components/Loader";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import gsap from "gsap";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

function App() {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector(".main-container"), 
      smooth: true, 
      lerp: 0.1, 
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  const [loaderComplete, setLoaderComplete] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoaderComplete(true);
    }, 2800); // Simulating loader time
  }, []);

  useEffect(() => {
    const handleMouseMove = (dets) => {
      gsap.to(".crsr", {
        left: dets.x,
        top: dets.y,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="main-container bg-[var(--main-bg)] min-h-screen">
      {!loaderComplete && <Loader />}

      <Loader />
      <NavBar animateNav={loaderComplete} />
      <Hero animateHero={loaderComplete} />
      <div className="crsr h-10 w-10 border border-zinc-400 fixed rounded-full transform z-999"></div>
    </div>
  );
}

export default App;
