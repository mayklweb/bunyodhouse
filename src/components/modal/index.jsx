'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import { menu } from '@/utils/data';

function Modal({ openModal, setOpenModal }) {
    const containerRef = useRef(null);

    useEffect(() => {
        if (openModal && containerRef.current) {
            gsap.fromTo(
                containerRef.current,
                { height: '0%' },
                { duration: 0.8, ease: 'power3.out', height: '362px' }
            );
        } else if (!openModal && containerRef.current) {
            gsap.to(containerRef.current, {
                height: '0%',
                duration: 0.8,
                ease: 'power3.in',
                onComplete: () => setOpenModal(false),
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

    if (!openModal) return null;

    return (
        <div
            ref={containerRef}
            role="dialog"
            aria-modal="true"
            className="fixed top-0 left-0 w-full bg-white z-40 overflow-hidden shadow-lg"
        >
            <div className="w-full h-full flex flex-col justify-end items-center">
                {menu.map(({ id, path, text }) => (
                    <div key={id} className="border-y border-[#FFC045] w-full p-2 text-center">
                        <Link
                            href={path}
                            onClick={() => setOpenModal(false)}
                            className="text-lg text-[#FFC045]"
                        >
                            {text}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Modal;
