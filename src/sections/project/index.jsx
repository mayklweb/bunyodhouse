import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText, ScrollTrigger);

function Project() {
  const projectImg = useRef(null);

  useEffect(() => {
    gsap.set(projectImg.current, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: projectImg.current,
        // markers: true,
        start: "top center",
        end: "center top",
        scrub: 1,
        toggleActions: "play none none none",
        // toggleActions: "re none none none",
      },
    });

    tl.to(projectImg.current, {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      ease: "power4.out",
      duration: 2.6,
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
      <div className="w-full px-[4%] flex flex-col md:flex-row gap-10 items-center">
        <div className="w-full md:w-2/4">
          <div className="con">
            <h1 className="split text-4xl font-extrabold text-center">
              BUNYOD HOUSE
            </h1>
          </div>
          <div className="con">
            <h3 className="split text-sm mt-2 font-normal text-justify">
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

export default Project;
