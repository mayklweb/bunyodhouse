"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";
import { comments } from "@/utils/data";

function Comments() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth > 768);
  }, []);

  return (
    <div>
      <div className="container">
        <div className="py-10">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-[#FFC045]">
            MAMNUN MIJOZLAR FIKRI
          </h2>
          <p className="text-xs sm:text-sm md:text-lg lg:text-base font-normal text-center text-[#FFC045]">
            YUQORI SIFAT VA ARZON NARXLARDAN MAMNUN BO'LGAN BIR NECHTA
            MIZOZLARIMIZ
          </p>
          <div className="mt-10">
            <div className={`${isMobile ? "hidden" : "block"}`}>
              <Swiper
                effect={"cards"}
                slidesPerView={1}
                spaceBetween={24}
                grabCursor={true}
                modules={[EffectCards, Pagination]}
                className={`${isMobile ? "block" : "hidden"} my-10 w-[75%] md:w-full`}
              >
                {
                  comments.map(({ id, name, title, subtitle }) => (
                    <SwiperSlide key={id} className="w-full p-4 lg:p-6 text-white bg-[#FFC045]">
                      <h3 className="text-3xl md:text-3xl lg:text-5xl font-semibold">
                        {title}
                      </h3>
                      <p className="text-base md:text-lg lg:text-xl mt-2 lg:mt-4">
                        {subtitle}
                      </p>
                      <div className="w-full mt-6 flex justify-end">
                        <p className="text-xl lg:text-2xl">
                          {name}
                        </p>
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>

            <div className={`${isMobile ? "block" : "hidden"} flex items-start gap-6`}>
              {
                comments.map(({ id, name, title, subtitle }) => {
                  <div key={id} className="w-full p-4 lg:p-6 text-white bg-[#FFC045]">
                    <h3 className="text-4xl md:text-3xl lg:text-5xl font-semibold">
                      {title}
                    </h3>
                    <p className="text-base md:text-lg lg:text-xl mt-2 lg:mt-4">
                      {subtitle}
                    </p>
                    <div className="w-full mt-6 flex justify-end">
                      <p className="text-xl lg:text-2xl">
                        {name}
                      </p>
                    </div>
                  </div>
                })
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
