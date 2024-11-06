import React from "react";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import Lottie from "lottie-react"
import tick_anim from '@/public/assets/lottie/tick_anim.json'
import cross_anim from '@/public/assets/lottie/cross_anim.json'
const CustomInput = ({ control, label, name , icon = null ,refferer = null }) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div>
        <div className="flex flex-col w-full border border-mediumgray rounded-[10px] py-[3px] px-[7px] relative">
          <FormLabel
            style={{ color: "#8E8E8E", fontSize: "12px" }}
            className="text-gray text-12 font-bold"
          >
            {label}
          </FormLabel>
          <FormControl className="space-y-0">
            <Input
              {...field}
              className="text-[16px] text-mediumdark font-medium"
              type={
                name === "password" || name === "confirmpassword"
                  ? "password"
                  : name === 'phone' ? 'number':"text"
              }
            />
          </FormControl>
          {/* {
            icon === 'tick' && (
              <Lottie className="w-[36px] absolute right-[5px] top-0 bottom-0 my-auto" animationData={tick_anim} loop={false}/>
            ) 
          }
          {
            icon === 'cross' && (
              <Lottie className="w-[36px] absolute right-[5px] top-0 bottom-0 my-auto" animationData={cross_anim} loop={false}/>
            ) 
          } */}
        </div>
        {/* {
          refferer && (
            <p className="text-maingreen text-[10px]">Your referrer name is {refferer}</p>
          )
        } */}
        <FormMessage />
        </div>
      )}
    />
  );
};

export default CustomInput;
