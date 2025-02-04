import React, {useEffect} from "react";
import Loader from "./components/Loader";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import { gsap } from "gsap";

function App() {


  useEffect(() => {
    const handleMouseMove = (dets) => {
      gsap.to('.crsr', {
        left: dets.x, 
        top: dets.y,
        duration: 0.3,              
        ease: "power2.out",
      });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="bg-[var(--main-bg)] min-h-screen">
      <Loader />
      <NavBar />
      <Hero />
      <div className="crsr h-10 w-10 border border-zinc-400 fixed rounded-full transform z-999"></div>
    </div>
  );
}

export default App;
