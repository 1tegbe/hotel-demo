import React from 'react';
import { useEffect, useState ,createContext} from 'react';
import Heropic from '../assets/homepic.jpg';
import Loading from '../Component/Loading';

const HomePage = () => {

  const DateContext=createContext();
const Checking=({children})=>{
const {checkIn,checkOut}=check;
console.log(check);
<DateContext.Provider check={check}>
  {children}
</DateContext.Provider>
}
  const [isLoading, setIsLoading] = useState(true);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guest, setGuest] = useState(1);
 const handleCheckIn=(e)=>{
e.preventDefault();
setCheckIn(e.target.value);
console.log(checkIn);
 }
  const roomPrice = 250;
  const nights = checkIn && checkOut
    ? Math.max(0, Math.round((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)))
    : 0;
  const total = nights * roomPrice;

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ checkIn, checkOut, guest, nights, total });
  };

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
<p className="text-amber-500 md:text-xl font-semibold pb-20 sm:text-md">Curated Luxury Collection</p>
<span className="font-Cormorant md:text-7xl text-6xl text-white">Where every
 <div className="text-amber-100 italic">moment</div>
 is
a memory.</span>
<h1 className="md:text-xl text-gray-200 md:py-20 md:w-full w-60 text-base py-5">Discover our handpicked collection of extraordinary hotels across the world's most coveted destinations.</h1>
<div className="m  bg-slate-900 w-full md:w-300 mx-auto  shadow-xl text-white rounded-xl flex-col font-inter
">
  <span className="mx-auto flex " >
    <div>
  <p className="text-xl" >Check in</p>
  <input type="date" name="check_in" id=""required value={checkIn.check_in} onChange={handleCheckIn} />
</div>
  <div>
  <p>Check out <output></output></p>
  <input type="date" name="check_out" id="" required value={checkOut.check_out}  /></div>
  </span>
  <button className="md:px-30 w-full bg-amber-600 rounded-xl md:py-5 shadow-xl text-xl font-medium py-2 " >Check for availability</button>
</div>
</div>
        </div>
      </div>)}
    </>
  );
};

export default HomePage;