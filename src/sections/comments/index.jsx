"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/pagination";

function Comments() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth > 768);
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
          <div className="mt-10">
            <div className={`${isMobile ? "hidden" : "block"}`}>
              <Swiper
                effect={"cards"}
                slidesPerView={1}
                spaceBetween={24}
                grabCursor={true}
                modules={[EffectCards, Pagination]}
                className={`${isMobile ? "block" : "hidden"} my-10 w-[78%] md:w-full`}
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

            <div className={`${isMobile ? "block" : "hidden"} flex items-start gap-6`}>
              <div className="w-full p-4 lg:p-6 text-white bg-[#FFC045]">
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
              </div>
              <div className="w-full p-4 lg:p-6 text-white bg-[#FFC045]">
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
              </div>
              <div className="w-full p-4 lg:p-6 text-white bg-[#FFC045]">
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
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
