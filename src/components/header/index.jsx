import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { AlignJustify, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

function Header() {
  const header = useRef([]);
  const logo = useRef(null);
  const navLeft = useRef(null);
  const navRight = useRef(null);
  const menu = useRef(null);
  const call = useRef(null);



  useEffect(() => {
    const isMobile = window.innerWidth < 768; // adjust for your breakpoint
    // Initial states
    gsap.set(header.current, {
      height: "100vh",
      willChange: "height",
    });

    gsap.set(logo.current, {
      scale: 3,
    });

    gsap.set(navRight.current, {
      opacity: 0,
      y: 20,
    });

    gsap.set(navLeft.current, {
      opacity: 0,
      y: 20,
    });

    gsap.set([menu, call], {
      opacity: 0,
      y: 20,
    });

    const tl = gsap.timeline({
      defaults: { ease: 'power4' }, // smoother ease
    });
    
    tl.to(header.current, {
      height: isMobile ? "70px" : "100px",
      duration: 2.4,
    }, "start");
    
    tl.to(
      logo.current,
      {
        scale: 1,
        duration: 2.4,
      },
      "start"
    );
    
    tl.to(
      [call.current, menu.current],
      {
        opacity: 1,
        y: 0,
        duration: 2,
        stagger: 2.4,
      },
      "start"
    );
    
    tl.to(
      navRight.current,
      {
        opacity: 1,
        y: 0,
        duration: 2.4,
      },
      "start"
    );
    tl.to(
      navLeft.current,
      {
        opacity: 1,
        y: 0,
        duration: 2.4,
      },
      "start"
    );

    // Scroll-triggered hide/show
    const scrollAnim = gsap
      .to(header.current, {
        yPercent: -100,
        duration: 0.5,
        ease: "power2.inOut",
        paused: true,
      })
      .progress(0);

    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        if (self.direction === 1) {
          scrollAnim.play(); // scroll down
        } else {
          scrollAnim.reverse(); // scroll up
        }
      },
    });

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);


  return (
    <header
      className="header"
    >
      <div ref={header} className="header-row fixed top-0 left-0 bg-[#fff] z-50 overflow-hidden w-full py-4 md:py-6 lg:py-8 flex justify-between items-center transition-all ease duration-500 will-change-transform">

        {/* <div ref={header} className="header-row fixed top-0 left-0 h-screen bg-[#fff] z-50 overflow-hidden w-full py-4 md:py-6 lg:py-8 flex justify-between items-center transition-all ease duration-500"> */}
        <div className="container">
          <div className=" flex justify-between items-center relative">
            <button className="lg:hidden">
              <span ref={menu}>
                <AlignJustify />
              </span>
            </button>
            <div ref={navLeft} className="hidden lg:flex gap-4">
              <Link className="text-[#FFC045]" to={"main"}>
                ASOSIY
              </Link>
              <Link to={"main"}>BIZNING LOYIHALAR</Link>
              <Link to={"main"}>BIZ HAQIMIZDA</Link>
            </div>
            <div className="top-2/4 left-2/4 transform-gpu -translate-x-2/4 -translate-y-2/4 absolute">
              <Link to={"/"}>
                <img
                  ref={logo}
                  src="/logo.svg"
                  alt="logo"
                  className="w-14 lg:w-20 object-contain"
                />
              </Link>
            </div>
            <button className="lg:hidden">
              <span ref={call}>
                <Phone size={24} strokeWidth={1.5} />
              </span>
            </button>
            <div ref={navRight} className="hidden lg:flex gap-4">
              <Link to={"main"}>BIZNING LOYIHALAR</Link>
              <Link to={"main"}>BIZ HAQIMIZDA</Link>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
