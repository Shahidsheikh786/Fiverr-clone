
import React from 'react'

import GigsData from '../GigsData.js';
import { useState, useEffect } from "react";
import {useParams} from "react-router-dom"


// icons
import { BsStopwatch } from "react-icons/bs";
import { MdOutlineChangeCircle } from "react-icons/md";

import { ImCheckmark } from "react-icons/im";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



const Gig = () => {
  
const [item, setItem] = useState("")
   const [tabs, setTabs] = useState(1);
 
  const {id} = useParams();
  
  
 let Basic = {
   id : 1, 
   price : item.price,
   heading : "Basic heading",
   revisions: 2,
   delevery : "10 hr",
   content :
 <div className="italic">sit pariatur mollit ex anim ea qui sint ipsum
 exercitation</div>,
   
 }
 
 let Standard = {id : 2,
 price : 1500,
 heading : "Standard heading",
 revisions : 5,
 delevery : "20 hr",
 content :
 <div className="italic">sit pariatuirure fugiat sint laboris ex magna mollit ex anim ea qui sint ipsum
 exercitation</div>
   
 }
 
 let Premium  = {id : 3,
 price : 2000,
 heading : "Premium heading" ,
 revisions : "unlimited",
 delevery : "2 days",
 content :
 <div className="italic">veniam veniam esse qui esse ea occaecat consequat mollit ex anim ea qui sint ipsum
 exercitation</div> 
   
 }
  
   
  GigsData.find((e)=>{
    
   if(e.id == id){
     useEffect(() => {
       setItem(e)
     }, []);
   }
  })
  
 

  
  return (  
    <div>
            <div className=" flex justify-center  p-5 ">
    <input  placeholder="Search trem ..." className="border-[1.5px] w-full  p-1
    outline-none  rounded-sm "
    />
    </div>
    <hr/>
    
    <h1 className="p-5 text-lg font-bold">{item.title}</h1>
    
    <div className="flex px-5 gap-1 items-center "><img src={item.sellerImg}  />
    <p>{item.sellerName}</p></div>
    
    
      <Carousel className="my-5 p-5  " showIndicators={false}
    infiniteLoop={true} showThumbs={false}>
                <div>         
             <img src={item.img}/>
      
                </div>
                <div>
            <img src={item.img2}/>
           
               </div>
                <div>
          <img src={item.img3}/>

                </div>
            </Carousel>
    
    <div className="md:flex">
    <div className="mx-4 mr-7">
    <div className="flex justify-between ">
    <h1 className={`border bg-[#ebebeb] text-[#9e9e9e] border-black p-4
    w-[33.3vw] md:w-[150px] text-center  ${tabs == 1 ? "border-b-4 text-black bg-white" : ""}
    `}  onClick={()=>{setTabs(1)}} 
   >Basic</h1>
    
    <h1 className={`border bg-[#ebebeb] text-[#9e9e9e] border-black p-4
    w-[33.3vw] text-center md:w-[150px] ${tabs == 2 ? "border-b-4 text-black bg-white" : ""}
    `}  onClick={()=>{setTabs(2)}} 
    >Standard</h1>
    
    <h1 className={`border bg-[#ebebeb] text-[#9e9e9e] border-black p-4
    w-[33.3vw] text-center  md:w-[150px] ${tabs == 3 ? "border-b-4 text-black bg-white" : ""}
    `}  onClick={()=>{setTabs(3)}}  >Premium</h1>
   </div>
    
    <div className="flex justify-between p-3"><h1
    className="max-w-[70vw]  text-md font-bold">
     {tabs == 1 ? Basic.heading : tabs == 2 ? Standard.heading : tabs == 3 ?
     Premium.heading :
  null}
    </h1> <p className="text-xl">₹     {tabs == 1 ? Basic.price : tabs == 2 ?
    Standard.price : tabs == 3 ?
     Premium.price :
  null}</p></div>
    <p className="px-3 text-[#5e5e5e]">   {tabs == 1 ? Basic.content : tabs ==
    2 ? Standard.content : tabs == 3 ? Premium.content :
  null}  
  
  </p>
    
    
    <div className="flex gap-6 items-center p-2" >
    <h1 className="flex gap-2 font-bold items-center"><BsStopwatch/>      {tabs
    == 1 ? Basic.delevery : tabs == 2 ? Standard.delevery : tabs == 3 ?
     Premium.delevery :
  null} delevery</h1>
    <h1 className="flex gap-2 font-bold items-center" >
    <MdOutlineChangeCircle/>      {tabs == 1 ? Basic.revisions : tabs == 2 ?
    Standard.revisions : tabs == 3 ?
     Premium.revisions :
  null} Revision</h1>
    
    </div>
    <ul className="p-3">
    <li className="flex gap-2 items-center text-[#979797]">
    <ImCheckmark
    className="text-black"/>1 page</li>
    <li className="flex gap-2 items-center text-[#979797]"><ImCheckmark
    className="text-black"/> Source Code</li>
    <li className="flex gap-2 items-center text-[#979797]"><ImCheckmark /> Backend</li>
    <li className="flex gap-2 items-center text-[#979797] "><ImCheckmark /> DataBase</li>
    </ul>
    
    </div>
    
    <div>
      <div className="p-4 gap-5 flex flex-col">
      <button className="bg-black text-white p-2 ">Continue</button>
      <button className="border border-black p-2">Contact me</button>
      </div>
  
  <div className="p-4">
  <h1 className="font-bold text-xl mb-4">About this gig</h1>
  <h1 className="text-[#747474]"><span className="font-bold">About me :</span><br/>non ipsum sit nulla sint id eiusmod occaecat et pariatur occaecat consequat cupidatat deserunt enim</h1>
  </div>
  </div>
</div>
    </div>
  )
}

export default Gig;