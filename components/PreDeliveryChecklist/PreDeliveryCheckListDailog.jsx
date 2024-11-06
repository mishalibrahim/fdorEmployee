"use client";
import React, { forwardRef, useCallback, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faChevronRight,
  faImage,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../ui/button";
import CustomButton from "../CustomButton";
import { set, useForm } from "react-hook-form";
import styles from "./PreDelivery.module.css";
import Webcam from "react-webcam";
import CustomCheckbox from "../CustomCheckbox/CustomCheckbox";

const PreDeliveryCheckListDailog = () => {
  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm();

  const webcamRef = useRef(null);

  const [open, setOpen] = useState(false);
  const [showWebcam, setShowWebcam] = useState(false);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
    clearErrors('img')
  }, [webcamRef]);

  const handleWebcam = useCallback(() => {
    setShowWebcam((prevShowWebcam) => !prevShowWebcam);
  }, [showWebcam]);

  const onSubmit = (data) => {
    console.log(imgSrc)
    if(!imgSrc){
      setError("img", {
        type: "manual",
        message: "Please upload a selfie",
      });
      return;
    }
    console.log("submitted", data);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className=" relative flex flex-col  pl-[6px] pb-[13px] z-[1] pr-[15px] bg-white py-[7px] rounded-[10px] overflow-hidden">
        <p className="text-10 w-full font-medium text-secondarytext  text-right">
          6:30
        </p>

        <div className="absolute w-[113px] z-[-1] left-0 bottom-0 translate-x-[-55%] translate-y-[40%] h-[113px] rounded-full bg-home-link-grad"></div>
        <div className="flex justify-between items-center w-full">
          <div className="flex gap-[5px] ">
            <Image
              className="max-w-[50px] max-h-[50px]"
              src="/assets/checklist_icon.svg"
              width={46}
              height={46}
            />
            <div className="flex flex-col gap-[3px] text-left">
              <p className="text-[17px] leading-[1.2] font-medium">Check In</p>
              <p className="text-[11px] text-secondarytext">
                Get ready for delivering more happiness today
              </p>
            </div>
          </div>
          <div className="">
            <FontAwesomeIcon icon={faChevronRight} className="h-[30px] " />
          </div>
        </div>
      </DialogTrigger>
      <DialogContent className="w-[95%] max-w-[370px] rounded-[10px] p-[19px]">
        <DialogHeader className="text-left pb-[9px] border-b border-dotted border-[#E7E7E7]">
          <DialogTitle className="text-20 font-medium">
            Pre-Delivery Checklist
          </DialogTitle>
          <p className="text-10 text-secondarytext">
            Before starting your delivery, please make sure you follow these
            important safety guidelines:
          </p>
        </DialogHeader>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-[24px]"
        >
          <div className="flex flex-col gap-[24px]">
            <div className="">
            <div className="flex justify-between gap-[5px]">
              <div className="w-auto">
                <p className="text-14 font-medium ">Upload a Selfie</p>
                <p className="text-10 font-medium text-secondarytext">
                  Click the capture button and upload a selfie to verify the
                  identity
                </p>
                <div className=" ">
                  <CustomButton
                    type="button"
                    onClick={handleWebcam}
                    className="w-auto text-[11.2px] leading-[1.2] max-h-[26px] mt-[8px]"
                    title={imgSrc ? "Retake" : "Capture"}
                  />
                  {showWebcam && (
                    <WebcamModal
                      handleWebcam={handleWebcam}
                      capture={capture}
                      ref={webcamRef}
                    />
                  )}
                </div>
              </div>
              <div className="bg-[#F3F3F3] border-[#DEDEDE] border rounded-[10px] min-w-[74px] min-h-[74px] flex justify-center items-center">
                {imgSrc ? (
                  <Image src={imgSrc} width={74} height={74} alt="selfie" />
                ) : (
                  <FontAwesomeIcon
                    icon={faImage}
                    className="text-secondarytext"
                  />
                )}
              </div>
            </div>
            {errors.img && <p className="text-red-500 text-10 min-h-[12.3px] mt-[4px]">{errors.img.message}</p>}
            </div>
            <div className="flex flex-col gap-[6px]">
              {/* input start */}
              <CustomCheckbox
                title="Always Wear your helmet"
                description="I confirm that I am wearing my helmet and will drive safely."
                register={register}
                errors={errors}
                inputId={"helmet"}
              />
              <CustomCheckbox
                title="Follow Traffic Rules"
                description="I will follow all traffic rules and drive responsibly."
                register={register}
                errors={errors}
                inputId={"traffic"}
              />
              <CustomCheckbox
                title="Stay Focused and Avoid Distractions"
                description="I agree to stay focused and avoid distractions while driving."
                register={register}
                errors={errors}
                inputId={"focus"}
              />
            </div>
            <div className="flex-center">
              <CustomButton title={"Confirm"} className={'max-w-[232px] text-[20px] font-normal'}  />
            </div>
          </div>
        </form>
        <p className=" text-center text-secondarytext text-10">
        The above steps are designed for your safety and the safety of others.
         By confirming the checklist, you acknowledge that you will prioritize safety throughout your delivery journey.
        </p>
      </DialogContent>
    </Dialog>
  );
};

export default PreDeliveryCheckListDailog;


const WebcamModal = forwardRef(({ handleWebcam, capture }, ref) => {
  const videoConstraints = {
    width: 1280,
    height: 1280,
    facingMode: "user",
  };
  return (
    <div className="absolute w-full h-full top-0 left-0 p-[20px] z-[50] bg-white">
      <Webcam
        className=""
        audio={false}
        height={1280}
        screenshotFormat="image/jpeg"
        width={1280}
        videoConstraints={videoConstraints}
        ref={ref}
      >
        {({ getScreenshot }) => (
          <CustomButton title={"Capture"} className={'mt-[20px]'}
            onClick={() => {
              capture();
              handleWebcam();
            }}
          />
        )}
      </Webcam>
    </div>
  );
});
