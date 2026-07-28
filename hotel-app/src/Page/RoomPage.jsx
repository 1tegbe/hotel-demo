import React from 'react'
import {useContext} from "react";
import {RoomContext} from "../Roomcontext/Roomlist";
 import {Link  } from "react-router-dom";
const RoomPage = ( ) => {
  const Dataset=useContext(RoomContext);
  console.log(Dataset)
  return (
    <div className="bg-black w-full h-full md:pt-30 pt-15">
      <span className="text-base font-medium text-amber-300 px-10">Our collection</span>
      <p className="font-Cormorant font-bold text-7xl text-amber-100 py-10 px-10">Rooms & Suites</p>
      <div className="">
        {Dataset.map((item,id)=>{return(
          <div key={id} className="grid-row-3 mx-10 mb-20 flex border-zinc-900 rounded-sm  hover:bg-zinc-900  hover:shadow-xl ">
            <div>
            <img className="w-full h-100 mr-20" src={item.images[0]}/>
           </div>
           <div className="ml-20">
            <div className=" font-inter text-amber-200/70 md:text-xl py-2">{item.text}</div>
            <div className="text-white text-4xl font-Cormorant font-semibold py-2 ">{item.head}</div>
            <div className="text-stone-400 font-light font-inter w-150 text-xl">{item.story}</div>
            <div className="text-md text-gray-200 font-inter font-bold py-2">{item.category}</div>
            <div className="text-gray-600">From</div>
            <div className="font-inter text-xl font-serif text-stone-50 ">${item.price}</div>
            <div className="">per night</div>
            <Link to="/room/${id}" className="bg-amber-600 text-black w-30 text-3xl font-inter  px-2 py-1">Book now</Link>
               <Link to="/room/${id}" className="  text-2xl font-inter  px-3 py-2  border border-stone-600 text-stone-300 bg-transparent">view Details </Link>
         </div> </div>)
        })

        }
      </div>
    </div>
  )
}

export default RoomPage