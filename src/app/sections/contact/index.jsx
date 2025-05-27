"use client";

import React, { useEffect, useRef, useState } from "react";
import { IMaskInput } from "react-imask";

function Contact() {
  const nameRef = useRef(null);
  const selectRef = useRef(null);
  const phoneRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = nameRef.current.value.trim();
    const select = selectRef.current.value;
    const phone = phoneRef.current.value.trim();

    const token = "8002417328:AAE6NVoyOv8inp3xTFveNwAg6X95bzcJh2c";
    const chat_id = "-4859800808";
    const text = `Ism: ${name}\nTelefon: ${phone}\nSavol: ${select}`;
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
      await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id,
          text,
        }),
      });

      nameRef.current.value = "";
      phoneRef.current.value = "";
      selectRef.current.selectedIndex = 0;
      alert("Xabar yuborildi!");
    } catch (err) {
      console.error("Telegramga yuborishda xatolik:", err);
      alert("Xatolik yuz berdi. Qaytadan urinib ko'ring.");
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://api-maps.yandex.ru/2.1/?apikey=YOUR_API_KEY_HERE&lang=ru_RU";
    script.type = "text/javascript";
    script.onload = () => {
      window.ymaps.ready(() => {
        const myMap = new window.ymaps.Map("map", {
          center: [41.5599936, 60.6076249],
          zoom: 16,
          controls: [],
        });

        const myPlacemark = new window.ymaps.Placemark(
          [41.5599936, 60.6076249],
          {
            hintContent: "Yandex HQ",
            balloonContent: "This is Yandex!",
          }
        );

        myMap.geoObjects.add(myPlacemark);
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <section id="contact" className="mt-10 container">
      <h1 className="text-4xl text-[#FFC045]">Aloqa</h1>
      <div className="w-full mt-10 flex flex-col-reverse lg:flex-row gap-10 relative">
        <div className="w-full lg:w-[50%] h-[400px] relative shadow-[inset_0px_0px_20px_10px_#ffffff]">
          <div
            id="map"
            className="w-full h-full absolute shadow-[inset_0px_0px_20px_10px_#ffffff]"
          ></div>
          <div className="w-full h-full pointer-events-none shadow-[inset_0px_0px_20px_20px_#ffffff]  absolute"></div>
        </div>

        <div className="w-full lg:w-[50%]">
          <form onSubmit={handleSubmit} className="form flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-2xl text-[#FFC045]" htmlFor="name">
                Ismingiz
              </label>
              <input
                required
                ref={nameRef}
                className="name p-3 text-lg bg-white border-[#FFC045] border-[1px] border-solid outline-none"
                type="text"
                placeholder="Ismingiz..."
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-2xl text-[#FFC045]" htmlFor="phone">
                Telefon
              </label>
              <IMaskInput
                mask="+998 00 000 00 00"
                lazy={true} // bo‘sh joylarni ham ko‘rsatadi
                unmask={true} // qiymatni mask bilan saqlaydi
                inputRef={phoneRef}
                placeholder="Telefon raqamingiz..."
                className="name p-3 text-lg bg-white border-[#FFC045] border-[1px] border-solid outline-none"
                required
              />

            </div>
            <div>
              <label htmlFor="select"></label>
              <select
                ref={selectRef}
                required
                className="w-full p-4 text-lg bg-white text-gray-500 border-[#FFC045] border-[1px] border-solid outline-none"
                name="select"
                id="select"
              >
                <option className="bg-white" value="">
                  Sizga qanday yordam bera olamiz?
                </option>
                <option value="Savol">Savol</option>
                <option value="Taklif">Taklif</option>
                <option value="Shikoyat">Shikoyat</option>
                <option value="Boshqa">Boshqa</option>
              </select>
            </div>
            <button className="bg-[#FFC045] text-white text-xl mt-5 p-4 cursor-pointer">
              YUBORISH
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
