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
              toggleActions: "play none none none",
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

  useEffect(() => {
    const counters = gsap.utils.toArray(".counter");

    counters.forEach((counter) => {
      const el = counter;
      const endValue = parseInt(el.dataset.value || "0");

      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: endValue,
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
          duration: 2,
          snap: { innerText: 1 },
          ease: "power1.out",
          onUpdate: function () {
            el.innerText = `${Math.floor(parseFloat(el.innerText))}+`;
          },
        }
      );
    });
  }, []);


  return (
    <section id="about" className="py-10">
      <div className="w-full bg-no-repeat bg-center bg-cover bg-[url('/about.webp')] flex flex-col">
        <div className="container">
          <h1 className="text-4xl text-[#FFC045]">Biz xaqimizda</h1>

          <div className="con w-full mt-6 lg:mt-10 md:hidden">
            <h1 className="split text-lg lg:text-4xl text-center">
              "Bunyod House" qurilish firmasi Xorazm viloyatida 2019-yilda
              tashkil topgan. Faoliyatimizning birinchi kunlaridan boshlab biz
              mijozlarimizga yuqori sifatli uylarni taqdim qilib kelmoqdamiz.
            </h1>
          </div>

          <div className="w-full hidden md:block">
            <div className="con w-full mt-6 lg:mt-10 flex justify-start">
              <h3 className="split w-5/6 md:w-2/4 text-base xs:text-lg md:text-2xl lg:text-3xl xl:text-4xl mt-2 font-normal text-justify ">
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
                Biz barpo qilgan uylar yuqori did va sifati bilan
                boshqalardan ajralib turadi.
              </h3>
            </div>
            <div className="con w-full mt-6 lg:mt-10 flex justify-end">
              <h3 className="split w-[84%] xs:w-4/5 md:w-[62%] text-base xs:text-lg md:text-2xl lg:text-3xl xl:text-4xl mt-2 font-normal text-end md:text-justify">
                Endilikda siz ham uy sotib olishga buyurtma berishingiz mumkin.
                Yuqori sifat va arzon narxlar faqat bizda!
              </h3>
            </div>
          </div>

          <div className="w-full mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center justify-start">
              <p className="text-4xl lg:text-8xl counter" data-value="47">0+</p>
              <p className="text-sm lg:text-2xl text-center">DAN ORTIQ BAXTLI OILALAR</p>
            </div>
            <div className="flex flex-col items-center justify-start">
              <p className="text-4xl lg:text-8xl counter" data-value="64">0+</p>
              <p className="text-sm lg:text-2xl text-center">XONADON</p>
            </div>
            <div className="flex flex-col items-center justify-start">
              <p className="text-4xl lg:text-8xl counter" data-value="99">0+</p>
              <p className="text-sm lg:text-2xl text-center">TA MUVAFFAQIYATLI LOYIHA</p>
            </div>
            <div className="flex flex-col items-center justify-start">
              <p className="text-4xl lg:text-8xl counter" data-value="99">0+</p>
              <p className="text-sm lg:text-2xl text-center">TA MUVAFFAQIYATLI LOYIHA</p>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default About;
