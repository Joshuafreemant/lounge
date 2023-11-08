import React from "react";
import { FaEnvelope, FaMapMarker, FaPhone } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="">
      <div className="bg-[#332b25] px-8 pt-8 pb-16 relative block md:hidden">
        <h2 className="text-white font-bold">À Propos</h2>
        <img src="/logo.png" className="w-20 h-20 my-6" alt="" />
        <p className="text-white">
          Le Lounge Garden est une salle de réception spécialisée dans les
          mariages.
        </p>
        <p className="text-white my-6">Créer avec ❤️ par </p>

        <h2 className="text-white font-bold">Contact</h2>
        <div className="flex gap-2 items-center my-6">
          <FaMapMarker className="text-white" />
          <p className="text-white text-sm">
            83, D3 Route Hubert Delisle, 97423, La Réunion
          </p>
        </div>
        <div className="flex gap-2 items-center my-6">
          <FaPhone className="text-white" />
          <p className="text-white text-sm">+262 (0)692 88 87 00</p>
        </div>
        <div className="flex gap-2 items-center my-6">
          <FaEnvelope className="text-white" />
          <p className="text-white text-sm">support@loungegarden-reunion.com</p>
        </div>

        <a href="http://" className="text-white text-sm">
          Conditions Générales de Vente & Location
        </a>

        <div className="my-6">
          <a
            className="text-white"
            href="https://m.facebook.com/LoungeGarden974/?wtsid=rdr_0WsH57XKmbNJ0PxvR&zmode=free&_rdc=1&_rdr"
          >
            Facebook
          </a>
        </div>
        <div className="flex gap-10 flex-col">
          <img src="/eu-logo.png" alt="" className="w-24" />
          <img src="/logo-region.png" alt="" className="w-24" />
        </div>

        <p className="my-8 text-white">
          Ce site a été financé avec l’aide du FEDER (REACT-UE), dans le cadre
          de la réponse de l’Union européenne à la pandémie COVID-19. L’Europe
          s’engage à La Réunion
        </p>
        <div className="absolute bg-[#281e16] bottom-0 flex items-center justify-center w-full h-[7vh] left-0 p-2">
          <p className="text-xs text-white">
            © Copyright 2020 Lounge Garden Reunion
          </p>
        </div>
      </div>
       <div className="bg-[#332b25] gap-10 pt-8 pb-16 relative hidden md:grid grid-cols-3 px-20">
        <div className="">
          <h2 className="text-white font-bold text-xl">À Propos</h2>
          <img src="/logo.png" className="w-20 h-20 my-6" alt="" />
          <p className="text-white">
            Le Lounge Garden est une salle de réception spécialisée dans les
            mariages.
          </p>
          <p className="text-white my-6">Créer avec ❤️ par </p>
          <div className="flex gap-10 ">
            <img src="/eu-logo.png" alt="" className="w-24" />
            <img src="/logo-region.png" alt="" className="w-24" />
          </div>
        </div>
        <div className="">
          <h2 className="text-white font-bold text-xl">Contact</h2>
          <div className="flex gap-2 items-center my-6">
            <FaMapMarker className="text-white" />
            <p className="text-white text-sm">
              83, D3 Route Hubert Delisle, 97423, La Réunion
            </p>
          </div>
          <div className="flex gap-2 items-center my-6">
            <FaPhone className="text-white" />
            <p className="text-white text-sm">+262 (0)692 88 87 00</p>
          </div>
          <div className="flex gap-2 items-center my-6">
            <FaEnvelope className="text-white" />
            <p className="text-white text-sm">
              support@loungegarden-reunion.com
            </p>
          </div>

          <a href="http://" className="text-white text-sm">
            Conditions Générales de Vente & Location
          </a>

          <div className="my-6">
            <a
              className="text-white"
              href="https://m.facebook.com/LoungeGarden974/?wtsid=rdr_0WsH57XKmbNJ0PxvR&zmode=free&_rdc=1&_rdr"
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="">
          <p className="my-8 text-white">
            Ce site a été financé avec l’aide du FEDER (REACT-UE), dans le cadre
            de la réponse de l’Union européenne à la pandémie COVID-19. L’Europe
            s’engage à La Réunion
          </p>
        </div>

        <div className="absolute bg-[#281e16] bottom-0 flex items-center justify-center w-full h-[7vh] left-0 p-2">
          <p className="text-xs text-white">
            © Copyright 2020 Lounge Garden Reunion
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
