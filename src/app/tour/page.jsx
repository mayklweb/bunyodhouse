"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Vector3 } from "three";


const Tour = () => {
  const containerRef = useRef(null);
  const viewer = useRef(null);
  const [front, setFront] = useState(null)
  const [back, setBack] = useState(null)

  useEffect(() => {
    const loadPanolens = async () => {
      const PANOLENS = await import("panolens");

      const panorama1 = new PANOLENS.ImagePanorama("/tour/image-1.jpg");
      const panorama2 = new PANOLENS.ImagePanorama("/tour/image-2.jpg");
      const panorama3 = new PANOLENS.ImagePanorama("/tour/image-3.jpg");
      const panorama4 = new PANOLENS.ImagePanorama("/tour/image-4.jpg");
      const panorama5 = new PANOLENS.ImagePanorama("/tour/image-5.jpg");
      const panorama6 = new PANOLENS.ImagePanorama("/tour/image-6.jpg");
      const panorama7 = new PANOLENS.ImagePanorama("/tour/image-7.jpg");
      const panorama8 = new PANOLENS.ImagePanorama("/tour/image-8.jpg");

      viewer.current = new PANOLENS.Viewer({
        container: containerRef.current,
        autoHideInfospot: false,
      });

      viewer.current.add(panorama1);
      viewer.current.add(panorama2);
      viewer.current.add(panorama3);
      viewer.current.add(panorama4);
      viewer.current.add(panorama5);
      viewer.current.add(panorama6);
      viewer.current.add(panorama7);
      viewer.current.add(panorama8);

      panorama1.link(panorama2, new Vector3(1800, 0, 1400));
      panorama1.link(panorama3, new Vector3(3000, 0, 100));
      panorama2.link(panorama3, new Vector3(800, 0, -3000));
      panorama2.link(panorama1, new Vector3(-2800, 0, -2000));
      panorama3.link(panorama2, new Vector3(-600, 0, 2200));
      panorama3.link(panorama1, new Vector3(-3000, 0, -200));
      panorama4.link(panorama5, new Vector3(200, 0, 2800));
      panorama5.link(panorama4, new Vector3(-800, -200, -2400));
      panorama5.link(panorama6, new Vector3(-1400, 600, -1800));

      panorama6.link(panorama7, new Vector3(1800, 0, -400));
      panorama6.link(panorama5, new Vector3(-2400, 0, 1700));

      panorama7.link(panorama6, new Vector3(-1800, 0, -1600));

      panorama7.link(panorama8, new Vector3(2000, 0, -400));

      panorama8.link(panorama7, new Vector3(-2400, 0, 400));

      viewer.current.setPanorama(panorama6);
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
      <div className="w-full h-15 md:h-20 bg-white z-50 fixed top-0 left-0">


        <div className="flex gap-4">
          <Link className="text-[#FFC045]" href={"/"}>
            ASOSIY
          </Link>
        </div>



        <button>
          FRONT
        </button>


      </div>
      <div className="mt-16 md:mt-20 w-full h-full" ref={containerRef} />
    </div >
  );
};

export default dynamic(() => Promise.resolve(Tour), { ssr: true });
