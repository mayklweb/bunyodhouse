import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

function Info() {
  const sectionRef = useRef(null);

  useEffect(() => {
    document.fonts.ready.then(() => {
      // Split text
      const split = new SplitText(".split", {
        type: "words,lines",
        linesClass: "line",
      });

      // Animate each line
      gsap.from(split.lines, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom center",
          scrub: 1,
        },
        yPercent: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power4.out",
      });
    });
  }, []);

  return (
    <section>
      <div className="scene py-10 " ref={sectionRef}>
        <div className="container py-20 bg-[url('/house-3.svg')] bg-no-repeat bg-left-bottom bg-[length:100%_50%] lg:bg-[length:60%_100%]">
          <h1 className="text-4xl text-[#FFC045] ">Info</h1>

          <div className="con flex flex-col gap-14 items-end ">
            <div className="con w-11/12 lg:w-2/4 flex gap-4">
              <h1 className="split text-[#FFC045] text-lg md:text-xl lg:text-4xl">
                01.
              </h1>
              <h1 className="split text-[#030303] text-xl md:text-2xl lg:text-5xl">
                "Bunyod House" uylari o'zining zamonaviy dizayni bilan ajralib
                turadi.
              </h1>
            </div>

            <div className="con w-11/12 lg:w-2/4 flex gap-4">
              <h1 className="split text-[#FFC045] text-lg md:text-xl lg:text-4xl">
                02.
              </h1>
              <h1 className="split text-[#030303] text-xl md:text-2xl lg:text-5xl">
                Biz mijozlarimiz uchun eng qulay narxlarni taqdim etamiz.
              </h1>
            </div>

            <div className="con w-11/12 lg:w-2/4 flex gap-4">
              <h1 className="split text-[#FFC045] text-lg md:text-xl lg:text-4xl">
                03.
              </h1>
              <h1 className="split text-[#030303] text-xl md:text-2xl lg:text-5xl">
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
