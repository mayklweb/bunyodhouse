import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-14">
      <div className="w-full bg-no-repeat bg-top bg-cover bg-[url('/footer.png')]">
        <div className="container">
          <div className="grid grid-row-3 lg:grid-cols-3 justify-between pt-[80px] pb-[60px]">
            <div className="w-3/4 flex flex-col items-center">
              <div className="w-full">
                <img src="/logo-white.svg" alt="" />
              </div>
              {/* <p className="text-white text-justify mt-2">
                "Bunyod House" qurilish firmasi Xorazm viloyatida 2019-yilda
                tashkil topgan. Faoliyatimizning birinchi kunlaridan boshlab biz
                mijozlarimizga yuqori sifatli uylarni taqdim qilib kelmoqdamiz.
              </p> */}
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <h1 className="text-white lg:text-4xl">Sayt haritasi</h1>
              <div className="grid grid-cols-2 gap-3">
                <p className="text-white lg:text-xl">Asosiy</p>
                <p className="text-white lg:text-xl">Faoliyat</p>
                <p className="text-white lg:text-xl">Narxlar</p>
                <p className="text-white lg:text-xl">Biz haqimizda</p>
                <p className="text-white lg:text-xl">Loyihalar</p>
                <p className="text-white lg:text-xl">Aloqa</p>
              </div>
            </div>
            <div className="flex flex-col gap-4 mt-4">
              <h1 className="text-white lg:text-4xl">Aloqa</h1>
              <div className="flex flex-col gap-4">
                <div className="flex gap-2 items-start">
                  <h2 className="text-white lg:text-2xl">Manzil:</h2>
                  <p className="text-white lg:text-2xl">
                    Xorazm viloyati, Urganch tumani, Gaybu qishlogi
                  </p>
                </div>
                <div className="flex gap-2 items-start">
                  <h2 className="text-white lg:text-2xl">Telefon:</h2>
                  <div>
                    <p className="text-white lg:text-2xl">+998 99 999 99 99</p>
                    <p className="text-white lg:text-2xl">+998 99 999 99 99</p>
                  </div>
                </div>
                <div className="flex gap-2 items-start">
                  <h2 className="text-white lg:text-2xl">E-mail:</h2>
                  <p className="text-white lg:text-2xl">
                    buyurtma@bunyodhouse.uz
                  </p>
                </div>
                <div className="flex gap-2 items-start">
                  <h2 className="text-lg lg:text-2xl">
                    Biz ijtimoiy tarmoqlarda:
                  </h2>
                  <div>
                    <p className="text-base lg:text-xl mt-1">Instagram</p>
                    <p className="text-base lg:text-xl">YouTube</p>
                    <p className="text-base lg:text-xl">Telegram</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container bg-black w-full h-[40px] flex flex-col items-center justify-center">
        <p className="text-white text-xs">
          © 2022 Bunyod House. Developed by{" "}
          <a href="https://t.me/maykl_web" target="_black">
            MAYKL
          </a>
          .
        </p>
      </div>
    </footer>
  );
}

export default Footer;
