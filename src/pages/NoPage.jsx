
import React from 'react'
import { Link } from 'react-router-dom'

const NoPage = () => {
  return (
    <div className="h-[100vh] w-full absolute top-0 left-0 bg-white flex
    flex-col justify-center items-center p-6">
   <h1 className="text-5xl font-bold">  404 Page is not found </h1>
   <Link to="/"><button className="mt-6 border p-1 rounded-lg"> Go to Home page
   </button></Link>
    
    </div>
   
  )
}

export default NoPage