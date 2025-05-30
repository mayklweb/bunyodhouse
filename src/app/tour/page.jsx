"use client";
import { ArrowLeft } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { Vector3 } from "three";


const Tour = () => {
  const containerRef = useRef(null);
  const viewer = useRef(null);

  const panorama1 = useRef(null);
  const panorama5 = useRef(null);

  useEffect(() => {
    const loadPanolens = async () => {
      const PANOLENS = await import("panolens");

      panorama1.current = new PANOLENS.ImagePanorama("/tour/image-1.webp");
      const panorama2 = new PANOLENS.ImagePanorama("/tour/image-2.webp");
      const panorama3 = new PANOLENS.ImagePanorama("/tour/image-3.webp");
      const panorama4 = new PANOLENS.ImagePanorama("/tour/image-4.webp");
      panorama5.current = new PANOLENS.ImagePanorama("/tour/image-5.webp");
      const panorama6 = new PANOLENS.ImagePanorama("/tour/image-6.webp");
      const panorama7 = new PANOLENS.ImagePanorama("/tour/image-7.webp");
      const panorama8 = new PANOLENS.ImagePanorama("/tour/image-8.webp");
      const panorama9 = new PANOLENS.ImagePanorama("/tour/image-9.webp");
      const panorama10 = new PANOLENS.ImagePanorama("/tour/image-10.webp");
      const panorama11 = new PANOLENS.ImagePanorama("/tour/image-11.webp");
      const panorama12 = new PANOLENS.ImagePanorama("/tour/image-12.webp");

      viewer.current = new PANOLENS.Viewer({
        container: containerRef.current,
        autoHideInfospot: false,
        controlBar: false,
        cameraFov: 100,
        output: 'console',
        autoRotate: false,
        horizontalView: false,
      });

      viewer.current.add(panorama1.current);
      viewer.current.add(panorama2);
      viewer.current.add(panorama3);
      viewer.current.add(panorama4);
      viewer.current.add(panorama5.current);
      viewer.current.add(panorama6);
      viewer.current.add(panorama7);
      viewer.current.add(panorama8);
      viewer.current.add(panorama9);
      viewer.current.add(panorama10);
      viewer.current.add(panorama11);
      viewer.current.add(panorama12);

      panorama1.current.link(panorama2, new Vector3(1800, 0, 1400));
      panorama1.current.link(panorama3, new Vector3(3000, 0, 100));
      panorama2.link(panorama3, new Vector3(800, 0, -3000));
      panorama2.link(panorama4, new Vector3(2400, 0, 1600));
      panorama2.link(panorama1.current, new Vector3(-2800, 0, -2000));
      panorama3.link(panorama2, new Vector3(-600, 0, 2200));
      panorama3.link(panorama4, new Vector3(2600, 0, 2200));
      panorama3.link(panorama1.current, new Vector3(-3000, 0, -200));
      panorama4.link(panorama3, new Vector3(-1200, 0, -3000));
      panorama4.link(panorama2, new Vector3(-2200, 0, -2600));
      panorama5.current.link(panorama6, new Vector3(200, 0, 2800));

      panorama6.link(panorama5.current, new Vector3(-800, -200, -2400));
      panorama6.link(panorama7, new Vector3(-1400, 600, -1800));

      panorama7.link(panorama8, new Vector3(200, 0, -1600));
      panorama7.link(panorama6, new Vector3(2000, -400, 200));

      panorama8.link(panorama7, new Vector3(-1800, 0, -200));
      panorama8.link(panorama9, new Vector3(600, 0, 1200));
      panorama8.link(panorama10, new Vector3(2600, 0, -200));

      panorama9.link(panorama8, new Vector3(0, 0, 1600));
      panorama9.link(panorama10, new Vector3(-1800, 0, -600));

      panorama10.link(panorama8, new Vector3(-1600, 0, 1800));
      panorama10.link(panorama9, new Vector3(-400, 0, 1600));
      panorama10.link(panorama11, new Vector3(1400, 0, -300));

      panorama11.link(panorama10, new Vector3(-1200, 0, -1000));
      panorama11.link(panorama12, new Vector3(1400, 0, -300));

      panorama12.link(panorama11, new Vector3(-1200, 0, 200));


      viewer.current.setPanorama(panorama12);
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
            OLDI TOMON
          </button>
          <button
            className="p-2 bg-white text-[#ffc045] cursor-pointer"
            onClick={() => viewer.current?.setPanorama(panorama5.current)}
          >
            ORQA TOMON
          </button>
        </div>
      </div>
      <div className="w-full h-full" ref={containerRef} />
    </div>
  );
};

export default dynamic(() => Promise.resolve(Tour), { ssr: true });