
import React from 'react'

import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";

import {useNavigate} from "react-router-dom";

const HeroCard = () => {
  
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();
  
  const handleSearch = () =>{
    console.log(searchTerm)
    if(searchTerm !== ""){
      navigate(`/search/${searchTerm}`)
      setSearchTerm('')
    }else{
      alert("searchBar is empty")
    }
      
  }
  

  
  return (
    <div className="bg-green-900 text-white p-10 md:h-[300px] md:flex
    md:justify-center md:flex-col">
    
    <h1 className="text-3xl font-bold">Find the right <span
    className="font-normal italic">freelance</span> service , right way </h1>
    
    <div >
    <div className="md:flex items-center">
    <div className="flex relative items-center h-full">
    <IoSearchSharp className="text-xl absolute left-1.5 text-[#9a9a9a] md:hidden"/>
    
    <input placeholder="what service are you looking " value={searchTerm}
    onChange={(e)=>{setSearchTerm(e.target.value)}} className="pl-8
    w-[100%] md:w-[350px] text-black outline-none
    border p-2 rounded-sm border-none
    my-4 md:pl-2 "/>
        </div>
    <button className="bg-green-500 w-[100%] py-2 md:w-[80px] flex items-center
    justify-center md:h-10 md: md:text-sm
    " onClick={handleSearch}> <h1 className="md:hidden">Search</h1>
    <IoSearchSharp className="hidden md:flex text-xl"/>
    </button>
    
    </div>
    </div>
    
    </div>
    
  )
}

export default HeroCard