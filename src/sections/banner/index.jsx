import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Flip, ScrollTrigger } from "gsap/all";

gsap.registerPlugin(Flip, ScrollTrigger);

function Banner() {
  const homeTitle = useRef([]);
  const homeSubtitle = useRef([]);

  useEffect(() => {
    gsap.set(homeTitle.current, { yPercent: 100 });
    gsap.set(homeSubtitle.current, { yPercent: 100 });

    const tl = gsap.timeline({ delay: 0.4 });
    tl.to(
      [
        document.querySelector(".home-title"),
        document.querySelector(".home-subtitle"),
      ],
      {
        yPercent: 0,
        duration: 1.4,
        ease: "expo.inOut",
      }
    );
  }, []);

  return (
    <div className="absolute top-0 z-[0] w-full h-[300px] sm:h-[400px] md:h-[600px] lg:h-[800px] bg-no-repeat bg-cover bg-[url('./public/banner.webp')] ">
      <div className="w-full h-full bg-gradient-to-b from-[#00000000] via-[#ffffff00] to-[#ffffff]">
        <div className="container">
          <div className="pt-16 sm:pt-20 md:pt-24 lg:pt-28 flex flex-col justify-center items-start h-full">
            <h1 className="text-[#e8a900] text-6xl sm:text-8xl md:text-[136px] lg:text-[156px] overflow-hidden font-black">
              <span className="flex overflow-hidden">
                <span
                  ref={(el) => (homeTitle.current[0] = el)}
                  className="home-title"
                >
                  BUNYOD
                </span>
              </span>
            </h1>
            <p className="text-[#e8a900] text-4xl sm:text-6xl md:text-8xl lg:text-[124px] overflow-hidden font-black">
              <span className="flex overflow-hidden">
                <span
                  ref={(el) => (homeSubtitle.current[0] = el)}
                  className="home-subtitle"
                >
                  HOUSE
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
