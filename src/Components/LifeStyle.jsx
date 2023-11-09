import React, { useEffect } from "react";

import PhotoGallery from "./PhotoGallery";
import AOS from "aos";
import "aos/dist/aos.css";
const LifeStyle = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const images = [
    {
      src: "/piste.png",
      width: 320,
      height: 174,
    },
    {
      src: "/soiree.png",
      width: 320,
      height: 174,
    },
    {
      src: "/espace.png",
      width: 310,
      height: 160,
    },
    {
      src: "",
      width: 310,
      height: 160,
    },
  ];

  const imagesTwo = [
    {
      src: "/espace.png",
      original: "/espace.png",
      width: 320,
      height: 164,
    },
    {
      src: "/marigage.png",
      original: "/marigage.png",
      width: 320,
      height: 174,
    },
    {
      src: "/mariage.png",
      original: "/mariage.png",
      width: "60%",
      height: 180,
    },
    // {
    //     src: "",
    //     original: "/espace.png",
    //     width: 310,
    //     height: 160,
    //   },
  ];

  return (
    <div className="px-8 py-20 bg-white">
      <h1 className="text-black font-extrabold text-center text-[27px] font-lato">
        3 ESPACES « LIFESTYLE »
      </h1>
      <h3 className="text-center text-sm mt-4 leading-6 md:px-20 lg:px-[350px] font-semibold">
        L’EFFET « WOW » ET LES ÉMOTIONS h3ROCURÉES PAR LE LOUNGE GARDEN À SES
        INVITÉS PENDANT UNE SOIRÉE, RESTERONT À JAMAIS GRAVÉS DANS LEURS
        MÉMOIRES.
      </h3>

      <h2 className="font-kristi text-[43px] font-semibold text-center my-8">
        Didier Chane Si Ken​
      </h2>
      <div className="md:flex md:flex-row-reverse items-center md:px-12 lg:px-32 ">
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
          data-aos-anchor-placement="bottom-bottom"
          className="bg-white shadow-element md:px-20 md:w-7/12 w-full text-center md:py-8 py-5 flex flex-col items-center justify-center"
        >
          <h2 className=" font-kristi text-[45px] font-medium text-[#F07D00]">
            Pensé pour
          </h2>
          <h2 className="font-lato text-[35px] font-extrabold p-4 leading-9 md:text-[40px] lg:text-[50px] md:leading-10 ">
            SATISFAIRE TOUTES VOS EXIGENCES
          </h2>
          <img src="/icon.png" className="w-5 h-5 opacity-40" alt="" />
          <p className="text-black leading-6 text-sm p-4 md:text-base">
            Situé dans les hauts de Saint-Paul, le Lounge Garden, est une salle
            de réception mêlant modernité et tradition, tout en conservant
            l’esprit et l’architecture d’origine. Un croisement entre le charme
            de la boutique chinoise « lontan » et un espace événementiel remis
            aux goûts du jour.
          </p>
          <span className="underline font-bold text-[#f07d00] pb-6 pt-2">
            En savoir plus
          </span>
        </div>

        <div className="md:w-5/12">
          <PhotoGallery props={images} />
        </div>
      </div>

      <div className="my-8 md:flex md:flex-row items-center md:px-12 lg:px-16 md:my-20 gap-20">
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="500"
          data-aos-anchor-placement="bottom-bottom"
          className="md:w-6/12 bg-white shadow-element w-full text-center md:py-8 py-5 flex flex-col items-center justify-center"
        >
          <h2 className=" font-kristi text-[45px] font-medium text-[#F07D00] md:text-[50px] lg:text-[55px]">
            20 BONNES RAISONS
          </h2>
          <h2 className="font-lato text-[35px] font-extrabold p-4 leading-9 md:text-[40px] lg:text-[50px]">
            DE NOUS CHOISIR
          </h2>
          <img src="/icon.png" className="w-5 h-5 opacity-40" alt="" />
          <p className="text-black leading-6 text-sm p-4 md:px-12">
            Attendez-vous à un accueil de première classe sur tapis rouge avec
            une hôtesse à votre disposition lors de votre arrivée. L’atmosphère
            du Lounge Garden avec son jardin vous fera sentir dans un confort
            absolu avec ses bancs architecturaux et sa terrasse à vue
            panoramique.
          </p>
          <span className="underline font-bold text-[#f07d00] pb-6 pt-2">
            En savoir plus
          </span>
        </div>
        <div className="md:w-6/12 lg:pr-40">
          <PhotoGallery props={imagesTwo} />
        </div>
      </div>
    </div>
  );
};

export default LifeStyle;
