import React from 'react'
import { LuSettings2 } from "react-icons/lu";
import { MdSort } from "react-icons/md";

import ItemCard from "../components/ItemCard"
import {useParams, Link} from "react-router-dom"
import GigsData from "../GigsData.js"
import { useState, useEffect } from "react";

const Search = () => {
  const {searchTerm} = useParams()
  
 const [searched, setSearched] = useState("");
   
   
  useEffect(() => {
    setSearched(`${searchTerm}`)
  }, []);
  
  let filterData = (GigsData.filter((element) =>
  element.category.toLocaleLowerCase().includes(searched.toLocaleLowerCase())))
   
  return (
    <div className="">
    
    <div className=" flex justify-center  p-5 ">
    <input value={searched} onChange={(e)=>{setSearched(e.target.value)}} placeholder="Search trem ..." className="border-[1.5px] w-full  p-1
    outline-none  rounded-sm "
    />
    </div>
    <hr/>
    
    <h1 className="px-5 my-2">Showing 1- {filterData.length} from {filterData.length} results for <span
    className="font-bold">
    {searched}</span></h1>
    
    <div className="flex justify-between p-4 ">
    <button className="border p-2 px-10 flex items-center justify-center gap-1 text-sm
    rounded-sm"><LuSettings2
    className="text-green-500 text-lg"/> Filter</button>
    
    <button className="border p-2 px-10 flex items-center justify-center gap-1 rounded-sm text-sm"><MdSort
    className="text-green-500 text-lg "/> Sort</button>
    </div>
    
 {/* card list */}
    
  {filterData.length === 0 ?   <h1 className="text-center">No results found you can try <br/> <span
  className="font-bold  "> 
 <span onClick={()=>setSearched("React")}> React , </span>
 <span onClick={()=>setSearched("Web Development")}> Web Development , </span>
 <span onClick={()=>setSearched("Frontend Developer")}> Frontend Developer  </span>
 
  </span> </h1> : ""
  }
    
    <div className="p-5 md:flex md:flex-wrap">
        {filterData.map((item,i)=>{
      
      return <Link onClick={()=>{window.scrollTo(0,0)}} to={`/gig/${item.id}`}> <ItemCard item={item}/> </Link>
      
        
    })}
   </div>
    
    </div>
  )
}

export default Search