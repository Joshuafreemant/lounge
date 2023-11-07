import React from "react";
import { IoMdMenu } from "react-icons/io";
const Header = () => {
  return (
    <div className="flex justify-between w-full bg-transparent px-8 items-center absolute top-4">
      <img src="/logo.png" alt="" className="w-12 h-12" />
      <IoMdMenu className="text-white text-[32px]"/>
    </div>
  );
};

export default Header;
