'use client'

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { motion } from 'framer-motion'
import { hamburgerline1, hamburgerline2, hamburgerline3 } from '@/lib/framer-motion/anim'
import { setOpenSidebar } from '@/redux/slices/commonSlice'

const HamBurgerMenu = ({color=false}) => {
    const openSidebar = useSelector((state) => state.common.openSidebar);
    const dispatch =useDispatch()
    const handleClick = () =>{
      dispatch(setOpenSidebar(!openSidebar))
    }
  return (
    <div className="absolute right-[13px] h-full z-[100]" 
    onClick={handleClick}>
     <div className="flex justify-around flex-col h-full items-end">
       <motion.div variants={hamburgerline1}
         animate = {openSidebar ? 'show' : "initial"}
        className={`w-[45px] h-[3px] ${color ? `bg-[${color}]`:'bg-maingreen'}  rounded-full`}></motion.div>
       <motion.div variants={hamburgerline2}
         animate = {openSidebar ? 'show' : 'initial'}
        className={`w-[30px] h-[3px] ${color ? `bg-[${color}]`:'bg-mainblue'}  rounded-full`}></motion.div>
       <motion.div 
       variants={hamburgerline3}
         animate = {openSidebar ? 'show' : 'initial'}
        className={`w-[15px] h-[3px] ${color ? `bg-[${color}]`:'bg-maingreen'} rounded-full`}></motion.div>
     </div>
   </div>
  )
}

export default HamBurgerMenu;