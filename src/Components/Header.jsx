import React, { useEffect, useState } from "react";
import { FaMapMarker, FaPhone } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import { BsChevronDown } from "react-icons/bs";

const Header = ({ isOpen, setIsOpen }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

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

      {scrolled ? (
        <div className="hidden md:flex mt-16 px-24 justify-between items-center py-2  bg-white border-b border-gray-300 z-30 fixed -top-16 w-full">
          <img src="/lg-small.png" className="w-[33px] h-[33px]" alt="" />
          <div className="flex">
            <ul className="flex items-center gap-6 text-white font-bold ">
              <li>
                <a href="http://" className="text-[13px] text-[#cb1511]">
                  ACCUEIL
                </a>
              </li>
              <li>
                <a href="http://" className="text-[13px] text-[#cb1511]">
                  POURQUOI LE LOUNGE GARDEN
                </a>
              </li>
              <li className="relative hover-element flex items-center gap-2">
                <a href="http://" className="text-[13px] text-[#cb1511]">
                  NOS PRESTATIONS
                </a>
                <BsChevronDown className="text-[#cb1511]" />
                <div className="absolute top-8 show">
                  <ul className="">
                    <li className="hover:bg-[#3c2311] px-8 py-2 ">
                      <a href="" className="text-xs font-bold cursor-pointer">Mariages</a>
                    </li>
                    <li className="hover:bg-[#3c2311] px-8 border-t border-gray-50 py-2">
                      <a href="" className="text-xs font-bold cursor-pointer">Comité d'entreprise</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="http://" className="text-[13px] text-black">
                  NOTRE HISTOIRE
                </a>
              </li>
              <li className="flex items-center gap-2 hover-element relative">
                <a href="http://" className="text-[13px] text-black">
                  MÉDIAS
                </a>
                <BsChevronDown className="text-black" />
                <div className="absolute top-8 show">
                  <ul className="">
                    <li className="hover:bg-[#3c2311] px-8 py-2 ">
                      <a href="" className="text-xs font-bold cursor-pointer">Chaîne YouTube</a>
                    </li>
                   
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="hidden md:flex mt-16 px-20 justify-between  bg-gradients">
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
              <li className="flex items-center gap-2 hover-element relative">
                <a href="http://" className="text-[13px]">
                  NOS PRESTATIONS
                </a>
                <BsChevronDown />
                <div className="absolute top-8 show">
                  <ul className="">
                    <li className="hover:bg-[#3c2311] px-8 py-2 ">
                      <a href="" className="text-xs font-bold cursor-pointer">Mariages</a>
                    </li>
                    <li className="hover:bg-[#3c2311] px-8 border-t border-gray-50 py-2">
                      <a href="" className="text-xs font-bold cursor-pointer">Comité d'entreprise</a>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="http://" className="text-[13px]">
                  NOTRE HISTOIRE
                </a>
              </li>
              <li className="flex items-center gap-2 hover-element relative">
                <a href="http://" className="text-[13px]">
                  MÉDIAS
                </a>
                <BsChevronDown />

                <div className="absolute top-8 show">
                  <ul className="">
                    <li className="hover:bg-[#3c2311] px-8 py-2 ">
                      <a href="" className="text-xs font-bold cursor-pointer">Chaîne YouTube</a>
                    </li>
                   
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      )}

      <div
        className={
          scrolled
            ? "fixed flex md:hidden justify-between w-full z-50 bg-white border-b border-gray-300 px-8 items-center  top-0 py-4"
            : "fixed flex md:hidden justify-between w-full z-50 bg-transparent px-8 items-center  top-4"
        }
      >
        <img
          src={scrolled ? "lg-small.png" : "/logo.png"}
          alt=""
          className={scrolled ? "w-12 h-12" : "w-12 h-12"}
        />
        <IoMdMenu
          onClick={toggleSidebar}
          className={
            scrolled ? "text-black text-[30px]" : "text-white text-[32px]"
          }
        />
      </div>
    </>
  );
};

export default Header;
