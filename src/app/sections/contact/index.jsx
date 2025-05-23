"use client";

import React, { useEffect } from "react";

function Contact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://api-maps.yandex.ru/2.1/?apikey=YOUR_API_KEY_HERE&lang=ru_RU";
    script.type = "text/javascript";
    script.onload = () => {
      window.ymaps.ready(initMap);
    };
    document.body.appendChild(script);

    function initMap() {
      const myMap = new window.ymaps.Map("map", {
        center: [41.5599936, 60.6076249], // Darital location
        zoom: 16,
        controls: [], //
      });

      const myPlacemark = new window.ymaps.Placemark([41.5599936, 60.6076249], {
        hintContent: "Yandex HQ",
        balloonContent: "This is Yandex!",
      });

      myMap.geoObjects.add(myPlacemark);
    }
  }, []);

  return (
    <section id="contact" className="mt-10">
      <div className="max-w-[1024px] w-full mx-auto px-4">
        {/* <h1 className="text-4xl text-[#FFC045] mb-10">Aloqa</h1> */}
        <div className="w-full flex flex-col-reverse lg:flex-row gap-10 relative">

          <div className="w-full lg:w-2/4 flex flex-col gap-10 my-10">
            <div className="flex gap-2 items-start text-lg lg:text-3xl">
              <h2>Manzil:</h2>
              <p>
                Xorazm viloyati, Urganch tumani, Gaybu qishlogi
              </p>
            </div>
            <div className="flex gap-2 items-start text-lg lg:text-3xl">
              <h2>Telefon:</h2>
              <div>
                <p>+998 99 501 70 70</p>
                <p>+998 99 966 70 70</p>
              </div>
            </div>
            <div className="flex gap-2 items-start">

              <div className="flex gap-10 text-lg lg:text-3xl">
                <p>Instagram</p>
                <p>YouTube</p>
                <p>Telegram</p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/4 ">
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-2xl text-[#FFC045]" htmlFor="name">
                  Ismingiz
                </label>
                <input
                  className="p-4 text-lg bg-white border-[#FFC045] border-[1px] border-solid outline-none"
                  type="text"
                  placeholder="Ismingiz..."
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-2xl text-[#FFC045]" htmlFor="name">
                  Telefon
                </label>
                <input
                  className="p-4 text-lg bg-white border-[#FFC045] border-[1px] border-solid outline-none"
                  type="text"
                  placeholder="Telefon..."
                />
              </div>

              <button className="bg-[#FFC045] text-white text-xl mt-6 p-4">
                YUBORISH
              </button>
            </form>

            {/* <div className="w-full">
              <h1 className="text-2xl lg:text-4xl">Aloqa</h1>
              <div className="mt-4 lg:mt-10 flex flex-col gap-4">
                <div className="flex gap-2 items-start">
                  <h2 className="text-lg lg:text-2xl">
                    Manzil:
                  </h2>
                  <p className="text-base lg:text-xl mt-1">
                    Xorazm viloyati, Urganch tumani, Gaybu qishlogi
                  </p>
                </div>
                <div className="flex gap-2 items-start">
                  <h2 className="text-lg lg:text-2xl">
                    Telefon:
                  </h2>
                  <div>
                    <p className="text-base lg:text-xl mt-1">
                      +998 99 999 99 99
                    </p>

                    <p className="text-base lg:text-xl">
                      +998 99 999 99 99
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <h2 className="text-lg lg:text-2xl">
                    E-mail:
                  </h2>
                  <p className="text-base lg:text-xl">
                    buyurtma@bunyodhouse.uz
                  </p>
                </div>

              </div>
            </div> */}
          </div>
        </div>

      </div>
      <div className="w-full lg:2/4 h-[400px] relative shadow-[inset_0px_0px_20px_10px_#ffffff] mt-10">
        <div
          id="map"
          className="w-full h-full absolute shadow-[inset_0px_0px_20px_10px_#ffffff]"
        ></div>
        <div className="w-full h-full pointer-events-none aling-bottom shadow-[inset_0px_0px_20px_20px_#ffffff] bg-no-repeat bg-cover bg-center absolute  align-bottom"></div>
      </div>
    </section>
  );
}

export default Contact;
