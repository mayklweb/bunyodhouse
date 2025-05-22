'use client';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import Link from 'next/link';

function Modal({ openModal }) {
    const containerRef = useRef(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        if (openModal) {
            setShowModal(true);
        }
    }, [openModal]);

    useEffect(() => {
        if (showModal && containerRef.current) {
            gsap.fromTo(
                containerRef.current,
                { height: '0%' },
                { duration: 0.8, ease: 'power3.out', height: '362px' }
            );
        }
    }, [showModal]);

    useEffect(() => {
        if (!openModal && containerRef.current) {
            gsap.to(containerRef.current, {

                height: '0%',
                duration: 0.8,
                ease: 'power3.in',
                onComplete: () => setShowModal(false),
            });
        }
    }, [openModal]);

    useEffect(() => {
        if (openModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [openModal]);

    if (!showModal) return null;

    return (
        <div ref={containerRef} className="fixed top-0 left-0 w-full bg-white z-40 overflow-hidden shadow-lg">
            <div className='w-full h-full flex flex-col justify-end items-center pt-34 '>
                <div className='border-y border-[#FFC045] w-full p-2 text-center'>
                    <Link href={"/"} className="text-lg text-[#FFC045]">ASOSIY</Link>
                </div>
                <div className='border-b border-[#FFC045] w-full p-2 text-center'>
                    <Link href={"#about"} className="text-lg text-[#FFC045]">BIZ HAQIMIZDA</Link>
                </div>
                <div className='border-b border-[#FFC045] w-full p-2 text-center'>
                    <Link href={"#projects"} className="text-lg text-[#FFC045]">XONADONLAR</Link>
                </div>
                <div className='border-b  border-[#FFC045] w-full p-2 text-center'>
                    <Link href={"#info"} className="text-lg text-[#FFC045]">FAOLIYAT</Link>
                </div>
                <div className='border-b  border-[#FFC045] w-full p-2 text-center'>
                    <Link href={"#projects"} className="text-lg text-[#FFC045]">LOYHALAR</Link>
                </div>
                <div className='border-b border-[#FFC045] w-full p-2 text-center'>
                    <Link href={"#contact"} className="text-lg text-[#FFC045]">ALOQA</Link>
                </div>

            </div>
        </div>
    );
}

export default Modal;
