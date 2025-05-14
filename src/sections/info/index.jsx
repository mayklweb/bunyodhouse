import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Info() {
  const sectionRef = useRef(null);
  const linesRef = useRef([]);

  if (!linesRef.current.every(Boolean)) return;

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set all lines to be hidden initially
      gsap.set(linesRef.current, {
        autoAlpha: 0,
        y: 40,
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 40px",
          end: "+=725",
          scrub: true,
          pin: true,
          // pinSpacing: false,
        },
      });

      // Animate each line one by one based on timeline
      linesRef.current.forEach((line, i) => {
        tl.to(
          line,
          {
            autoAlpha: 2,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
        
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="" ref={sectionRef}>
      <div className="scene pt-10">
        <div className="container py-20">
          <h1 className="text-4xl text-[#FFC045] mb-10">Info</h1>

          <div className="flex flex-col gap-14 items-end">
            <div
              className="info-line w-2/4 flex gap-4"
              ref={(el) => (linesRef.current[0] = el)}
            >
              <h1 className="text-[#FFC045] text-2xl lg:text-3xl">01.</h1>
              <h1 className="text-[#030303] text-3xl lg:text-4xl">
                "Bunyod House" uylari o'zining zamonaviy dizayni bilan ajralib
                turadi.
              </h1>
            </div>

            <div
              className="info-line w-2/4 flex gap-4 "
              ref={(el) => (linesRef.current[1] = el)}
            >
              <h1 className="text-[#FFC045] text-2xl lg:text-3xl">02.</h1>
              <h1 className="text-[#030303] text-3xl lg:text-4xl">
                Biz mijozlarimiz uchun eng qulay narxlarni taqdim etamiz.
              </h1>
            </div>

            <div
              className="info-line w-2/4 flex gap-4 "
              ref={(el) => (linesRef.current[2] = el)}
            >
              <h1 className="text-[#FFC045] text-2xl lg:text-3xl">03.</h1>
              <h1 className="text-[#030303] text-3xl lg:text-4xl">
                Qurilishda yuqori sifatli materiallar ishlatiladi.
              </h1>
            </div>
          </div>

          {/* Background Image */}
          <div className="w-full absolute bottom-0 right-0 z-[-1] hidden items-start lg:flex ">
            <img className="w-[40%]" src="/house-3.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
