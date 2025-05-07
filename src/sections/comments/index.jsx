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
    <div className="">
      <div className="container">
        <div className="mt-12">
          <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-[#000000]">
            MAMNUN MIJOZLAR FIKRI
          </h2>
          <p className="text-xs sm:text-sm md:text-lg lg:text-base font-normal text-center text-[#000000]">
            YUQORI SIFAT VA ARZON NARXLARDAN MAMNUN BO'LGAN BIR NECHTA
            MIZOZLARIMIZ
          </p>
          <Swiper
            // loop={true}
            // effect={"fade"}
            slidesPerView={3}
            spaceBetween={30}
            modules={[EffectFade, Pagination]}
            className="mySwiper hidden"
          >
            <SwiperSlide className="w-[400px] bg-[#e8a900]">
              <div className="w-[400px] p-4 text-white bg-[#e8a900]">
                <h3>Katta rahmat!</h3>
                <p>
                  Uy sotib olganimizdan judayam xursandmiz. Narxlar arzon
                  vauylar sifatli.
                </p>
                <div>
                  <p>— G'oybu, Alisher</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-[400px] p-4 text-white bg-[#e8a900]">
              <div className="w-[400px] p-4 text-white">
                <h3 className="text-white"> Hammaga tavsiya qilaman!</h3>
                <p>
                  Yaqinda oilamiz uchun uy sotib oldik. Sifatiga gap yuq.
                  "Bunyod House"ga rahmat
                </p>
                <div>
                  <p>— G'oybu, Alisher</p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="w-[400px] p-4 text-white bg-[#e8a900]">
              <div className="w-[400px] p-4 text-white bg-[#e8a900]">
                <h3> Ajoyib narxlar!</h3>
                <p>
                  2 oy oldin uy sotib oldik. Judayam mamnunmiz "Bunyod House"
                  dan
                </p>
                <div className="w-full flex align-end justify-between">
                  <p>— Urganch, Severa</p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>

          <div className="flex mt-10 gap-10 align-top justify-between">
            <div className="w-1/3 p-6 text-white bg-[#e8a900]">
              <h3 className="text-5xl font-semibold">Katta rahmat!</h3>
              <p className="text-xl mt-4">
                Uy sotib olganimizdan judayam xursandmiz. Narxlar arzon va uylar
                sifatli.
              </p>
              <div className="w-full mt-8 flex justify-end">
                <p className="text-2xl">— G'oybu, Alisher</p>
              </div>
            </div>
            <div className="w-1/3 p-6 text-white bg-[#e8a900]">
              <h3 className="text-5xl font-semibold">
                Hammaga tavsiya qilaman!
              </h3>
              <p className="text-xl mt-4">
                {" "}
                2 oy oldin uy sotib oldik. Judayam mamnunmiz "Bunyod House" dan.
              </p>
              <div className="w-full mt-8 flex justify-end">
                <p className="text-xl">— Urganch, Sarvar</p>
              </div>
            </div>
            <div className="w-1/3 p-6 text-white bg-[#e8a900]">
              <h3 className="text-5xl font-semibold"> Ajoyib narxlar!</h3>
              <p className="text-xl mt-4">
                Yaqinda oilamiz uchun uy sotib oldik. Sifatiga gap yuq. "Bunyod
                House"ga rahmat.
              </p>
              <div className="w-full mt-8 flex justify-end">
                <p className="text-2xl">— Urganch, Severa</p>
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
