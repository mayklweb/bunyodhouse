"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

function Info() {
  useEffect(() => {
    // SplitText animation
    document.fonts.ready.then(() => {
      gsap.set(".text", { opacity: 1 });

      const split = new SplitText(".text", {
        type: "words,lines",
        linesClass: "line",
        autoSplit: true,
        mask: "lines",

        onSplit: (self) => {
          return gsap.from(self.lines, {
            scrollTrigger: {
              trigger: self.lines[0],
              start: "top 80%",
              end: "center center",
              scrub: 5,
              toggleActions: "play none none none",
            },
            duration: 10,
            yPercent: 100,
            opacity: 0,
            stagger: 1,
            ease: "power4",
          });
        },
      });
    });
  }, []);

  return (
    <section>
      <div className="scene py-10">
        <div className="container py-20 bg-[url('/house-2.svg')] bg-no-repeat bg-right-bottom bg-[length:100%_100%] lg:bg-[length:50%_90%]">
          <h1 className="text-4xl text-[#FFC045]">Faoliyat</h1>
          <div className="flex gap-10 mt-10">
            <div className="w-full md:w-2/4 flex flex-col gap-10">
              <div className="con w-full flex gap-2 md:gap-4">
                <h1 className="text text-[#FFC045] text-xl md:text-xl lg:text-4xl">
                  01.
                </h1>
                <h1 className="text text-[#030303] text-2xl md:text-2xl lg:text-5xl leading-[120%]">
                  "Bunyod House" uylari o'zining zamonaviy dizayni bilan ajralib
                  turadi.
                </h1>
              </div>

              <div className="con w-full flex gap-2 md:gap-4">
                <h1 className="text text-[#FFC045] text-xl md:text-xl lg:text-4xl leading-[120%]">
                  02.
                </h1>
                <h1 className="text text-[#030303] text-2xl md:text-2xl lg:text-5xl leading-[120%]">
                  Biz mijozlarimiz uchun eng qulay narxlarni taqdim etamiz.
                </h1>
              </div>

              <div className="con w-full  flex gap-2 md:gap-4">
                <h1 className="text text-[#FFC045] text-xl md:text-xl lg:text-4xl leading-[120%]">
                  03.
                </h1>
                <h1 className="text text-[#030303] text-2xl md:text-2xl lg:text-5xl leading-[120%]">
                  Qurilishda yuqori sifatli materiallar ishlatiladi.
                </h1>
              </div>
            </div>
            {/* <div className="w-2/4"> */}
              {/* <video loop autoPlay muted className="w-full h-[400px] object-cover">
                <source src="/banner.mp4" type="video/mp4" />
              </video> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
