import React,{useContext} from 'react'
import GigsData from "../GigsData.js"
import { useState } from "react";
import AppContext from "../context/AppContext";

const AddGig = () => {
  
  const {user} = useContext(AppContext);
  
  const [form, setForm] = useState({
  title : "",
  price : 0,
  sellerName : "",
  sellerImg : "/vite.svg",
  category: "",
});
 
 
  const addNewGig = () =>{
  
  if (form.title != ""  && form.price != 0 &&
  form.category != "") {
    GigsData.push({
  id : GigsData.length + 1 ,
  img : "/cat-1.jpg",
  img2 : "/cat-2.jpg",
  img3 : "/cat-3.jpg",
  title : form.title,
  price : form.price,
  sellerName : "shahid",
  sellerImg : "/vite.svg",
  category: form.category}) 
   alert('success')
   setForm({
    title : "",
  price : 0,
  sellerName : "",
  sellerImg : "",
  category: "",
  }) 
  } else {
    alert("please fill all fields to add gig")
  }
  
   
  
  }
  return (
    <div className="flex flex-col gap-4 p-5">
    <input className="border p-1 px-2" placeholder="title" value={form.title} onChange={(e)=>{ setForm({...form ,title : e.target.value}) }}/>
    
    <input className="border p-1 px-2" placeholder="price" value={form.price} type="number" onChange={(e)=>{ setForm({...form ,price : e.target.value}) }}/>
    

    <input className="border p-1 px-2" placeholder="category"
    value={form.category} onChange={(e)=>{ setForm({...form ,category :
    e.target.value}) }}/>
    
    
    <button className=" rounded bg-green-500 text-white p-2"
    onClick={addNewGig}>Add New Gig</button>
    
   
    </div>
  )
}

export default AddGig