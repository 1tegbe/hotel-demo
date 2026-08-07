import React from 'react';
import { useEffect, useState} from 'react';
import Heropic from '../assets/hotel image.webp';
import Loading from '../Component/Loading';
import BookingMenu from '../Component/BookingMenu'


import FeaturedComponent from "../Component/FeaturedComponent"
const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
 
  return (
    <>
      {isLoading ?(<Loading />):
      (<div>
        <div
          style={{
            backgroundImage: `url(${Heropic})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '900px',
          }}
          className=" h-full w-full"
        >
          <div className="flex-col pt-30 md:w-130 md:ml-10 ml-5 ">
<p className="text-amber-500 md:text-xl font-semibold pb-20 sm:text-md">Redefining hospitality</p>
<div className="font-Cormorant md:text-7xl text-6xl text-white">Where every
 <span className="text-amber-100 italic">moment</span>
 is
a memory.</div>
<h1 className="md:text-xl text-gray-200 md:py-20 md:w-full w-60 text-base py-5">Discover our handpicked collection of extraordinary hotels across the world's most coveted destinations.</h1></div>
{/*----------------------------------------------------------------------------------the booking section-----------------------------------*/}
<BookingMenu />

        </div>
      
      </div>)}
    </>
  );
};

export default HomePage;