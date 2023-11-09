import React from "react";
import PhotoGallery from "./PhotoGallery";
import PhotoGrid from "./PhotoGrid";
const Photos = () => {
  const images = [
    {
      src: "/marigage.png",
      width: 320,
      height: 174,
    },
    {
      src: "/espace.png",
      width: 320,
      height: 174,
    },
    {
      src: "/espace-somptueux-jardin-1.png",
      width: 320,
      height: 170,
    },
    {
        src: "/ceremonie-mariage.png",
        width: 320,
        height: 174,
      },
      {
        src: "/mariage2.png",
        width: 320,
        height: 174,
      },
      {
        src: "/mariage.png",
        width: 320,
        height: 174,
      },
      {
        src: "/reception-lounge-garden.png",
        width: 320,
        height: 174,
      },
      {
        src: "/lumiere.png",
        width: 320,
        height: 174,
      },
      {
        src: "/slide1-scaled.png",
        width: 320,
        height: 174,
      },
      {
        src: "/IMG_20190622_174857-scaled.png",
        width: 320,
        height: 174,
      },
      {
        src: "/IMG_20180729_112801-scaled.png",
        width: 320,
        height: 174,
      },
      {
        src: "/IMG_20180707_1725490-scaled.png",
        width: 320,
        height: 174,
      },

      {
        src: "/IMG_20180505_164649-scaled.png",
        width: 320,
        height: 174,
      },

      {
        src: "/IMG_20180430_184126-scaled.png",
        width: 320,
        height: 174,
      },
      {
        src: "/IMG_20180430_184212-scaled.png",
        width: 320,
        height: 174,
      },
      {
        src: "/prestation.png",
        width: 320,
        height: 174,
      },

      {
        src: "/IMG_20180505_164649-scaled.png",
        width: 320,
        height: 174,
      },

      {
        src: "/IMG_20180430_184126-scaled.png",
        width: 320,
        height: 174,
      },
      {
        src: "/IMG_20180430_184212-scaled.png",
        width: 320,
        height: 174,
      },
      {
        src: "/prestation.png",
        width: 320,
        height: 174,
      }
      
      
    
  ];
  return (
    <div className="">
      <div className="relative h-[50vh] md:h-screen w-full bg-photos bg-cover bg-center p-6">
        <div class="absolute inset-0 bg-black bg-opacity-30">
          <div className="px-8  flex justify-center items-center h-full">
            <h1 className="text-white font-extrabold text-[40px] uppercase">
              Photos
            </h1>
          </div>
        </div>
      </div>
      <div className="px-8 mt-12 md:px-28">
        <PhotoGrid props={images} />
      </div>
    </div>
  );
};

export default Photos;
