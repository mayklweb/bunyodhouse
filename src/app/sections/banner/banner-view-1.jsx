"use client";

import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import Link from "next/link";

function BannerView1() {
  const video = useRef(null);

  useEffect(() => {
    gsap.set(video.current, { width: "100vw", height: "100vh", zIndex: 2, willChange: "size" });

    const tl = gsap.timeline({ delay: 4, ease: "power3.out", smoothOrigin: true });

    tl.to(video.current, {
      width: "60vw",
      height: "60vh",
      duration: 1.6,
      zIndex: 0
    }, "end");
  }, []);

  return (
    <section id="/">
      <div className="w-full h-screen overflow-hidden">
        <div className="w-full h-full relative flex flex-col items-center justify-center">
          <video ref={video} loop autoPlay muted className="w-full h-full object-cover absolute top-[50%] left-[50%] -translate-y-2/4 -translate-x-2/4">
            <source src="/banner.mp4" type="video/mp4" />
          </video>
          <div className="w-full absolute top-6/8 left-1/2 h-full -translate-x-2/4 -translate-y-2/4 flex flex-col items-center justify-center">
            <Link href={'/tour'} className="w-[300px] h-[60px] text-white text-xl  border-2 border-[#FFC045] cursor-pointer backdrop-blur-2xl">360° TOUR</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BannerView1;
