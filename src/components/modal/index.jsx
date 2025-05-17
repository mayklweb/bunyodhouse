'use client';
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

function Modal({ openModal, setOpenModal }) {
    const containerRef = useRef(null);
    const [showModal, setShowModal] = useState(false);

    // Modalni ko‘rsatish
    useEffect(() => {
        if (openModal) {
            setShowModal(true);
        }
    }, [openModal]);

    // Modal ochilganda animatsiya
    useEffect(() => {
        if (showModal && containerRef.current) {
            gsap.fromTo(
                containerRef.current,
                { height: '0%' },
                { duration: 0.8, ease: 'power3.out', height: '32%' }
            );
        }
    }, [showModal]);

    // Modal yopilganda animatsiya
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

    // Scrollni bloklash
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
        <div
            ref={containerRef}
            className="fixed top-0 left-0 w-full bg-[#fffefa] z-40 overflow-hidden">
            <div className='w-full h-full flex flex-col justify-end pt-34'>
                <div className='border-b border-[0.5px] border-[#FFC045] w-full  p-2'>
                    <h1 className="text-xl text-[#FFC045]">ASOSIY</h1>
                </div>
                <div className='border-b border-[0.5px] border-[#FFC045] w-full  p-2'>
                    <h1 className="text-xl text-[#FFC045]">BIZ HAQIMIZDA</h1>
                </div>
                <div className='border-b border-[#FFC045] w-full  p-2'>
                    <h1 className="text-xl text-[#FFC045]">ALOQA</h1>
                </div>
                <div className='border-b border-[0.5px] border-[#FFC045] w-full  p-2'>
                    <h1 className="text-xl text-[#FFC045]">LOYHALAR</h1>
                </div>
            </div>
        </div>
    );
}

export default Modal;
