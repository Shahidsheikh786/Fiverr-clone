import React from 'react'
import {useNavigate} from "react-router-dom"

import HeroCard from "../components/HeroCard"
import Card from "../components/PopularServicesCard"
import ServiceCard from "../components/ServiceCard"


import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Home = () => {
  
  
  
  return (
    <div>
    <HeroCard />
    
    <div className="brands bg-[#e8e8e8] flex justify-around p-4 text-xl
    text-[#9a9a9a] italic font-bold">
    <h1>Meta</h1>
    <h1>Google</h1>
    <h1>Netflix</h1>
    <h1>P&G</h1>
    
    </div>

    <div className="p-5">
    <h1 className="font-bold text-2xl">Popular Services</h1>
    
    <div className="my-4 flex gap-5 overflow-x-scroll">
    <Card/>
    <Card/>
    <Card/>
    </div>
    
    </div>
    
    <h1 className="text-2xl px-7 font-bold ">The best Part? <br/> Everything.</h1>
    <div className="p-5 md:flex md:items-center">
    
    <ul className="md:mx-3 ">
    <li className="my-4 mt-0">
    <h1 className="font-bold text-lg">- Stick to your budget</h1>
    <p className="text-xl  text-[#848484]">Find the right service for every price point. No hourly rates, just
    project based pricing. </p>
    </li>
    
    <li className="my-4">
    <h1 className="font-bold text-lg">- Get quality work done quickly</h1>
    <p className="text-xl text-[#848484]">Find the right service for every price point. No hourly rates, just
    project based pricing. </p>
    </li>
    
    <li className="my-4">
    <h1 className="font-bold text-lg">- Pay when you are happy</h1>
    <p className="text-xl text-[#848484]">Find the right service for every price point. No hourly rates, just
    project based pricing. </p>
    </li>
    
    <li className="my-4">
    <h1 className="font-bold text-lg">- Count on 24/7 support</h1>
    <p className="text-xl text-[#848484]">Find the right service for every price point. No hourly rates, just
    project based pricing. </p>
    </li>
    
    </ul>
    <div className="h-40 md:h-60 w-full md:w-[700px] md:ml-10 bg-green-600">  </div>
    </div>
    
     <div className="p-5 ">
    </div>
    
    <div className="p-5">
    <h1 className="text-3xl font-bold my-2">
    You need it, we've got it
    </h1>
    
    <div className="flex gap-7 flex-wrap justify-center">
    <ServiceCard/>
    <ServiceCard/>
    <ServiceCard/>
    <ServiceCard/>
    <ServiceCard/>
    <ServiceCard/>
    <ServiceCard/>
    <ServiceCard/>
    <ServiceCard/>
    </div>
    
    </div>
    
    <div className="bg-blue-800 text-white p-5">
    <h2 className="text-lg my-1 text-center"><span className="text-2xl font-bold">fiverr.</span> Business Solution</h2>
    <h1 className="text-3xl font-bold text-center my-2">Advanced solution and professional talent for business</h1>
    
    <ul className="py-4 md:flex">
    <li className="my-3 text-center">
    <h1 className="font-bold text-xl">Fiverr Pro</h1>
   <p>ea cillum fugiat eiusmod ad in commodo magna exercitation non</p>
    </li>
    
    <li className="my-3 text-center">
    <h1 className="font-bold text-xl">Fiverr Pro</h1>
   <p>ea cillum fugiat eiusmod ad in commodo magna exercitation non</p>
    </li>
    
    <li className="my-3 text-center">
    <h1 className="font-bold text-xl">Fiverr Pro</h1>
   <p>ea cillum fugiat eiusmod ad in commodo magna exercitation non</p>
    </li>
    
    </ul>
    <div className="flex justify-center">
    <button className="bg-white rounded text-black p-2">Learn more</button>
    </div>
    </div>
    
    <Carousel className="my-5 py-10 p-5  " showIndicators={false}
    infiniteLoop={true} showThumbs={false}>
                <div >
         <div className="w-full h-40 bg-yellow-600 text-left "><img
         src="/cat-1.jpg" className="h-full object-cover"/></div>
       <h1 className="text-left text-lg mt-4 text-[#848484]">Caitlin Tormey, Chief Commerial Officer</h1>
          <h1 className=" text-lg font-bold text-left">NAADAM</h1>
          
         <p className="text-black italic text-xl mt-3"> 
         "duis aliqua excepteur non aute est elit laboris fugiat sit tempor labore minim nisi nostrud anim magna sunt velit deserunt amet id laborum cillum dolor voluptate est quis aliqua"  </p>


                </div>
                <div>
                
              <div className="w-full h-40 bg-red-600 text-left"><img
              src="/cat-2.jpg" className="h-full object-cover"/></div>
          <h1 className="text-left text-lg mt-4 text-[#848484]">Caitlin Tormey, Chief Commerial Officer</h1>
          <h1 className=" text-lg font-bold text-left">NAADAM</h1>
          
         <p className="text-black italic text-xl mt-3"> 
         "duis aliqua excepteur non aute est elit laboris fugiat sit tempor
         labore minim nisi nostrud anim magna sunt velit deserunt amet id
         laborum cillum dolor voluptate est quis aliqua"  </p>
         
                </div>
                <div>
        <div className="w-full h-40 bg-green-600 text-left"><img
        src="/cat-3.jpg" className="h-full object-cover"/></div>
          <h1 className="text-left text-lg mt-4 text-[#848484]">Caitlin Tormey, Chief Commerial Officer</h1>
          <h1 className=" text-lg font-bold text-left">NAADAM</h1>
          
         <p className="text-black italic text-xl mt-3"> 
         "duis aliqua excepteur non aute est elit laboris fugiat sit tempor labore minim nisi nostrud anim magna sunt velit deserunt amet id laborum cillum dolor voluptate est quis aliqua"  </p>
                </div>
            </Carousel>
    

    </div>
  )
}

export default Home