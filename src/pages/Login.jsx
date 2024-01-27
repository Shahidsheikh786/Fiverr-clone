
import React from 'react'
import { Link } from 'react-router-dom'
import {useNavigate} from "react-router-dom";

import Cookies from "universal-cookie";

const Login = () => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  
  
  
  return (
    <div className="absolute top-0 bg-white h-[100vh]  w-full flex flex-col
    items-center gap-4">
    <div className="text-xl flex justify-between p-4 w-full">
    <h1 className="font-bold text-3xl">fiverr. </h1>
    <h1 onClick={()=>navigate(-1)}> x </h1> 
    </div>
    
    <h1 className="p-5 font-bold text-4xl">
    Success <span className="text-pink-600"> starts </span> here.
    </h1>
    
   <button  className="border p-1 font-bold rounded-lg w-[80%]">Continue with Google</button>
   
   <button className="border p-1 font-bold rounded-lg w-[80%]">Continue with E-mail</button>
    <div>OR</div>
    <div>
    <div className="flex gap-2">
   <button className="border p-1 font-bold rounded-lg w-full px-8">Apple</button>
   <button className="border p-1 font-bold rounded-lg w-full px-8">Facebook</button>
    </div>
    </div>
    
    
    </div>
  )
}

export default Login