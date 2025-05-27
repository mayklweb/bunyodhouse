"use client";

import { Footer, Header } from "@/components";
import Modal from "@/components/modal";
import { About, Banner, Comments, Contact, Project } from "@/app/sections";
import Info from "@/app/sections/info";
import { useState } from "react";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Header openModal={openModal} setOpenModal={setOpenModal} />
      <main>
        <Banner />
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
