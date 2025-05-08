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
        controls: [] // 
      });

      myMap.behaviors.disable([
        // "scrollZoom",   // disable scroll zoom
        // "drag",         // disable dragging
        // "dblClickZoom", // disable double-click zoom
        // "multiTouch",   // disable multitouch
      ]);

      const myPlacemark = new window.ymaps.Placemark([41.5599936, 60.6076249], {
        hintContent: "Yandex HQ",
        balloonContent: "This is Yandex!",
      });

      myMap.geoObjects.add(myPlacemark);
    }
  }, []);

  return (
    <div>
      <h2>Contact Us</h2>
      <div className="w-full">
        <div className="w-2/4 h-[400px] bg-white shadow-inner rounded-lg">
          <div id="map" className="w-full h-full rounded-lg"></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
