import React from "react";
import PhotoGallery from "./PhotoGallery";

const Somptueux = () => {
  const imagesTwo = [
    {
      src: "/espace.png",
      original: "/espace.png",
      width: "100%",
      height: 164,
    },
    {
      src: "/marigage.png",
      original: "/marigage.png",
      width: "100%",
      height: 174,
    },
    {
      src: "/mariage.png",
      original: "/mariage.png",
      width: "100%",
      height: 180,
    },
    {
      src: "/soiree.png",
      original: "/soiree.png",
      width: 320,
      height: 174,
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
      <div className="my-8 md:flex md:px-20 lg:px-32 items-center">
        <div className="md:w-5/12">
          <PhotoGallery props={imagesTwo} />
        </div>

        <div className="bg-[#4e3a33] md:w-7/12 md:py-20 w-full text-center py-5 flex flex-col items-center justify-center">
          <h2 className=" font-kristi text-[45px] font-medium text-[#F07D00]">
            UN ESPACE
          </h2>
          <h2 className="text-white font-lato text-[35px] md:text-[55px] font-extrabold p-4 leading-9">
            SOMPTUEUX
          </h2>
          <img src="/icon.png" className="w-5 h-5 opacity-40" alt="" />
          <p className="text-white leading-6 text-sm p-4 md:px-8">
            Équipé de mobilier lumineux, de tonnelles et de 5 toilettes entre
            autres le LOUNGE GARDEN met à votre disposition, un environnement et
            des commodités très qualitatifs.
          </p>
          <span className="underline font-bold text-[#f07d00] pb-6 pt-2">
            Découvrir nos prestations
          </span>
        </div>
      </div>
    </div>
  );
};

export default Somptueux;
