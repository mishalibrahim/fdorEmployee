"use client";
import Image from "next/image";
import React from "react";
import HamBurgerMenu from "./HamburgerMenu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const Header = ({ menuButton = true, logo = true, arrow = false ,bg = false }) => {
  const handleBack = () => {
    window.location.reload();
  };
  return (
    <header className={` ${bg &&  `bg-[${bg}]`} flex w-full pt-[40px] px-[19px]`}>
      <div className="flex justify-start items-center w-full relative">
        {arrow && (
          <div className="absolute right-0" onClick={handleBack}>
            <p className="text-15 px-[10px] py-[1px] text-white rounded-[5px] bg-maingreen">BACK</p>
          </div>
        )}
        {logo && (
          <Image
            src="/assets/fdor_logo.svg"
            width={95}
            height={40}
            alt="fdor-logo"
          />
        )}
        {menuButton && <HamBurgerMenu />}
      </div>
    </header>
  );
};

export default Header;
