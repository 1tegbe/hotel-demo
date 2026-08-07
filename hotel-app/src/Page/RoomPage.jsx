import React from 'react'
import { useContext } from "react";
import { RoomContext } from "../Roomcontext/Roomlist";
import { Link } from "react-router-dom";
import { checkOut_context } from "../Roomcontext/CheckoutContext";

const RoomPage = () => {
  const { setArr_id } = useContext(checkOut_context);
  const Dataset = useContext(RoomContext);

  const handleOnclick = (room) => {
    setArr_id(room);
  };

  return (<>
    <div className="bg-black w-full h-full md:pt-30 pt-15 overflow-hidden">
      <span className="text-base font-medium text-amber-300 px-10">Our collection</span>
      <p className="font-Cormorant font-bold text-7xl text-amber-100 py-10 px-10">Rooms & Suites</p>
      <div className="">
        {Dataset.map((item,id)=>{return(
          <div key={id} className="grid-row-3 mx-10 mb-20 md:flex border-zinc-900 rounded-sm  hover:bg-zinc-900  hover:shadow-xl " >
            <div>
            <img className="w-full h-100 md:mr-20" src={item.images[0]}/>
           </div>
           <div className="md:ml-20 flex md:flex-row flex-col">
            <div> <div className=" font-inter text-amber-200/70 md:text-xl py-2 text-base text-justify">{item.text}</div>
            <div className="text-white text-4xl font-Cormorant font-semibold py-2 ">{item.head}</div>
            <div className="text-stone-400 font-light font-inter md:w-150 md:text-xl text-justify">{item.story}</div>
            <div className="text-xl text-gray-200 font-inter font-bold py-2">{item.category}</div></div>
           
            <div className="md:mt-40">
            <div className="text-gray-600">From</div>
            <div className="font-inter text-xl font-serif text-stone-50 ">&#8358;{item.price}</div>
            <div className="text-gray-600">per night</div>
            <div className="flex-col flex">
            <Link to="/checkout" className= "md:w-40 w-full my-5 bg-amber-600 text-black text-3xl font-inter text-center px-2 py-1" onClick={() => handleOnclick(item)}>Book now</Link>
               <Link to="/checkout" className="md:w-40 w-full text-center text-2xl font-inter  px-3 py-2  border border-stone-600 text-stone-300 bg-transparent" onClick={() => handleOnclick(item)}>View Details </Link></div>
               </div>
         </div> </div>)
        })

        }
      </div>
    </div>
 
    </>
  )
}

export default RoomPage