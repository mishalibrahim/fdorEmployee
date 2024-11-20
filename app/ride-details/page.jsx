"use client";
import CustomButton from "@/components/CustomButton";
import FooterTemplateTwo from "@/components/FooterTemplateTwo";
import HamBurgerMenu from "@/components/HamburgerMenu";
import { faLocationArrow, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
const initialRides = [
  {
    id: 1,
    status: "undelivered",
    location: "Falnir Park, Mangalore",
    time: "7:10 AM",
  },
  {
    id: 2,
    status: "undelivered",
    location: "City Center Mall, Mangalore",
    time: "8:00 AM",
  },
  {
    id: 3,
    status: "undelivered",
    location: "Lighthouse Hill Road, Mangalore",
    time: "8:45 AM",
  },
];
const RideDetails = () => {
  const [rideDetails, setRideDetails] = useState(initialRides);
  const [status, setStatus] = useState("undelivered");

  const handleDeliveryState = (id) => {
    setRideDetails((prev) =>
      prev.map((ride) =>
        ride.id == id ? { ...ride, status: "delivered" } : ride,
      ),
    );
  };
  return (
    <section className="w-full h-full">
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
      <div className="mt-[37px]  px-[20px] my-[40px]">
        <div className="">
          <h2 className="text-20 font-semibold ">Ride Details</h2>
          <p className="text-10 text-secondarytext mt-[3px]">
            Below are the details of your ride
          </p>
        </div>
        <div className=" mt-[22px] flex flex-col gap-[12px]">
          {rideDetails.map((item, index) => (
            <RideDetailsCard
              id={item.id}
              status={item.status}
              key={index}
              handleDeliveryState={handleDeliveryState}
            />
          ))}
        </div>
      </div>
      <FooterTemplateTwo />
    </section>
  );
};

export default RideDetails;

const RideDetailsCard = ({ id, handleDeliveryState, status }) => {
  return (
    <div className="px-[10px] bg-white rounded-[10px] py-[9px]">
      <div className="pb-[7px] border-b border-dotted border-[#E7E7E7]">
        <div className="flex justify-between">
          <p className="text-16 font-bold">#01</p>
          <div className="flex gap-[10px] justify-center items-center">
            <p className="px-[7px] py-[3px] text-maingreen bg-[#D9FFF1] rounded-[8px] border-maingreen border-2 text-12 font-medium">
              New
            </p>
            <p className="text-secondarytext text-12 font-medium">7:10 AM</p>
          </div>
        </div>
        <p className="text-secondarytext text-10 mt-[3px]">
          Falnir Park, Bendoorwell, Near Badar Masjid, Mangalore, 575001
        </p>
      </div>
      <div className="flex justify-between items-center mt-[8px]">
        <div className="flex gap-[10px] w-full">
          <div className="bg-mainblue w-[40px] h-[40px] rounded-full flex justify-center items-center">
            <FontAwesomeIcon icon={faPhone} className="text-white text-18" />
          </div>
          <div className="bg-maingreen w-[40px] h-[40px] rounded-full  flex justify-center items-center">
            <FontAwesomeIcon
              icon={faLocationArrow}
              className="text-white text-18"
            />
          </div>
        </div>
        <div className="w-full ">
          {status === "undelivered" ? (
            <CustomButton
              title="Mark Delivered"
              className={" h-[35px]"}
              onClick={() => handleDeliveryState(id)}
            />
          ) : (
            <div className="text-right flex flex-col items-end gap-[2px]">
              <p className="px-[7px] py-[3px] text-maingreen bg-[#D9FFF1] rounded-[5px] w-max border-maingreen border-2 text-15 font-medium">
                Delivered
              </p>
              <p className="text-secondarytext text-10">Delivered at 7:25 AM</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
