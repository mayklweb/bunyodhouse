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
    <div className="mt-10">
      <div className="w-full bg-no-repeat bg-center bg-cover bg-[url('/about.png')] px-[4%] flex flex-col md:flex-row gap-10">
        <div className="w-full  mt-4 xs:mt-6 md:mt-8 py-6 lg:mt-10`">
          <div className="con">
            <h1 className="split text-[#e8a900] text-4xl lg:text-9xl font-extrabold text-center">
              BUNYOD HOUSE
            </h1>
          </div>
          <div className="con w-full mt-6 lg:mt-10 flex justify-start">
            <h3 className="split w-3/4 md:w-2/4 text-sm xs:text-base md:text-2xl lg:text-4xl xl:text-5xl  mt-2 font-marcellus font-normal text-justify ">
              "Bunyod House" qurilish firmasi Xorazm viloyatida 2019-yilda
              tashkil topgan.
            </h3>
          </div>
          <div className="con w-full mt-6 lg:mt-10 flex justify-end md:justify-center">
            <h3 className="split w-[84%] xs:w-4/5 md:w-3/4 font-marcellus text-sm xs:text-base md:text-2xl lg:text-4xl xl:text-5xl mt-2 font-normal text-end md:text-justify">
              Faoliyatimizning birinchi kunlaridan boshlab biz mijozlarimizga
              yuqori sifatli uylarni taqdim qilib kelmoqdamiz.
            </h3>
          </div>
          <div className="con w-full mt-6 lg:mt-10 flex justify-start md:justify-evenly">
            <h3 className="split w-3/4 md:w-[54%] text-sm xs:text-base md:text-2xl lg:text-4xl xl:text-5xl mt-2 font-normal text-justify font-marcellus">
              Bizning uylar o'zining yuqori did va sifat bilan qurilganligi
              sababli boshqalardan ajralib turadi.
            </h3>
          </div>
          <div className="con w-full mt-6 lg:mt-10 flex justify-end">
            <h3 className="split w-[84%] xs:w-3/4 md:w-[62%] font-marcellus text-sm xs:text-base md:text-2xl lg:text-4xl xl:text-5xl mt-2 font-normal text-end md:text-justify">
              Endilikda siz ham uy sotib olishga buyurtma berishingiz mumkin.
              Yuqori sifat va arzon narxlar faqat bizda!
            </h3>
          </div>
        </div>

        {/* <div className="w-full md:w-2/4">
          <img
            ref={projectImg}
            src="/project-home-2.webp"
            alt=""
            className="w-full"
          />
        </div> */}
      </div>
    </div>
  );
}

export default About;
