"use client";
import React from "react";
import { useSelector } from "react-redux";
import Lottie from "lottie-react";
import LoaderGif from "@/public/assets/gif/fdor_mainLoader.gif";
import Image from "next/image";

const Loader = () => {
  const loader = useSelector((state) => state.common.showLoader);
  return (
    <>
      {loader && (
        <div className="fixed inset-0 m-auto z-[9999999] filter flex-center bg-[#EFEEF0]  ">
          <Image
            src={LoaderGif}
            alt="Loading..."
            width={350} // Define width and height for better optimization
            height={350}
          />
        </div>
      )}
    </>
  );
};

export default Loader;
