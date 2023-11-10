import React from "react";
import { useState } from "react";
import { FiChevronRight } from "react-icons/fi";
import { GoChevronLeft } from "react-icons/go";
const SideBar = ({ isOpen, setIsOpen }) => {
  const [showMain, setShowMain] = useState(true);
  const [showSecond, setShowSecond] = useState(false);
  const [showThird, setShowThird] = useState(false);
 
  const toggleArrow = () => {
    setShowSecond(!showSecond);
    setShowMain(false);
  };
  const toggleArrowSecond = () => {
    setShowThird(!showSecond);
    setShowMain(false);
  };
  const goPrevious = () => {
    setShowSecond(false);
    setShowThird(false);
    setShowMain(true);
  };
  return (
    <div className="flex">
      <div className={`flex relative md:hidden sidebar ${isOpen ? "open" : ""}`}>
        <div onClick={()=>setIsOpen(false)} className="bg-transparent absolute w-40 h-screen -left-40"></div>
        {showMain && (

          <ul className="flex flex-col mt-20 pl-6 pr-3 gap-3">
            <li className="text-white text-[22px] font-extrabold">Accuell</li>
            <li className="text-white text-[22px] font-extrabold">
              Pourquoi le lounge
            </li>
            <li className="text-white text-[22px] font-extrabold">Garden</li>
            <li
              onClick={toggleArrow}
              className="text-white text-[22px] font-extrabold"
            >
              <div className="flex items-center justify-between">
                <a href="http://">Nos prestations</a>
                <FiChevronRight />
              </div>
            </li>
            <li className="text-[#777777] text-[22px] font-extrabold">
              Notre histoire
            </li>
            <li
              onClick={toggleArrowSecond}
              className="text-[#777777] text-[22px] font-extrabold"
            >
              <div className="flex items-center justify-between">
                <a href="http://">Médias</a>
                <FiChevronRight />
              </div>
            </li>
          </ul>
        )}
        {showSecond && (
          <ul className="flex flex-col mt-16 pl-6 pr-3 gap-3">
            <li
              onClick={goPrevious}
              className="text-[#777777] text-[13px] font-extrabold flex items-center gap-2"
            >
              <GoChevronLeft />
              Back
            </li>
            <li className="text-[#777777] text-[20px] font-extrabold">
              Marriages
            </li>
            <li className="text-[#777777] text-[20px] font-extrabold">
              Comité d’entreprise
            </li>
          </ul>
        )}

        {showThird && (
          <ul
            className={`flex flex-col mt-16 pl-6 pr-3 gap-3 reveal ${
              showThird ? "active" : ""
            }`}
          >
            <li
              onClick={goPrevious}
              className="text-[#777777] text-[13px] font-extrabold flex items-center gap-2"
            >
              <GoChevronLeft />
              Back
            </li>
            <li className="text-[#777777] text-[20px] font-extrabold">
              Chaîne YouTube
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default SideBar;
