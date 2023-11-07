import React from "react";
import Header from "./Header";

const Banner = () => {
  return (
    <div className="relative h-[68vh] md:h-screen w-full bg-background bg-cover bg-center">
      <div class="absolute inset-0 bg-black bg-opacity-30">
        <Header />

        <div className="px-8  flex justify-center flex-col h-full">
          <h1 className="font-kristi text-[35px] text-[#F07D00] font-normal">
            Bienvenue au Lounge Garden
          </h1>
          <h1 className="text-white font-semibold text-[23px]">
            Le spécialiste du mariage clé en main
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
