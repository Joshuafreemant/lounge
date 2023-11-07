import React from "react";

const Cookies = ({ setShowCookies,showCookies }) => {
  const handleHideCookies = () => {
    setShowCookies(false);
  };
  return (
    <div
      className={`w-full fixed z-20 bottom-0 p-6 bg-white shadow-sm ${
        showCookies ? "" : "cookies-hidden"
      }`}
    >
      <p className="text-sm">
        Nous utilisons des cookies sur notre site web pour vous offrir une
        expérience plus pertinente en mémorisant vos préférences et vos visites
        répétées. En cliquant sur "Accepter", vous consentez à l'utilisation de
        TOUS les cookies.. F
      </p>
      <div className="flex gap-4 mt-4 items-center ">
        <span className="underline">Paramètres</span>
        <button
          onClick={handleHideCookies}
          className="bg-[#61A229] py-1 px-3 text-white text-sm outline-none border-none"
        >
          ACCEPTER
        </button>
      </div>
    </div>
  );
};

export default Cookies;
