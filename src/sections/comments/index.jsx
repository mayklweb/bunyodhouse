"use client";

import React, { useEffect, useState } from "react";


import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

// import required modules
import {
  EffectFade,
  EffectCards,
  EffectCoverflow,
  Pagination,
} from "swiper/modules";

function Comments() {

  const [isMobile, setIsMobile] = useState();


  useEffect(() => {
    setIsMobile(window.innerWidth);
  }, []);

  console.log(isMobile);


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
          <div className="">
            <Swiper
              effect={"cards"}
              slidesPerView={isMobile > 768 ? 3 : 1}
              spaceBetween={24}
              modules={[EffectCards, Pagination]}
              className="my-10 w-[80%] md:w-full"
            >
              <SwiperSlide className="w-full p-4 lg:p-6 text-white bg-[#FFC045]">
                <h3 className="text-4xl md:text-3xl lg:text-5xl font-semibold">
                  Katta rahmat!
                </h3>
                <p className="text-base md:text-lg lg:text-xl mt-2 lg:mt-4">
                  Uy sotib olganimizdan judayam xursandmiz. Narxlar arzon va
                  uylar sifatli.
                </p>
                <div className="w-full mt-6 flex justify-end">
                  <p className="text-xl lg:text-2xl">
                    — G'oybu, Alisher
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-full p-4 lg:p-6 text-white bg-[#FFC045]">
                <h3 className="text-[32px] md:text-3xl lg:text-5xl font-semibold leading-[120%]">
                  Hammaga tavsiya qilaman!
                </h3>
                <p className="text-base md:text-lg lg:text-xl mt-2 lg:mt-4">
                  2 oy oldin uy sotib oldik. Judayam mamnunmiz "Bunyod House"
                  dan.
                </p>
                <div className="w-full mt-6 flex justify-end">
                  <p className="text-xl lg:text-2xl">
                    — Urganch, Sarvar
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-full p-4 lg:p-6 text-white bg-[#FFC045]">
                <h3 className="text-4xl md:text-3xl lg:text-5xl font-semibold">
                  Ajoyib narxlar!
                </h3>
                <p className="text-base md:text-lg lg:text-xl mt-2 lg:mt-4">
                  Yaqinda oilamiz uchun uy sotib oldik. Sifatiga gap yuq. "Bunyod
                  House"ga rahmat.
                </p>
                <div className="w-full mt-6 flex justify-end">
                <p className="text-xl lg:text-2xl">
                    — G'oybu, Alisher
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
