'use client'
import { NavbarLinks } from "@/constants"
import { auth } from "@/lib/firebase"
import { navbar } from "@/lib/framer-motion/anim"
import { setOpenSidebar } from "@/lib/redux/features/commonSlice"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { AnimatePresence, motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useDispatch, useSelector } from "react-redux"

const Sidebar = () => {
    const openNavbar = useSelector((state)=>state.common.openSidebar);
    const dispatch = useDispatch()
    const handleClick =(item) =>{
        if(item.title === 'Log Out'){
            auth.signOut();
        }
        dispatch(setOpenSidebar(false))
    }
  return (
    <AnimatePresence mode="wait">
    {
        openNavbar && (
            <motion.div variants={navbar} initial ="initial" exit ="end"
             animate="show" className="fixed max-w-[512px] mx-auto inset-0 bg-[#fafafa] h-[100dvh] z-30 overflow-y-hidden">
                <div className="flex flex-col h-full  justify-between pt-[35px] pb-[40px] px-[18px]">
                    <div className="">
                        <Image src='/assets/fdor_logo.svg' width={95} height={37} alt="fdorlogo"/>
                        <p className="text-10 mt-[7px] font-medium text-secondarytext">YOUR MONTHLY FOODING PARTNER</p>
                    </div>
                <div className="flex flex-col gap-5">
                    { 
                        NavbarLinks.map((item,index)=>(
                            <Link
                            onClick={()=>handleClick(item)} key={index} href={item.href} className="bg-white px-4 py-[8px] flex justify-between items-center rounded-[10px]">
                            <div className="flex gap-[2px] flex-col ">
                                <div className="flex gap-[5px] items-center">
                                <FontAwesomeIcon icon={item.icon} className={`text-16  ${item.color ? `text-[${item.color}]` : 'text-maingreen'} `}/>
                                <p className={`text-20 ${item.color ? `text-[${item.color}]` : 'text-maingreen'} font-semibold uppercase`}>{item.title}</p>
                                </div>
                            <p className="text-10 text-secondarytext">{item.description}</p>
                            </div>
                            <FontAwesomeIcon icon={faChevronRight} className={` ${item.color ? `text-[${item.color}]` : 'text-maingreen'} text-[22px]`}/>
                        </Link>
                        ))
                    }
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-10 font-medium text-secondarytext">terms & conditions</p>
                    <p className="text-10 font-medium text-secondarytext">privacy Policy</p>
                    <p className="text-12 font-medium text-secondarytext mt-2">©fdor 2024</p>
                </div>
                </div>
            </motion.div>
        )
    }
    </AnimatePresence>
  )
}

export default Sidebar