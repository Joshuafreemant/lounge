import React from "react";

import PhotoGallery from "./PhotoGallery";

const LifeStyle = () => {
  const images = [
    {
      src: "/piste.png",
      original: "/piste.png",
      width: 320,
      height: 174,
    },
    {
      src: "/soiree.png",
      original: "/soiree.png",
      width: 320,
      height: 174,
    },
    {
      src: "/espace.png",
      original: "/espace.png",
      width: 310,
      height: 160,
    },
    {
        src: "",
        original: "/espace.png",
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
    <div className="p-8 bg-white">
      <h1 className="text-black font-bold text-center text-[25px] font-lato">
        3 ESPACES « LIFESTYLE »
      </h1>
      <h3 className="text-center text-sm mt-4 leading-6">
        L’EFFET « WOW » ET LES ÉMOTIONS h3ROCURÉES PAR LE LOUNGE GARDEN À SES
        INVITÉS PENDANT UNE SOIRÉE, RESTERONT À JAMAIS GRAVÉS DANS LEURS
        MÉMOIRES.
      </h3>

      <h2 className="font-kristi text-[45px] font-bold text-center my-8">
        Didier Chane Si Ken​
      </h2>
      <div className="">
        <div className="bg-white shadow-element w-full text-center py-5 flex flex-col items-center justify-center">
          <h2 className=" font-kristi text-[45px] font-semibold text-[#F07D00]">
            Pensé pour
          </h2>
          <h2 className="font-lato text-[35px] font-extrabold p-4 leading-9">
            SATISFAIRE TOUTES VOS EXIGENCES
          </h2>
          <img src="/icon.png" className="w-5 h-5 opacity-40" alt="" />
          <p className="text-black leading-6 text-sm p-4">
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
        <PhotoGallery props={images} />
      </div>

      <div className="my-8">
        <div className="bg-white shadow-element w-full text-center py-5 flex flex-col items-center justify-center">
          <h2 className=" font-kristi text-[45px] font-semibold text-[#F07D00]">
            20 BONNES RAISONS
          </h2>
          <h2 className="font-lato text-[35px] font-extrabold p-4 leading-9">
            DE NOUS CHOISIR
          </h2>
          <img src="/icon.png" className="w-5 h-5 opacity-40" alt="" />
          <p className="text-black leading-6 text-sm p-4">
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
        <PhotoGallery props={imagesTwo} />
      </div>
    </div>
  );
};

export default LifeStyle;
