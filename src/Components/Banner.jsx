import React from "react";
import Header from "./Header";

const Banner = () => {
  return (
    <div className="relative h-[68vh] md:h-screen w-full bg-background bg-cover bg-center">
      <div class="absolute inset-0 bg-black bg-opacity-20">
        <Header />

        <div className="px-8 md:px-12 lg:px-24   flex justify-center md:justify-start md:mt-28 flex-col h-full">
          <h1 className="font-kristi text-[35px] m-0 md:text-[55px] lg:text-[60px] font-medium md:font-semibold text-[#F07D00]">
            Bienvenue au Lounge Garden
          </h1>
          <h1 className="text-white font-semibold -mt-4 text-[23px] md:text-[45px] lg:text-[50px]">
            Le spécialiste du mariage clé en main
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
