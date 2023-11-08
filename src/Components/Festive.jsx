import React from "react";

const Festive = () => {
  return (
    <div className="relative  md:h-[90vh] w-full bg-festive bg-cover bg-center p-6 md:px-24">
      <div class=" bg-black h-full flex w-full md:w-[500px] flex-col items-center justify-center p-6 opacity-90 my-6 ">
        <h2 className=" font-kristi text-[45px] font-medium text-[#F07D00]">
          Un
        </h2>
        <h2 className="text-white font-lato text-[35px] md:text-[55px] font-extrabold p-4 leading-9 uppercase">
          Espace festif
        </h2>

        <h6 className="text-white text-center font-medium md:font-extrabold md:px-12">
          POUR UNE SOIRÉE INOUBLIABLE SAURA VOUS TRANSPORTER GRÂCE À UNE
          AMBIANCE FESTIVE ET UN SHOW LUMINEUX
        </h6>
        <img src="/leaf.png" className="w-5 h-7 opacity-40 my-4" alt="" />

        <p className="text-white text-center leading-6 text-sm p-4 md:text-base">
          Selon votre humeur, profitez d’un espace à la belle étoile ou d’une
          salle de danse. Notre DJ saura vous emporter dans une ambiance festive
          et show lumineux . Profitez de notre scène , pour votre discours de
          bienvenue ou pour écouter vos artistes préférés.
        </p>
        <span className="underline font-bold text-[#f07d00] pb-6 pt-2">
          Découvrir nos prestations
        </span>
      </div>
    </div>
  );
};

export default Festive;
