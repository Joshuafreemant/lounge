import React, { useEffect } from "react";

import PhotoGallery from "./PhotoGallery";
import AOS from "aos";
import "aos/dist/aos.css";
const Entreprise = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const images = [
    {
      src: "/ambiance-chaleureuse-lougne-garden-reunion.png",
      width: 320,
      height: 174,
    },
    {
      src: "/champagne.png",
      width: 320,
      height: 174,
    },
    {
      src: "/soiree-entreprise-974-1.png",
      width: 320,
      height: 160,
    },
    {
      src: "/soiree-entreprise-974-1.png",
      width: 320,
      height: 160,
    },
  ];

  return (
    <div className="-mt-6 mb-8 p-8 md:flex flex-row-reverse md:px-20 lg:px-32 items-center md:gap-4">
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="500"
        data-aos-anchor-placement="bottom-bottom"
        className="bg-[#4e3a33] rounded-md shadow-element w-full text-center md:py-20 md:px-4 py-5 flex flex-col items-center justify-center"
      >
        <h2 className=" font-kristi text-[45px] font-medium text-[#F07D00]">
          Pour votre SOIRÉE​
        </h2>
        <h2 className="text-white font-lato text-[35px] md:text-[52px] md:leading-[45px] md:px-12 font-extrabold p-4 leading-9">
          D'ENTREPRISE
        </h2>
        <img src="/icon.png" className="w-5 h-5 opacity-40" alt="" />
        <p className="text-white leading-6 text-sm p-4 md:px-12">
          Vous souhaitez organiser une soirée d’entreprise dans un lieu
          d’exception avec un service très qualitatif ? Découvrez nos offres clé
          en main …
        </p>
        <span className="underline font-bold text-[#f07d00] pb-6 pt-2">
          En Faite vôtre devis et commandez
        </span>
      </div>
      <div className="">
        <PhotoGallery props={images} />
      </div>
    </div>
  );
};

export default Entreprise;
