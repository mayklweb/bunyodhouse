"use client";

import { Footer, Header } from "@/components";
import Modal from "@/components/modal";
import { About, Banner, Comments, Contact, Project } from "@/app/sections";
import Info from "@/app/sections/info";
import { useEffect, useState } from "react";
import Apartment from "./sections/apartment";
import House from "./sections/house";
import { X } from "lucide-react";

export default function Home() {
  const [openModal, setOpenModal] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Header openModal={openModal} setOpenModal={setOpenModal} />
      <main>
        <Banner />
        <Project />
        <About />
        <Apartment />
        <Info />
        <House />
        <Comments />
        <Contact />
      </main>
      <Footer />
      {showModal && <div style={styles.overlay}>
        <div style={styles.modal}>
          <button onClick={() => setShowModal(false)} className="absolute top-2.5 right-2.5 cursor-pointer">
            <X />
          </button>
          <h2 className="text-2xl text-center">Qayta qo'ng'iroq!</h2>
          <p className="text-sm text-center">Menejer sizga tez orada qo'ng'iroq qiladi</p>
          <form className="">
            <div className="flex flex-col mt-5">
              <input placeholder="Ismingiz" className="text-sm p-2 mt-2 border-[1px] border-solid border-[#ffc045]" type="text" />
            </div>
            <div className="flex flex-col mt-4">
              <input placeholder="Telefon" className="text-sm p-2 mt-2 border-[1px] border-solid border-[#ffc045]" type="text" />
            </div>
          </form>
          <button className="w-full h-full bg-[#FFC045] text-white text-md mt-5 p-2 cursor-pointer border-[1px] border-solid border-[#ffc045] hover:bg-transparent hover:text-[#ffc045] transition-all duration-300 ease-in-out">
            YUBORISH
          </button>
        </div>
      </div>}
      <Modal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
}


const styles = {
  overlay: {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex', justifyContent: "center", alignItems: "center",
    zIndex: 9999,
  },
  modal: {
    backgroundColor: '#fff',
    padding: '1.5rem',
    // textAlign: 'center',
    position: "relative",
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
  },
  button: {
    marginTop: '1rem',
    padding: '0.5rem 1rem',
    fontSize: '16px',
    cursor: 'pointer',
  }
};