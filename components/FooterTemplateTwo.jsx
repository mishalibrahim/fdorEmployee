import React from "react";

const FooterTemplateTwo = ({color=false}) => {
  return (
    <footer className={`w-full h-auto pt-[70px] pb-[113px] ${color ? `bg-[${color}]` : 'bg-transparent'} ` }>
      <div className="flex flex-col px-[20px]">
        <h1 className="text-[40px] text-[#B3B3B3] font-black leading-[48.76px]">Ride</h1>
        <h1 className="text-[40px] text-[#B3B3B3] font-black leading-[48.76px]">Safe</h1>
        <p className="text-[#B3B3B3] text-[16] font-semibold">
          Because you <span className="text-maingreen">Matters</span>
        </p>
      </div>
    </footer>
  );
};

export default FooterTemplateTwo;
