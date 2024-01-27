
import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa6";
import { IoIosMan } from "react-icons/io";

const Footer = () => {
  return (
    <div className="py-5 ">
 <hr className="h-2"/>
 
 <div className="md:flex justify-around">
      <div className=" h-[40px]  h-[30px] overflow-hidden hover:h-full md:h-full
      
    ">
    <h1 className=" p-2 font-bold  h-10 mb-1">
    Categories 
    </h1>
    <div className="p-3 flex flex-col gap-3">
    <h1>Graphics & design </h1>
    <h1>React developer</h1>
    <h1>Frontend developer</h1>
    <h1>Backend developer</h1>
    <h1>Video editor</h1>
    </div>
    </div>
    
      <div className=" h-[40px]  h-[30px] overflow-hidden hover:h-full md:h-full
      
    ">
    <h1 className=" p-2 font-bold  h-10 mb-1">
    About  
    </h1>
    <div className="p-3 flex flex-col gap-3">
    <h1>Graphics & design</h1>
    <h1>React developer</h1>
    <h1>Frontend developer</h1>
    <h1>Backend developer</h1>
    <h1>Video editor</h1>
    </div>
    </div>
    
          <div className=" h-[40px]  h-[30px] overflow-hidden hover:h-full
          md:h-full
          
    ">
    <h1 className=" p-2 font-bold  h-10 mb-1">
    Education & Support 
    </h1>
    <div className="p-3 flex flex-col gap-3">
    <h1>Graphics & design</h1>
    <h1>React developer</h1>
    <h1>Frontend developer</h1>
    <h1>Backend developer</h1>
    <h1>Video editor</h1>
    </div>
    </div>
    
          <div className=" h-[40px]  h-[30px] overflow-hidden  hover:h-full
          md:h-full
    ">
    <h1 className=" p-2 font-bold  h-10 mb-1">
    Community 
    </h1>
    <div className="p-3 flex flex-col gap-3">
    <h1>Graphics & design</h1>
    <h1>React developer</h1>
    <h1>Frontend developer</h1>
    <h1>Backend developer</h1>
    <h1>Video editor</h1>
    </div>
    </div>
    
          <div className=" h-[40px]  h-[30px] overflow-hidden hover:h-full
          md:h-full
          
    ">
    <h1 className=" p-2 font-bold  h-10 mb-1">
    Business Solution
    </h1>
    <div className="p-3 flex flex-col gap-3">
    <h1>Graphics & design</h1>
    <h1>React developer</h1>
    <h1>Frontend developer</h1>
    <h1>Backend developer</h1>
    <h1>Video editor</h1>
    
   
    </div>
    </div>

    
    </div>
     <hr className="h-2 my-2"/>
    
 <div className="flex flex-col justify-center items-center">
 
 <h1 className="text-3xl font-bold text-[#848484]">fiverr.</h1>
 <p className="text-[#848484]"> ©️ fiver International Ltd. 2023</p>
 <div className="flex gap-3 my-2 text-2xl text-[#848484]">

 <i><FaInstagram/></i>
 <i><FaFacebookSquare/></i>
 <i><FaLinkedin/></i>
 <i><FaTiktok/></i>

 </div>
 
 <div className="flex gap-3 justify-center items-center text-[#848484]">
 <h1>English</h1>
 <h1>$ INR</h1>
 <h1 className="border p-1 border-black rounded-full"><IoIosMan/></h1>
 
 </div>
 </div>
 
    </div>
    
  )
}

export default Footer