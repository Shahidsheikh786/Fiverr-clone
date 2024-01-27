
import React from 'react'
import { FaStar } from "react-icons/fa";

const ItemCard = ({item}) => {
  
 
  
  return (
    
    <div className="my-4 md:w-[300px]">
    <img src={item?.img} className="h-40 w-full md:w-[300px] object-contain border"/>
    <div>
    <div className="flex gap-1 items-center font-bold my-2"><img
    src={item?.sellerImg}
    className="h-7 w-7 rounded-full border"/> <h1>{item?.sellerName} </h1></div>
    
    <h1 className="text-[#848484] my-1">{item?.title}</h1>
    
    <div className="font-bold flex gap-1 items-center "><FaStar/> 5.0 <span
    className="font-normal text-[#848484]"> (1k+) </span> </div>
    <div className="font-bold">from ${item?.price} </div>
    
    
    </div>
    
    
    </div>
  )
}

export default ItemCard