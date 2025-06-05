"use client";

import React, { useEffect, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";
import Image from "next/image";

gsap.registerPlugin(SplitText, ScrollTrigger);

function Apartment() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth > 768);
  }, []);

  useEffect(() => {
    const cards = gsap.utils.toArray(".card");

    cards.forEach((card, index) => {
      gsap.from(card, {
        y: 60,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: index * 0.1,
        scrollTrigger: {
          trigger: card,
          start: "top center",
          toggleActions: "play none none none",
        },
      });
    });
  }, []);

  const data = [
    {
      id: 1,
      image: "/arch.webp",
      area: "69 m",
      location: "G'oybu",
      room: 2,
    },
    {
      id: 2,
      image: "/arch.webp",
      area: "72 m",
      location: "G'oybu",
      room: 2,
    },
    {
      id: 3,
      image: "/arch.webp",
      area: "83 m",
      location: "G'oybu",
      room: 2,
    },
    {
      id: 4,
      image: "/arch.webp",
      area: "87 m",
      location: " G'oybu",
      room: 3,
    },
  ];

  return (
    <section id="projects">
      <div className="container">
        <h1 className="text-2xl lg:text-4xl text-[#FFC045]">Turar joylar</h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 py-5 lg:py-10">
          {data.map((item, i) => (
            <div
              key={i}
              className={`card w-full p-2 md:p-4 border border-[#FFC045] flex flex-col gap-2 shadow-md`}
            >
              <div>
                <Image className="w-full h-full" width={250} height={360} src={item.image} alt="Apartment image" loading='lazy' />
              </div>
              <div>
                <div className="flex gap-2 text-xs md:text-base">
                  <p className="text-[#1e1e1e]">Maydon</p>
                  <span className="mb-[2%] md:mb-[1%] flex flex-auto border-b border-[#FFC045] border-dashed"></span>
                  <p>
                    {item.area}
                    <sup>2</sup>
                  </p>
                </div>
                <div className="flex gap-2 text-xs md:text-base">
                  <p className="text-[#1e1e1e]">Xonalar</p>
                  <span className="mb-[2%] md:mb-[1%] flex flex-auto border-b border-[#FFC045] border-dashed"></span>
                  {item.room}
                </div>

                {/* <div className="flex gap-2 text-xs md:text-base">
                  <p className="text-[#1e1e1e]">Qavat</p>
                  <span className="mb-[2%] md:mb-[1%] flex flex-auto border-b border-[#FFC045] border-dashed"></span>
                  <p>2</p>
                </div> */}
                <div className="flex gap-2 text-xs md:text-base">
                  <p className="text-[#1e1e1e]">Location</p>
                  <span className="mb-[2%] md:mb-[1%] flex flex-auto border-b border-[#FFC045] border-dashed"></span>
                  <p>{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Apartment;