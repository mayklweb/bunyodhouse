import React from "react";

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
          <div className="md:hidden">
            <Swiper
              // loop={true}
              // effect={"fade"}
              slidesPerView={1}
              spaceBetween={30}
              modules={[EffectFade, Pagination]}
              className=""
            >
              <SwiperSlide className="w-[400px] bg-[#FFC045]">
                <div className="w-full md:w-1/3 p-4 md:p-6 text-white bg-[#e8a900]">
                  <h3 className="text-4xl md:text-4xl lg:text-5xl font-semibold">
                    Katta rahmat!
                  </h3>
                  <p className="text-lg md:text-lg lg:text-xl mt-4">
                    Uy sotib olganimizdan judayam xursandmiz. Narxlar arzon va
                    uylar sifatli.
                  </p>
                  <div className="w-full mt-8 flex justify-end">
                    <p className="text-2xl md:text-xl lg:text-2xl">
                      — G'oybu, Alisher
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-[400px] text-white bg-[#e8a900]">
                <div className="w-full md:w-1/3 p-4 md:p-6 text-white bg-[#e8a900]">
                  <h3 className="text-4xl md:text-4xl lg:text-5xl font-semibold">
                    Hammaga tavsiya qilaman!
                  </h3>
                  <p className="text-lg md:text-lg lg:text-xl mt-4">
                    2 oy oldin uy sotib oldik. Judayam mamnunmiz "Bunyod House"
                    dan.
                  </p>
                  <div className="w-full mt-8 flex justify-end">
                    <p className="text-xl md:text-xl lg:text-2xl">
                      — Urganch, Sarvar
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className="w-[400px] text-white bg-[#e8a900]">
                <div className="w-full md:w-1/3 p-4 md:p-6 text-white bg-[#e8a900]">
                  <h3 className="text-4xl md:text-4xl lg:text-5xl font-semibold">
                    Ajoyib narxlar!
                  </h3>
                  <p className="text-lg md:text-lg lg:text-xl mt-4">
                    Yaqinda oilamiz uchun uy sotib oldik. Sifatiga gap yuq.
                    "Bunyod House"ga rahmat.
                  </p>
                  <div className="w-full mt-8 flex justify-end">
                    <p className="text-2xl md:text-xl lg:text-2xl">
                      — Urganch, Severa
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>

          <div className="hidden md:flex flex-col md:flex-row my-10 gap-6 md:gap-8 lg:gap-10 align-top justify-between">
            <div className="w-full md:w-1/3 p-6 text-white bg-[#FFC045]">
              <h3 className="text-4xl md:text-4xl lg:text-5xl font-semibold">
                Katta rahmat!
              </h3>
              <p className="text-lg md:text-lg lg:text-xl mt-4">
                Uy sotib olganimizdan judayam xursandmiz. Narxlar arzon va uylar
                sifatli.
              </p>
              <div className="w-full mt-8 flex justify-end">
                <p className="text-2xl md:text-xl lg:text-2xl">
                  — G'oybu, Alisher
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-6 text-white bg-[#FFC045]">
              <h3 className="text-4xl md:text-4xl lg:text-5xl font-semibold">
                Hammaga tavsiya qilaman!
              </h3>
              <p className="text-lg md:text-lg lg:text-xl mt-4">
                2 oy oldin uy sotib oldik. Judayam mamnunmiz "Bunyod House" dan.
              </p>
              <div className="w-full mt-8 flex justify-end">
                <p className="text-xl md:text-xl lg:text-2xl">
                  — Urganch, Sarvar
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/3 p-6 text-white bg-[#FFC045]">
              <h3 className="text-4xl md:text-4xl lg:text-5xl font-semibold">
                Ajoyib narxlar!
              </h3>
              <p className="text-lg md:text-lg lg:text-xl mt-4">
                Yaqinda oilamiz uchun uy sotib oldik. Sifatiga gap yuq. "Bunyod
                House"ga rahmat.
              </p>
              <div className="w-full mt-8 flex justify-end">
                <p className="text-2xl md:text-xl lg:text-2xl">
                  — Urganch, Severa
                </p>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Comments;
