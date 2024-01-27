import React from 'react'

const ServiceCard = () => {
  return (
    <div className="w-20 flex flex-col justify-center items-center gap-1">
    <img src="/vite.svg" className="m-1 h-10"/>
    <hr className=" border w-[50%] hover:w-full hover:border-green-600
    transition-all"/>
    <h1 className="text-center">Web development </h1>
    </div>
  )
}

export default ServiceCard