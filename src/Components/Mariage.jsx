import React, { useEffect } from "react";

import PhotoGallery from "./PhotoGallery";
import AOS from "aos";
import "aos/dist/aos.css";
const Mariage = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const images = [
    {
      src: "/ceremonie-mariage-1.png",
      width: 320,
      height: 174,
    },
    {
      src: "/piste.png",
      width: 320,
      height: 174,
    },
    {
      src: "/mariage-premium.png",
      width: 310,
      height: 160,
    },
  ];

  return (
    <div className="p-8 my-8 md:flex md:px-20 lg:px-32 items-center md:gap-4">
      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="500"
        data-aos-anchor-placement="bottom-bottom"
        className="bg-white rounded-md shadow-element md:w-7/12 w-full text-center md:py-20 md:px-20 py-5 flex flex-col items-center justify-center"
      >
        <h2 className=" font-kristi text-[45px] font-medium text-[#F07D00]">
          Pour VOTRE
        </h2>
        <h2 className="font-lato text-[35px] md:text-[55px] font-extrabold p-4 leading-9 uppercase">
          Mariage
        </h2>
        <img src="/icon.png" className="w-5 h-5 opacity-40" alt="" />
        <p className="text-black leading-6 text-sm p-4">
          Vous souhaitez organiser le mariage de vos rêves dans un endroit
          innovant, moderne et traditionnel afin de laisser dans tous les
          esprits une image d’un mariage exceptionnel ? Découvrez nos offres de
          mariage clés en mains avec DJ, Salle de réception, Traiteur et bien
          plus !
        </p>
        <span className="underline font-bold text-[#f07d00] pb-6 pt-2">
          Faite vôtre devis et commandez
        </span>
      </div>
      <div className="md:w-5/12">
        <PhotoGallery props={images} />
      </div>
    </div>
  );
};

export default Mariage;
