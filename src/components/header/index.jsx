import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import { Flip, ScrollTrigger } from "gsap/all";
import { AlignJustify, Phone } from "lucide-react";

gsap.registerPlugin(Flip, ScrollTrigger);

function Header() {
  const header = useRef([]);

  useEffect(() => {
    gsap.set(header.current, { yPercent: -100 });

    const tl = gsap.timeline({ delay: 0.4 });
    tl.to([document.querySelector(".header")], {
      yPercent: 0,
      duration: 1.4,
      ease: "power2.inOut",
    });
  }, []);
  return (
    <header className="header w-full fixed top-0 z-10 bg-white/30 backdrop-blur-md" ref={(el) => (header.current[0] = el)}>
      <div className="container">
        <div className="w-full py-6 flex justify-between items-center">
          <button className="lg:hidden">
            <AlignJustify />
          </button>
          <div className="hidden lg:flex gap-4">
            <Link to={"main"}>ASOSIY</Link>
            <Link to={"main"}>BIZNING LOYIHALAR</Link>
            <Link to={"main"}>BIZ HAQIMIZDA</Link>
          </div>
          <div className="top-2/4 left-2/4 transform-gpu -translate-x-2/4 -translate-y-2/4 absolute"> 
            <h1>LOGO</h1>
          </div>
          <button className="lg:hidden">
            <Phone size={24} strokeWidth={1.5} />
          </button>
          <div className="hidden lg:flex gap-4">
            <Link to={"main"}>BIZNING LOYIHALAR</Link>
            <Link to={"main"}>BIZ HAQIMIZDA</Link>
            <p></p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
