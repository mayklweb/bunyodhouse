"use client";
import { ArrowLeft } from "lucide-react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Vector3 } from "three";


const Tour = () => {
  const containerRef = useRef(null);
  const viewer = useRef(null);

  const panorama1 = useRef(null);
  const panorama4 = useRef(null);

  useEffect(() => {
    const loadPanolens = async () => {
      const PANOLENS = await import("panolens");

      panorama1.current = new PANOLENS.ImagePanorama("/tour/image-1.webp");
      const panorama2 = new PANOLENS.ImagePanorama("/tour/image-2.webp");
      const panorama3 = new PANOLENS.ImagePanorama("/tour/image-3.webp");
      panorama4.current = new PANOLENS.ImagePanorama("/tour/image-4.webp");
      const panorama5 = new PANOLENS.ImagePanorama("/tour/image-5.webp");
      const panorama6 = new PANOLENS.ImagePanorama("/tour/image-6.webp");
      const panorama7 = new PANOLENS.ImagePanorama("/tour/image-7.webp");
      const panorama8 = new PANOLENS.ImagePanorama("/tour/image-8.webp");

      viewer.current = new PANOLENS.Viewer({
        container: containerRef.current,
        autoHideInfospot: false,
        controlBar: false,
        cameraFov: 75,
        output: 'console',
        autoRotate: false,
        horizontalView: false,
      });

      viewer.current.add(panorama1.current);
      viewer.current.add(panorama2);
      viewer.current.add(panorama3);
      viewer.current.add(panorama4.current);
      viewer.current.add(panorama5);
      viewer.current.add(panorama6);
      viewer.current.add(panorama7);
      viewer.current.add(panorama8);

      panorama1.current.link(panorama2, new Vector3(1800, 0, 1400));
      panorama1.current.link(panorama3, new Vector3(3000, 0, 100));
      panorama2.link(panorama3, new Vector3(800, 0, -3000));
      panorama2.link(panorama1.current, new Vector3(-2800, 0, -2000));
      panorama3.link(panorama2, new Vector3(-600, 0, 2200));
      panorama3.link(panorama1.current, new Vector3(-3000, 0, -200));
      panorama4.current.link(panorama5, new Vector3(200, 0, 2800));
      panorama5.link(panorama4.current, new Vector3(-800, -200, -2400));
      panorama5.link(panorama6, new Vector3(-1400, 600, -1800));
      panorama6.link(panorama7, new Vector3(1800, 0, -400));
      panorama6.link(panorama5, new Vector3(-2400, 0, 1700));
      panorama7.link(panorama6, new Vector3(-1800, 0, -1600));
      panorama7.link(panorama8, new Vector3(2000, 0, -400));
      panorama8.link(panorama7, new Vector3(-2400, 0, 400));

      viewer.current.setPanorama(panorama1.current);
    };

    loadPanolens();

    return () => {
      if (viewer.current) {
        viewer.current.dispose();
        viewer.current = null;
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <div className="relative w-full h-screen">
      <div className="w-full h-15 md:h-20 p-2 flex items-center justify-between bg-transparent z-50 fixed top-0 left-0">
        <Link className="text-[#ffc045] p-2 bg-white" href={"/"}>
          <ArrowLeft />
        </Link>
        <div className="flex items-center gap-4">
          <button
            className="p-2 bg-white text-[#ffc045] cursor-pointer"
            onClick={() => viewer.current?.setPanorama(panorama1.current)}
          >
            OLDI
          </button>
          <button
            className="p-2 bg-white text-[#ffc045] cursor-pointer"
            onClick={() => viewer.current?.setPanorama(panorama4.current)}
          >
            ORQA
          </button>
        </div>
      </div>
      <div className="w-full h-full" ref={containerRef} />
    </div>
  );
};

export default dynamic(() => Promise.resolve(Tour), { ssr: true });
