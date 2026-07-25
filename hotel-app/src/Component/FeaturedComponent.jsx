import React from 'react'
import VillaView from "../assets/villa-view.jpg";
import View from "../assets/caleb-jack-n6gVELa8pUo-unsplash.jpg"
import {useState} from "react"
const FeaturedComponent = () => {
    const [imgshow,setImgshow]=useState(false)
  return (
    <div className="bg-black h-full"> 
        <h1 className="text-amber-300 font-medium font-inter px-20 text-xl py-10">Featured Collection</h1>
   <span className="text-6xl text-amber-100 md:px-10 px-4">Exceptional stays,
<div className="font-Cormorant italic md:px-10 px-4">singular places.</div></span>
<div className="md:flex mx-10 gap-10">
<div style={{
    backgroundImage:`url(${VillaView})`,
     backgroundSize: 'cover',
     backgroundPosition: 'center',
     height: '500px',
    
}} className="hover:sca w-full md:w-40">
<p className="backdrop-blur-md  w-35 text-xl py-2 px-2 font-medium font-inter ring-amber-300 ring-1 mx-10 my-10">Clifftop Suite</p>
<div className="md:mt-80 mt-40">
    <span><p className="text-xl text-white font-bold font-"
    >Villa Aegean</p>
    
    </span>
    <span></span>
</div>
</div>
<div style={{
    backgroundImage:`url(${View})`,
     backgroundSize: 'cover',
     backgroundPosition: 'center',
     height: '500px',
    
}} className="hover:sca w-full md:w-40">

</div>
</div>
    </div>
  )
}

export default FeaturedComponent;