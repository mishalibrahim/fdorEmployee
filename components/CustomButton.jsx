import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Lottie from "lottie-react";
import buttonLoading from "@/public/lottie/white_roundLoader.json";
import { useSelector } from "react-redux";
const CustomButton = ({
  icon = true,
  className,
  title,
  onClick,
  asChild = false,
  children,
  disabled = false,
  type = "submit"
}) => {
  const buttonLoader = useSelector((state) => state.common.buttonLoader);
  return (
    <Button
      asChild={asChild}
      onClick={onClick}
      disabled={buttonLoader || disabled}
      type={type}
      className={cn(
        "text-white  pl-[20px] btntext-20  pr-[12px] tracking-wide w-full h-[48px] flex justify-between items-center uppercase font-normal rounded-[10px] hover:bg-maingreen bg-maingreen",
        className
      )}
    >
      {asChild ? (
        children
      ) : (
        <>
          {buttonLoader ? (
            <div className="flex flex-center w-full h-full ">
              <Lottie
                className="object-cover"
                animationData={buttonLoading}
                loop={true}
                style={{ height: 47 }}
              />
            </div>
          ) : (
            <div className="flex justify-between w-full items-center gap-[10px]">
              <p className="">{title}</p>
              {icon && (
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="text-[19.6px]"
                />
              )}
            </div>
          )}
        </>
      )}
    </Button>
  );
};

export default CustomButton;
