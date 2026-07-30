import React from 'react'
import {useContext,useState} from "react";
import {RoomContext} from "../Roomcontext/Roomlist";
 import {Link  } from "react-router-dom";
 import {checkOut_context} from "../Roomcontext/CheckoutContext";
const RoomPage = ( ) => {
  {/* to store the list in an array temporary for the room page card */}
const {arr_id,setArr_id}=useContext(checkOut_context);


  {/* the data for the product*/}
  const Dataset=useContext(RoomContext);
  console.log(Dataset);
  const [selectRoom,setselectRoom]=useState();
  console.log(selectRoom);
  {/* ^-------to display the selected room list*/}

console.log(arr_id);
  return (
    <div className="bg-black w-full h-full md:pt-30 pt-15">
      <span className="text-base font-medium text-amber-300 px-10">Our collection</span>
      <p className="font-Cormorant font-bold text-7xl text-amber-100 py-10 px-10">Rooms & Suites</p>
      <div className="">
        {Dataset.map((item,id)=>{return(
          <div key={id} className="grid-row-3 mx-10 mb-20 flex border-zinc-900 rounded-sm  hover:bg-zinc-900  hover:shadow-xl " >
            <div>
            <img className="w-full h-100 mr-20" src={item.images[0]}/>
           </div>
           <div className="ml-20 flex md:flex-row flex-col">
            <div> <div className=" font-inter text-amber-200/70 md:text-xl py-2">{item.text}</div>
            <div className="text-white text-4xl font-Cormorant font-semibold py-2 ">{item.head}</div>
            <div className="text-stone-400 font-light font-inter w-150 text-xl">{item.story}</div>
            <div className="text-xl text-gray-200 font-inter font-bold py-2">{item.category}</div></div>
           
            <div className="mt-40">
            <div className="text-gray-600">From</div>
            <div className="font-inter text-xl font-serif text-stone-50 ">&#8358;{item.price}</div>
            <div className="text-gray-600">per night</div>
            <div className="flex-col flex">
            <Link to="/room/${id}" className= "w-40 my-5 bg-amber-600 text-black text-3xl font-inter  px-2 py-1" onClick={()=>{setselectRoom(Dataset[id])}}>Book now</Link>
               <Link to="/room/${id}" className="w-40  text-2xl font-inter  px-3 py-2  border border-stone-600 text-stone-300 bg-transparent"  onClick={()=>{setselectRoom(Dataset[id])}}>View Details </Link></div>
               </div>
         </div> </div>)
        })

        }
      </div>
    </div>
  )
}

export default RoomPage