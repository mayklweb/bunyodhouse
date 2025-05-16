"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(SplitText, ScrollTrigger);

function About() {
  useEffect(() => {
    // SplitText animation
    document.fonts.ready.then(() => {
      gsap.set(".split", { opacity: 1 });

      const split = new SplitText(".split", {
        type: "words,lines",
        linesClass: "line",
        autoSplit: true,
        mask: "lines",

        onSplit: (self) => {
          return gsap.from(self.lines, {
            scrollTrigger: {
              trigger: self.lines[0],
              start: "top 60%",
              end: "center top",
              scrub: 3,
              toggleActions: "none none none none", 
            },
            duration: 5,
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
    <div className="py-10">
      <div className="w-full bg-no-repeat bg-center bg-cover bg-[url('/about.webp')] px-[4%] flex flex-col md:flex-row gap-10">
        <div className="w-full  mt-4 xs:mt-6 md:mt-8 py-6 lg:mt-10`">
          <div className="con">
            <h1 className=" text-[#FFC045] font-outfit text-4xl lg:text-9xl font-extrabold text-center">
              BUNYOD HOUSE
            </h1>
          </div>
          <div className="con w-full mt-6 lg:mt-10 flex justify-start">
            <h3 className="split w-5/6 md:w-3/4 text-base xs:text-lg md:text-2xl lg:text-3xl xl:text-4xl mt-2 font-normal text-justify ">
              "Bunyod House" qurilish firmasi Xorazm viloyatida 2019-yilda
              tashkil topgan.
            </h3>
          </div>
          <div className="con w-full mt-6 lg:mt-10 flex justify-end md:justify-center">
            <h3 className="split w-[84%] xs:w-5/6 md:w-3/4 text-base xs:text-lg md:text-2xl lg:text-3xl xl:text-4xl mt-2 font-normal text-end md:text-justify">
              Faoliyatimizning birinchi kunlaridan boshlab biz mijozlarimizga
              yuqori sifatli uylarni taqdim qilib kelmoqdamiz.
            </h3>
          </div>
          <div className="con w-full mt-6 lg:mt-10 flex justify-start md:justify-evenly">
            <h3 className="split w-3/4 xs:w-5/6 md:w-[54%] text-base xs:text-lg md:text-2xl lg:text-3xl xl:text-4xl mt-2 font-normal text-justify">
              Bizning uylar o'zining yuqori did va sifat bilan qurilganligi
              sababli boshqalardan ajralib turadi.
            </h3>
          </div>
          <div className="con w-full mt-6 lg:mt-10 flex justify-end">
            <h3 className="split w-[84%] xs:w-4/5 md:w-[62%] text-base xs:text-lg md:text-2xl lg:text-3xl xl:text-4xl mt-2 font-normal text-end md:text-justify">
              Endilikda siz ham uy sotib olishga buyurtma berishingiz mumkin.
              Yuqori sifat va arzon narxlar faqat bizda!
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
