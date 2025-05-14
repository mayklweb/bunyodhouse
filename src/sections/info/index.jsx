import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

function Info() {
  const sectionRef = useRef(null);

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
    <section>
      <div className="scene py-10" ref={sectionRef}>
        <div className="container py-20 bg-[url('/house-3.svg')] bg-no-repeat bg-left-bottom bg-[length:100%_50%] lg:bg-[length:60%_100%]">
          <h1 className="text-4xl text-[#FFC045] ">Info</h1>

          <div className="con flex flex-col gap-14 items-end mt-10">
            <div className="con w-full lg:w-2/4 flex gap-2 md:gap-4">
              <h1 className="text text-[#FFC045] text-xl md:text-xl lg:text-4xl">
                01.
              </h1>
              <h1 className="text text-[#030303] text-2xl md:text-2xl lg:text-5xl text-justify">
                "Bunyod House" uylari o'zining zamonaviy dizayni bilan ajralib
                turadi.
              </h1>
            </div>

            <div className="con w-full lg:w-2/4 flex gap-2 md:gap-4">
              <h1 className="text text-[#FFC045] text-xl md:text-xl lg:text-4xl">
                02.
              </h1>
              <h1 className="text text-[#030303] text-2xl md:text-2xl lg:text-5xl">
                Biz mijozlarimiz uchun eng qulay narxlarni taqdim etamiz.
              </h1>
            </div>

            <div className="con w-full lg:w-2/4 flex gap-2 md:gap-4">
              <h1 className="text text-[#FFC045] text-xl md:text-xl lg:text-4xl">
                03.
              </h1>
              <h1 className="text text-[#030303] text-2xl md:text-2xl lg:text-5xl">
                Qurilishda yuqori sifatli materiallar ishlatiladi.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
