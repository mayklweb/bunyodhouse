import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { Flip, ScrollTrigger } from "gsap/all";
import { AlignJustify, Phone } from "lucide-react";

gsap.registerPlugin(Flip, ScrollTrigger);

function Header() {
  const header = useRef([]);

  useEffect(() => {
    const headerEl = header.current;

    // Initial entrance animation
    gsap.fromTo(
      headerEl,
      { yPercent: -100 },
      {
        yPercent: 0,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.5,
      }
    );

    // Scroll-triggered hide/show
    const scrollAnim = gsap
      .to(".header-row", {
        yPercent: -100,
        duration: 0.3,
        ease: "power2.out",
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
      className={`header w-full fixed top-0 left-0 z-10 `}
      ref={(el) => (header.current[0] = el)}
    >
      <div className="header-row bg-white w-full py-4 md:py-6 lg:py-8 flex justify-between items-center transition-all ease duration-500">
        <div className="container">
          <div className=" flex justify-between items-center relative">
            <button className="lg:hidden">
              <AlignJustify />
            </button>
            <div className="hidden lg:flex gap-4">
              <Link className="text-[#FFC045]" to={"main"}>
                ASOSIY
              </Link>
              <Link to={"main"}>BIZNING LOYIHALAR</Link>
              <Link to={"main"}>BIZ HAQIMIZDA</Link>
            </div>
            <div className="top-2/4 left-2/4 transform-gpu -translate-x-2/4 -translate-y-2/4 absolute">
              <Link to={"/"}>
                <img
                  src="/logo.svg"
                  alt="logo"
                  className="w-14 lg:w-20 object-contain"
                />
              </Link>
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
      </div>
    </header>
  );
}

export default Header;
