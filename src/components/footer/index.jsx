"use client";

import Image from "next/image";
import Link from "next/link";
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
                <Link href={'/'}>Asosiy</Link>
                <Link href={'#info'}>Faoliyat</Link>
                <Link href={'#projects'}>Xonadonlar</Link>
                <Link href={'#about'}>Biz haqimizda</Link>
                <Link href={'#projects'}>Loyihalar</Link>
                <Link href={'#contact'}>Aloqa</Link>
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
                    <p>+998 99 501 70 70</p>
                  </div>
                </div>
                <div className="flex gap-2 items-start">
                  <div className="flex gap-10 text-white text-lg lg:text-xl">
                    <Link target="_blank" href={'https://instagram.com/bunyod_house'} className="text-white">Instagram</Link>
                    <Link target="_blank" href={'https://www.youtube.com/@bunyodhouse6179'} className="text-white">YouTube</Link>
                    <Link target="_blank" href={'https://t.me/bunyodhouse'} className="text-white">Telegram</Link>
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
