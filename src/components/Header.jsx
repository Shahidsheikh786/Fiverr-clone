import React,{useContext} from 'react'
import { IoMenu } from "react-icons/io5";
import { IoAddCircleSharp } from "react-icons/io5";
import { Link } from 'react-router-dom'
import AppContext from "../context/AppContext.js"

const Header = ({sideBarOpen,setSideBarOpen }) => {
 const {user} = useContext(AppContext);
 console.log(user)
  
  return (
    <div className="h-16 flex gap-1.5 justify-between md:justify-normal
    items-center p-2 bg-white ">
    <IoMenu className="text-4xl"
    onClick={()=>{setSideBarOpen(true)}} />
    
   <Link to="/"> <h1 className="text-3xl font-bold">Fiverr. </h1></Link>
   
    <h1 className="text-1xl md:hidden" ><Link to="/addgig"><IoAddCircleSharp
    className="text-3xl"/></Link>
   </h1>
    
    
    <div className="hidden md:flex ml-auto  text-md items-center gap-7 ">
    
    <div className=" text-md
    whitespace-nowrap items-center  relative group 
     ">
   <h1>Fiverr Pro</h1>
   <ul className="absolute top-10 hidden group-hover:block bg-white p-4 z-10
   -translate-x-5 text-xl">
   <li>Fiverr Pro</li>
    <li>Fiverr Pro</li>
    <li>Fiverr Pro</li>
 
    </ul>
    </div>
    
    <div className=" text-md      whitespace-nowrap items-center  relative
    group 
     ">
   <h1>Explore</h1>
   <ul className="absolute top-10 hidden group-hover:block bg-white p-4 z-10
   -translate-x-5 text-xl">
   <li>Fiverr Pro</li>
    <li>Fiverr Pro</li>
    <li>Fiverr Pro</li>
 
    </ul>
    </div>
    <>

   <div className=""><Link
   to="/addgig"><IoAddCircleSharp className="text-2xl "/>
    </Link></div> 
    </>
    
    </div>
    

    </div>
  )
}

export default Header