import React from 'react'
import {useContext} from "react";
import {RoomContext} from "../Roomcontext/Roomlist"
const RoomPage = ( ) => {
  const Dataset=useContext(RoomContext);
  console.log(Dataset)
  return (
    <div className="bg-black w-full h-full md:pt-30 pt-15">
      <span className="text-base font-medium text-amber-300 px-10">Our collection</span>
      <p className="font-Cormorant font-bold text-7xl text-amber-100 py-10 px-10">Rooms & Suites</p>
      <div className="">
        {Dataset.map((item,id)=>{return(
          <div key={id} className="grid-row-3 mx-10 grid ">
            <img className="w-100 h-100 " src={item.images[0]}/>
           
            <div className="text-md text-gray-200">{item.category}</div>
            <div className="font-inter text-xl text-blue-500">${item.price}</div>
            <div className="bg-amber-600 text-black rounded-xl w-20 px-2 py-1">Book now</div>
          </div>)
        })

        }
      </div>
    </div>
  )
}

export default RoomPage