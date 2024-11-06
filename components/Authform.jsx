"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import CustomButton from "./CustomButton";
import LoginPhoneDrawer from "./LoginPhoneDrawer";
import { setButtonLoader, setShowLoader } from "@/redux/slices/commonSlice";

const Authform = ({ type }) => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setShowLoader(false));
    dispatch(setButtonLoader(false));
  }, []);

  const handleDrawerClose = useCallback((state) => {
    setIsDrawerOpen(state);
  }, []);
  

  return (
      <div className="w-full flex flex-col relative">
        <div className="flex justify-between bg-[#CFFFED] px-[14px] py-[14px] rounded-t-[10px]">
          <div className="w-full text-[40px] max-w-[140px] font-black text-[#A7DDC9] leading-[0.8]">
            <p>TASTE TIME TRUST</p>
          </div>
          <div className="w-full absolute right-0 top-0 translate-y-[-18px] flex justify-end items-center">
            <Image src='/assets/fdorgirl.svg' width={188} height={144} alt='fdorlogin'/>
          </div>
        </div>
        <div className="w-full px-[16px] py-[18px] bg-white rounded-b-[10px]">
          <p className="text-20 font-semibold">Account</p>
          <p className="text-10 font-medium text-[#8A8A8A] pt-[3px]">Login/Create Account to mange subscription</p>
          <CustomButton title={"LOGIN"} className='mt-[25px]' onClick={()=>handleDrawerClose(true)}/>
          <p className="text-10  text-[#606060] mt-[14px]">By Clicking, I accept <span className="font-semibold"> Terms and Conditions</span> & <span className="text-[#606060]">Privacy Policy </span></p>
          <LoginPhoneDrawer open={isDrawerOpen} onClose={handleDrawerClose}  />
          <div id="recaptcha-container" className="z-[999999]"></div>
        </div>
      </div>
  );
};

export default Authform;
