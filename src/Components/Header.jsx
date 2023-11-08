import React from "react";
import { FaMapMarker, FaPhone } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { BsChevronDown } from "react-icons/bs";
const Header = () => {
  return (
    <>
      <div className="bg-[#ba1410] w-full h-8 items-center px-20 hidden md:flex gap-6 fixed top-0">
        <div className="flex gap-2 items-center my-6">
          <FaMapMarker className="text-white" />
          <p className="text-white text-xs font-semibold">
            83, D3 Route Hubert Delisle, 97423, La Réunion
          </p>
        </div>
        <div className="flex gap-2 items-center my-6">
          <FaPhone className="text-white" />
          <p className="text-white text-xs font-semibold">
            +262 (0)692 88 87 00
          </p>
        </div>
      </div>

      <div className="hidden md:flex mt-16 px-20 justify-between">
        <img src="/logo.png" className="w-[80px] h-[80px]" alt="" />
        <div className="flex">
          <ul className="flex items-center gap-6 text-white font-bold ">
            <li>
              <a href="http://" className="text-[13px]">
                ACCUEIL
              </a>
            </li>
            <li>
              <a href="http://" className="text-[13px]">
                POURQUOI LE LOUNGE GARDEN
              </a>
            </li>
            <li>
              <a href="http://" className="text-[13px]">
                NOS PRESTATIONS
              </a>
            </li>
            <li>
              <a href="http://" className="text-[13px]">
                NOTRE HISTOIRE
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a href="http://" className="text-[13px]">
                MÉDIAS
              </a>
              <BsChevronDown />
            </li>
          </ul>
        </div>
      </div>
      <div className="flex md:hidden justify-between w-full bg-transparent px-8 items-center absolute top-4">
        <img src="/logo.png" alt="" className="w-12 h-12" />
        <IoMdMenu className="text-white text-[32px]" />
      </div>
    </>
  );
};

export default Header;
