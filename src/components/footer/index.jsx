"use client";

import React from "react";

function Footer() {
  return (
    <footer className="mt-14">
      <div className="w-full bg-no-repeat bg-top bg-cover bg-[url('/footer.webp')]">
        <div className="container">
          <div className="grid grid-row-3 lg:grid-cols-3 gap-10 justify-between pt-20">
            <div className="w-full lg:w-[80%] flex flex-col items-center ">
              <div className="w-[80%]">
                <img src="/logo.svg" alt="" />
              </div>
              {/* <p className="text-white text-justify mt-2">
                "Bunyod House" qurilish firmasi Xorazm viloyatida 2019-yilda
                tashkil topgan. Faoliyatimizning birinchi kunlaridan boshlab biz
                mijozlarimizga yuqori sifatli uylarni taqdim qilib kelmoqdamiz.
              </p> */}
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <h1 className="text-white text-2xl lg:text-4xl">Sayt haritasi</h1>
              <div className="grid grid-cols-2 gap-3 text-white text-lg lg:text-xl">
                <p>Asosiy</p>
                <p>Faoliyat</p>
                <p>Narxlar</p>
                <p>Biz haqimizda</p>
                <p>Loyihalar</p>
                <p>Aloqa</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <h1 className="text-white text-2xl lg:text-4xl">Aloqa</h1>
              <div className="flex flex-col gap-4">
                <div className="flex gap-2 items-start text-white text-lg lg:text-xl">
                  <h2>Manzil:</h2>
                  <p>
                    Xorazm viloyati, Urganch tumani, Gaybu qishlogi
                  </p>
                </div>
                <div className="flex gap-2 items-start text-white text-lg lg:text-xl">
                  <h2>Telefon:</h2>
                  <div>
                    <p>+998 99 999 99 99</p>
                    <p>+998 99 999 99 99</p>
                  </div>
                </div>
                <div className="flex gap-2 items-start">
                  <div className="flex gap-10 text-white text-lg lg:text-xl">
                    <p>Instagram</p>
                    <p>YouTube</p>
                    <p>Telegram</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[40px] mt-6 flex flex-col items-center justify-center">
            <p className="text-[#FFC045] text-xs">
              © 2022 Bunyod House. Developed by <a href="https://t.me/maykl_web" target="_black"> ME :)</a>
            </p>
          </div>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
