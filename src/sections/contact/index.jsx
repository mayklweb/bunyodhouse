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
    <div className="">
      <h2>Contact Us</h2>
      <div className="w-full flex flex-col-reverse lg:flex-row  relative  ">
        <div className="w-full lg:w-2/4 h-[400px] relative shadow-[inset_0px_0px_20px_10px_#ffffff]">
          <div
            id="map"
            className="w-full h-full absolute shadow-[inset_0px_0px_20px_10px_#ffffff]"
          ></div>
          {/* <div className="w-full h-full  shadow-[inset_0px_0px_20px_20px_#ffffff] bg-no-repeat bg-cover bg-center absolute  align-bottom"></div> */}
        </div>
        <div className="container">
          <div className="w-full lg:w-2/4">
            <div className="w-full">
              <h1 className="text-2xl lg:text-4xl font-marcellus">Aloqa</h1>
              <div className="mt-4 lg:mt-10 flex flex-col gap-4">
                <div className="flex gap-2 items-start">
                  <h2 className="text-lg lg:text-2xl font-marcellus">
                    Manzil:
                  </h2>
                  <p className="text-base lg:text-xl font-marcellus">
                    Xorazm viloyati, Urganch tumani, Gaybu qishlogi
                  </p>
                </div>
                <div className="flex gap-2 items-start">
                  <h2 className="text-lg lg:text-2xl font-marcellus">
                    Telefon:
                  </h2>
                  <div>
                    <p className="text-base lg:text-xl font-marcellus">
                      +998 99 999 99 99
                    </p>

                    <p className="text-base lg:text-xl font-marcellus">
                      +998 99 999 99 99
                    </p>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <h2 className="text-lg lg:text-2xl font-marcellus">
                    E-mail:
                  </h2>
                  <p className="text-base lg:text-xl font-marcellus">
                    buyurtma@bunyodhouse.uz
                  </p>
                </div>
                <div className="flex gap-2 items-center">
                  <h2 className="text-lg lg:text-2xl font-marcellus">
                    Biz ijtimoiy tarmoqlarda:
                  </h2>
                  <p className="text-base lg:text-xl font-marcellus"></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
