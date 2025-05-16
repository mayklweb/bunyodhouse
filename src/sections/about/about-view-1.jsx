"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(SplitText, ScrollTrigger);

function AboutView1() {


    return (
        <section className="py-10">
            <div className="container">
                <h1 className="text-4xl text-[#FFC045]">Biz xaqimizda</h1>
                <div className="w-full mt-10 bg-no-repeat bg-center bg-contain bg-[url('/about.webp')] flex flex-col-reverse md:flex-row gap-10 bg-[length: 100%]">
                    <div className="w-2/4">
                        <h1 className="text-4xl">
                            "Bunyod House" qurilish firmasi Xorazm viloyatida 2019-yilda
                            tashkil topgan. Faoliyatimizning birinchi kunlaridan boshlab biz
                            mijozlarimizga yuqori sifatli uylarni taqdim qilib kelmoqdamiz.
                        </h1>
                    </div>
                    <div className="w-2/4 grid grid-cols-2 gap-4">
                        <div className="flex flex-col items-center justify-start">
                            <p className="text-8xl">99+</p>
                            <p className="text-2xl">DAN ORTIQ BAXTLI OILALAR</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p>+99</p>
                            <p>xonadon</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p>+99</p>
                            <p>ta muvaffaqiyatli loyiha</p>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <p>+99</p>
                            <p>lorem</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutView1;
