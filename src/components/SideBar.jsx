import React from 'react'
import { Link } from 'react-router-dom'

const SideBar = ({sideBarOpen,setSideBarOpen }) => {
  
  return (
    <>
    <div className="bg-[#000000b2] h-[100vh] fixed top-0 left-0 z-10 w-[100%]"
    onClick={()=>{setSideBarOpen(false)}}
     ></div>
     
    <div className="bg-white h-[100vh] md:w-[40%] fixed top-0 left-0 z-10 w-[70%] p-4 flex
    flex-col gap-4">
    
    <Link to="/login"> <button onClick={()=>setSideBarOpen(false)} className="bg-green-500 text-white rounded w-32 p-2 px-4">Join
   Fiverr</button></Link> 
    
   <Link to="/login"> <h1 onClick={()=>setSideBarOpen(false)}>Sign in</h1></Link>
    
    <ul className="h-6 hover:h-20   overflow-hidden flex gap-1 flex-col ">
    <li>Browse categories</li>
    <li>Graphics & Design</li>
    <li>Digital Marketing</li>
    </ul>
    <ul className="h-6 hover:h-20   overflow-hidden">
    <li>Explore</li>
    <li>Discover</li>
    <li>Community</li>
    </ul>
    <ul className="h-6  hover:h-20  overflow-hidden mb-7">
    <li className="font-bold">Fiverr Pro</li>
    <li>I want to hire a freelancer</li>
    <li>I’m a freelancer</li>
    </ul>
    
    <h1 className="font-bold">General</h1>
    <hr/>
    <ul className="h-6  hover:h-[100px]  overflow-hidden ">
    <li className="">English </li>
    <li>Hindi</li>
    <li>Urdu</li>
    <li>Marathi</li>
    </ul>
    
    <ul className="h-6  hover:h-[100px]  overflow-hidden ">
    <li className="">INR - ₹ </li>
    <li>USD - $</li>
    <li>EUR - €</li>
    <li>GBP - £</li>
    </ul>
    
    </div>
    </>
  )
}

export default SideBar