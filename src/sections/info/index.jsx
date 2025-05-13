import React, { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Info() {
  const sectionRef = useRef(null);
  const linesRef = useRef([]);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Hide all initially
      gsap.set(linesRef.current, { autoAlpha: 0, y: 50 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=2000",
          scrub: true,
          pin: true,
          markers: false, // debugging uchun true qilib tekshir
        },
      });

      // One by one animation
      linesRef.current.forEach((line, i) => {
        tl.to(
          line,
          {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          i * 1.5 // delay between lines
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative bg-white">
      <div className="pt-10" ref={sectionRef}>
        <div className="max-w-4xl mx-auto px-4 py-20">
          <h1 className="text-4xl text-[#FFC045] mb-10">Info</h1>

          <div className="flex flex-col gap-16">
            {[
              "Biz mijozlarimiz uchun eng qulay narxlarni taqdim etamiz.",
              '"Bunyod House" uylari o‘zining zamonaviy dizayni bilan ajralib turadi.',
              "Qurilishda yuqori sifatli materiallar ishlatiladi.",
            ].map((text, index) => (
              <div
                key={index}
                className={`info-line flex gap-4 ml-${index * 20 + 20}`}
                ref={(el) => (linesRef.current[index] = el)}
              >
                <h2 className="text-[#FFC045] text-2xl lg:text-3xl">
                  0{index + 1}.
                </h2>
                <p className="text-[#030303] text-3xl lg:text-4xl">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Info;
