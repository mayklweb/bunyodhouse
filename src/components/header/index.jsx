"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { AlignJustify, Phone } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

function Header() {
  const header = useRef([]);
  const logo = useRef(null);
  const navLeft = useRef(null);
  const navRight = useRef(null);
  const menu = useRef(null);
  const call = useRef(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    gsap.set(header.current, {
      height: "100%",
      willChange: "height",
      backgroundColor: "white",
      backdropFilter: "blur(0px)",
    });

    gsap.set(logo.current, {
      scale: 3,
      willChange: "transform",
    });

    gsap.set(navRight.current, {
      opacity: 0,
      y: 20,
    });

    gsap.set(navLeft.current, {
      opacity: 0,
      y: 20,
    });

    gsap.set([menu.current, call.current], {
      opacity: 0,
      y: 20,
    });

    const tl = gsap.timeline({
      defaults: { delay: 1, duration: 1, ease: "power3.inOut", stagger: 0.2, smoothOrigin: true, },
    });

    tl.to(header.current, {
      height: isMobile ? "80px" : "120px",
      duration: 3,
      backgroundColor: "transparent",
      backdropFilter: "blur(10px)",
    }, "end");

    tl.to(
      logo.current,
      {
        scale: 1,
        duration: 1.4,

      },
      "1"
    );

    tl.to(
      [call.current, menu.current],
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
      },
      "1.4"
    );

    tl.to(
      navRight.current,
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
      },
      "1.4"
    );
    tl.to(
      navLeft.current,
      {
        opacity: 1,
        y: 0,
        duration: 1.4,
      },
      "1.4"
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
      <div ref={header} className="header-row fixed top-0 left-0 z-50 overflow-hidden w-full py-4 md:py-6 lg:py-8 flex justify-between items-center  will-change-transform">

        <div className="container">
          <div className=" flex justify-between items-center relative">
            <button className="lg:hidden">
              <span ref={menu}>
                <AlignJustify />
              </span>
            </button>
            <div ref={navLeft} className="hidden lg:flex gap-4">
              <Link className="text-[#FFC045]" href={"main"}>
                ASOSIY
              </Link>
              <Link href={"main"}>BIZNING LOYIHALAR</Link>
              <Link href={"main"}>BIZ HAQIMIZDA</Link>
            </div>
            <div className="top-2/4 left-2/4 transform-gpu -translate-x-2/4 -translate-y-2/4 absolute">
              <Link href={"/"}>
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
              <Link href={"main"}>BIZNING LOYIHALAR</Link>
              <Link href={"main"}>BIZ HAQIMIZDA</Link>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
