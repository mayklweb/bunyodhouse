import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Info() {
  const sectionRef = useRef(null);
  const linesRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2000", // adjust scroll distance
          scrub: true,
          pin: true,
          markers: false,
        },
      });

      // Animate each line one after another
      linesRef.current.forEach((line, index) => {
        tl.from(
          line,
          {
            autoAlpha: 0,
            y: 30,
            duration: 1,
          },
          "+=0.5"
        ); // delay between lines
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section>
      <div className="scene" ref={sectionRef}>
        <div className="container">
          <div className="w-full py-10 relative">
            <h1 className="text-4xl text-[#FFC045]">Info</h1>
            <div className="mt-10 flex gap-6 flex-col  ">
              <div
                className="info-line w-3/4  flex gap-4 ml-[20px] lg:ml-[40px]"
                ref={(el) => (linesRef.current[0] = el)}
              >
                <h1 className="text-[#FFC045] text-2xl lg:text-3xl">01.</h1>
                <h1 className="text-[#030303] text-3xl lg:text-4xl">
                  Biz mijozlarimiz uchun eng qulay narxlarni taqdim etamiz.
                </h1>
              </div>

              <div
                className="info-line w-3/4  flex gap-4 ml-[40px] lg:ml-[80px]"
                ref={(el) => (linesRef.current[1] = el)}
              >
                <h1 className="text-[#FFC045] text-2xl lg:text-3xl">02.</h1>
                <h1 className="text-[#030303] text-3xl lg:text-4xl">
                  "Bunyod House" uylari o'zining zamonaviy dizayni bilan ajralib
                  turadi.
                </h1>
              </div>

              <div
                className="info-line w-3/4  flex gap-4 ml-[80px] lg:ml-[120px]"
                ref={(el) => (linesRef.current[2] = el)}
              >
                <h1 className="text-[#FFC045] text-2xl lg:text-3xl">03.</h1>
                <h1 className="text-[#030303] text-3xl lg:text-4xl">
                  Qurilishda yuqori sifatli materiallar ishlatiladi.
                </h1>
              </div>
            </div>
            <div className="w-full  absolute top-0 left-0 z-[-10] flex justify-end items-end">
              <img className="w-[40%]" src="/info.webp" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
