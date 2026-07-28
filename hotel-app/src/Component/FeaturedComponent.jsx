import React from 'react'
import VillaView from "../assets/vojtech-bruzek-Yrxr3bsPdS0-unsplash.jpg";
import View from "../assets/caleb-jack-n6gVELa8pUo-unsplash.jpg"
import {useState} from "react"
import { Link } from "react-router-dom";
const FeaturedComponent = () => {
    const [imgshow,setImgshow]=useState(false)
  return (
    <div className="bg-black h-300"> 
        <h1 className="text-amber-300 font-medium font-inter px-20 text-xl py-10">Featured Collection</h1>
   <span className="text-6xl text-amber-100 md:px-10 px-4">Exceptional stays,
<div className="font-Cormorant italic md:px-10 px-4">singular places.</div></span>
<div className="md:flex mx-10 gap-10">
  
<div style={{
    backgroundImage:`url(${VillaView})`,
     backgroundSize: 'cover',
     backgroundPosition: 'center',
     height: '550px',
    
}} className=" w-full md:w-300 ">
<p className="backdrop-blur-md  w-35 text-xl py-2 px-2 font-medium font-inter ring-amber-300 ring-1 mx-10 my-10">Clifftop Suite</p>
<div className="md:mt-80 mt-40 md:flex">
    <span>
    <p className="md:text-4xl text-shadow-2xs text-base mx-10 text-white font-g font-bold font-Cormorant"
    >Villa Aegean</p>
    <p className="text-white mx-12 text-shadow-xl">Oia, Santorini</p>
    </span>
    <span className=" ml-70 text-shadow-2xs ">
        <p className="text-gray-300 text-base">From</p>
      <h2 className="font-Cormorant text-white text-2xl">$1,240</h2>
      <p className="text-gray-300 text-base">per night</p>
      <Link to="/room" className="text-black bg-amber-300 rounded-xl px-3 py-2">BOOK NOW</Link>
    </span>
</div>

</div>
<div style={{
    backgroundImage:`url(${View})`,
     backgroundSize: 'cover',
     backgroundPosition: 'center',
     height: '550px',
    
}} className="hover:sca w-full md:w-300">
    <p className="backdrop-blur-md  w-35 text-xl py-2 px-2 font-medium font-inter ring-amber-300 ring-1 mx-10 my-10 relative">Heritage Inn</p>
<div className="md:mt-80 mt-40 md:flex">
    
    <span>
    <p className="md:text-4xl text-shadow-2xs text-base mx-10 text-white font-g font-bold font-Cormorant"
    >Ryokan Arashiyama</p>
    <p className="text-white mx-12 text-shadow-xl">Kyoto, Japan</p>
    </span>
    <span className=" ml-40 text-shadow-2xs ">
        <p className="text-gray-300 text-base">From</p>
      <h2 className="font-Cormorant text-white text-2xl">$890</h2>
      <p className="text-gray-300 text-base">per night</p>
      <Link to="/room" className="text-black bg-amber-300 rounded-xl px-3 py-2 mt-5">BOOK NOW</Link>
    </span>
</div>
</div>
</div>
    </div>
  )
}

export default FeaturedComponent;