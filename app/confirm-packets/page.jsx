"use client";
import CustomButton from "@/components/CustomButton";
import CustomCheckbox from "@/components/CustomCheckbox/CustomCheckbox";
import FooterTemplateTwo from "@/components/FooterTemplateTwo";
import HamBurgerMenu from "@/components/HamburgerMenu";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const ConfirmPacket = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <section className="w-full h-full ">
      <header className="mt-[40px] px-[20px]">
        <div className="flex w-full relative ">
          <Link href="/" className="">
            <Image
              src="/assets/Fdor_dropppies.png"
              width={95}
              height={37}
              alt="fdor_logo"
            />
          </Link>
          <HamBurgerMenu />
        </div>
      </header>
      <div className="flex flex-col gap-[18px] mt-[37px]  px-[20px] my-[40px]">
        <div className="">
          <h2 className="text-20 font-semibold ">Confirm Packets</h2>
          <p className="text-10 text-secondarytext mt-[3px]">
            Confirm the packets and count and check it before submitting
          </p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-[5px] w-full ">
            {Array.from({ length: 5 }).map((_, index) => (
              <div
                key={index}
                className="flex justify-between items-center  bg-white rounded-[10px] px-[10px] pt-[7px] pb-[9px] relative"
              >
                <div className="">
                  <div className="flex gap-[3px] items-end">
                    <h3 className="text-26 leading-[0.8] font-bold text-maingreen">
                      6
                    </h3>
                    <p className="text-12 font-semibold text-mainblue">
                      x1 Pack
                    </p>
                  </div>
                  <p className="text-10 text-secondarytext mt-[2px]">
                    6 pack containing 1
                  </p>
                </div>
                <p className="text-10 max-w-[63px]  rounded-[10px] font-semibold px-[8px] py-[2px] text-white bg-mainred">
                  Non-Veg
                </p>
                <div className="">
                  <CustomCheckbox
                    register={register}
                    required={false}
                    inputId={"packet" + index}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex-center mt-[41px] flex-col gap-[22px]">
            <CustomButton title={"Confirm"} className="max-w-[223px]" />
            <p className="text-10 text-secondarytext max-w-[304px] text-center ">
              By confirming, you agree that you have received the above
              mentioned packets in the correct order.
            </p>
          </div>
        </form>
      </div>
      <FooterTemplateTwo />
    </section>
  );
};

export default ConfirmPacket;
