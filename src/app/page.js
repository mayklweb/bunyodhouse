"use client";

import { Footer, Header } from "@/components";
import Modal from "@/components/modal";
import { About, Banner, Comments, Contact, Project } from "@/app/sections";
import AboutView1 from "@/app/sections/about/about-view-1";
import BannerView1 from "@/app/sections/banner/banner-view-1";
import Info from "@/app/sections/info";
import { useState } from "react";

export default function Home() {

  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Header openModal={openModal} setOpenModal={setOpenModal} />
      <main>
        <BannerView1/>
        {/* <Banner /> */}
        {/* <AboutView1/> */}
        <About />
        <Project />
        <Info />
        <Comments />
        <Contact />
      </main>
      <Footer />
        <Modal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
}
