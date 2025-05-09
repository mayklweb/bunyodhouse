import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";

function About() {
  const projectImg = useRef(null);

  useEffect(() => {
    gsap.set(projectImg.current, {
      clipPath: "polygon(0 0%, 100% 0%, 100% 0%, 0% 0%)", // collapsed at top
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: projectImg.current,
        start: "top center",
        end: "center top",
        scrub: 1,
        toggleActions: "play none none none",
      },
    });

    tl.to(projectImg.current, {
      clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)", // fully revealed from top to bottom
      ease: "power4.out",
      duration: 2.4,
    });

    document.fonts.ready.then(() => {
      let containers = gsap.utils.toArray(".con");

      containers.forEach((container) => {
        let text = container.querySelector(".split");
        let animation;

        SplitText.create(text, {
          type: "words,lines",
          mask: "lines",
          linesClass: "line",
          autoSplit: true,
          onSplit: (instance) => {
            return gsap.from(instance.lines, {
              yPercent: 120,
              stagger: 0.1,
              scrollTrigger: {
                trigger: container,
                // markers: true,
                scrub: true,
                start: "clamp(top center)",
                end: "clamp(bottom center)",
              },
            });
          },
        });
      });
    });
  }, []);

  return (
    <div className="mt-16">
      <div className="w-full px-[4%] flex flex-col md:flex-row gap-10">
        <div className="w-full md:w-2/4 mt-4 lg:mt-14">
          <div className="con">
            <h1 className="split text-[#e8a900] text-4xl lg:text-7xl font-extrabold text-center">
              BUNYOD HOUSE
            </h1>
          </div>
          <div className="con">
            <h3 className="split text-sm lg:text-lg mt-2 font-normal text-justify">
              "Bunyod House" qurilish firmasi Xorazm viloyatida 2019-yilda
              tashkil topgan. Faoliyatimizning birinchi kunlaridan boshlab biz
              mijozlarimizga yuqori sifatli uylarni taqdim qilib kelmoqdamiz.
              Bizning uylar o'zining yuqori did va sifat bilan qurilganligi
              sababli boshqalardan ajralib turadi. Endilikda siz ham uy sotib
              olishga buyurtma berishingiz mumkin. Yuqori sifat va arzon narxlar
              faqat bizda!
            </h3>
          </div>
        </div>
        <div className="w-full md:w-2/4">
          <img
            ref={projectImg}
            src="/project-home-2.webp"
            alt=""
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
