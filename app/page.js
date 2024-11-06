import FooterTemplateTwo from "@/components/FooterTemplateTwo";
import HamBurgerMenu from "@/components/HamburgerMenu";
import PreDeliveryCheckListDailog from "@/components/PreDeliveryChecklist/PreDeliveryCheckListDailog";
import ReachUs from "@/components/reachUs/ReachUs";
import { faChevronRight, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const userDetails = {
    name: "mishal",
  };
  return (
    <section className="w-full h-auto flex flex-1 flex-col bg-[#F2F2F2] ">
      <header className="w-full">
        <div className="w-full h-full pt-[41px] shadow-header relative  flex items-end pl-[21px] pr-[9px]  pb-[12px] rounded-br-[35px] bg-white">
          <div className="flex flex-col gap-[25px] w-full">
            <div className="flex items-center  w-full relative">
              <Image
                src="/assets/Fdor_dropppies.png"
                width={95}
                height={37}
                alt="fdor_logo"
              />
              <HamBurgerMenu />
            </div>
            <div className="flex justify-between items-center w-full">
              <div className=" md:max-w-full">
                <h1 className="text-20 text-maingreen font-bold capitalize">
                  Good Morning{" "}
                  {userDetails
                    ? userDetails.name
                      ? userDetails.name.split(" ")[0]
                      : "Guest"
                    : "Guest"}
                </h1>
                <div className="flex gap-[5px] items-center mt-[4px] ">
                  <FontAwesomeIcon
                    icon={faClock}
                    className="text-maingreen text-[10px]"
                    width={17}
                  />
                  <p className="text-14 max-w-[200px] truncate"></p>
                </div>
              </div>
              <div className="">
                <Image
                  src="/assets/user.png"
                  width={64}
                  height={64}
                  alt="profileicon"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="flex flex-col root-layout mt-[22px]">
        <DeliveryInsight />
        <div className="flex gap-[17px] flex-col mt-[18px]">
        <PreDeliveryCheckListDailog/>
            <HomeQuickLinkCard
            title={"Confirm Packets"}
            icon={"/assets/home_insight_packet.svg"}
            desc={"Confirm the packet count before ride"}
          />
            <HomeQuickLinkCard
            title={"Start The Ride"}
            icon={"/assets/start_ride.svg"}
            desc={"Deliver the happiness"}
          />
        </div>
        <div className="mt-[22px]">
          <ReachUs />
        </div>
      </div>
      <FooterTemplateTwo/>
    </section>
  );
}

const DeliveryInsight = () => {
  return (
    <div className="bg-white rounded-[10px] pt-[9px] pb-[19px] px-[13px]">
      <div className="">
        <h1 className="text-16 font-medium">Your Delivery Insight</h1>
        <p className="text-10 ">for 23 September 2024</p>
      </div>
      <div className="flex flex-col gap-[13px] mt-[14px]">
        <div className="flex justify-between gap-[13px]  ">
          <DeliveryInsightCard
            title={"Packets"}
            value={"43"}
            icon={"/assets/home_insight_packet.svg"}
          />
          <DeliveryInsightCard
            title={"Delivery Point"}
            value={"23"}
            icon={"/assets/home_insight_map.svg"}
          />
        </div>
        <div className="flex justify-between gap-[13px] ">
          <DeliveryInsightCard
            title={"Packets"}
            value={"43"}
            icon={"/assets/home_insight_packet.svg"}
          />
          <DeliveryInsightCard
            title={"Delivery Point"}
            value={"23"}
            icon={"/assets/home_insight_map.svg"}
          />
        </div>
      </div>
    </div>
  );
};

const DeliveryInsightCard = ({ title, value, icon }) => {
  return (
    <div className="flex px-[7px] py-[6px] rounded-[10px] w-full justify-between gap-[15px] relative overflow-hidden z-10 bg-secondarygreen">
      <div className="">
        <h3 className="text-mainblue text-32 font-bold leading-[1]">{value}</h3>
        <p className="text-14 text-mainblue font-medium">{title}</p>
      </div>
      <div className="">
        <Image src={icon} width={66} height={66} alt="home_insight" />
      </div>
      <div className="absolute w-[113px] z-[-1] right-0 bottom-0 translate-x-[35%] translate-y-[40%] h-[113px] rounded-full bg-insight-circle-grad"></div>
    </div>
  );
};

const HomeQuickLinkCard = ({ title, icon, desc }) => {
  return (
    <Link
      href="#"
      className=" relative flex flex-col justify-between pl-[6px] pb-[13px] z-[1] pr-[15px] bg-white py-[7px] rounded-[10px] overflow-hidden"
    >
      <p className="text-10 font-medium text-secondarytext  text-right">6:30</p>

      <div className="absolute w-[113px] z-[-1] left-0 bottom-0 translate-x-[-55%] translate-y-[40%] h-[113px] rounded-full bg-home-link-grad"></div>
      <div className="flex justify-between items-center">
        <div className="flex gap-[5px] ">
          <Image
            className="max-w-[50px] max-h-[50px]"
            src={icon}
            width={46}
            height={46}
          />
          <div className="flex flex-col gap-[3px]">
            <p className="text-[17px] leading-[1.2] font-medium">{title}</p>
            <p className="text-[11px] text-secondarytext">{desc}</p>
          </div>
        </div>
        <div className="">
          <FontAwesomeIcon
            icon={faChevronRight}
            className="h-[30px] "
          />
        </div>
      </div>
    </Link>
  );
};
