import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from "gsap/SplitText";

gsap.registerPlugin(SplitText, ScrollTrigger);

function Project() {
  const data = [
    {
      id: 1,
      image: "/project.webp",
      area: "110.34 m2",
      location: "Urganch, G'oybu",
      year: "2023",
      type: "House",
      room: 4,
    },
    {
      id: 1,
      image: "/project.webp",
      area: "110.34 m2",
      location: "Urganch, G'oybu",
      year: "2023",
      type: "House",
      room: 4,
    },
    {
      id: 1,
      image: "/project.webp",
      area: "110.34 m2",
      location: "Urganch, G'oybu",
      year: "2023",
      type: "House",
      room: 4,
    },
    {
      id: 1,
      image: "/project.webp",
      area: "110.34 m2",
      location: "Urganch, G'oybu",
      year: "2023",
      type: "House",
      room: 4,
    },
  ];

  return (
    <div>
      <div className="container">
        <div className="grid grid-row-4 md:grid-cols-4 gap-10 py-10">
          {data.map((item, i) => (
            <div
              key={i}
              className="w-full p-5 border border-[#e8a900] flex flex-col gap-5"
            >
              <div>
                <img src={item.image} alt="" />
              </div>
              <div>
                <div className="flex gap-2">
                  <p className="text-[#1e1e1e]">Maydon</p>
                  <span className="mb-[1%] flex flex-auto border-b border-[#e8a900] border-dashed"></span>
                  <p>
                    110.34 m<sup>2</sup>
                  </p>
                </div>
                <div className="flex gap-2">
                  <p className="text-[#1e1e1e]">Xonalar</p>
                  <span className="mb-[1%] flex flex-auto border-b border-[#e8a900] border-dashed"></span>
                  <p>5</p>
                </div>

                <div className="flex gap-2">
                  <p className="text-[#1e1e1e]">Qavat</p>
                  <span className="mb-[1%] flex flex-auto border-b border-[#e8a900] border-dashed"></span>
                  <p>2</p>
                </div>
                <div className="flex gap-2">
                  <p className="text-[#1e1e1e]">Location</p>
                  <span className="mb-[1%] flex flex-auto border-b border-[#e8a900] border-dashed"></span>
                  <p>{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
