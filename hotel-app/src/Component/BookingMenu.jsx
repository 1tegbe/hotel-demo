import {React,useContext,useState} from 'react'
import {DateContext } from "../Context/DateContext"
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io"
import { useNavigate } from "react-router-dom";
const BookingMenu = () => {
      const { checkIn, setCheckIn, checkOut, setCheckOut, guest, setGuest } = useContext(DateContext);
      const navigate =useNavigate();
    const [show, setShow] = useState(false);
        const [selected, setSelected] = useState("");
 const dataCategorys=[
  {
  id:1,
  category:"Standard",
 },
 {
id:2,
category:"Premium",
 },
 {
id:3,category:"Exclusive",}
 ]
 
 const handleCheckIn=(e)=>{
e.preventDefault();
setCheckIn(e.target.value);

console.log(checkIn);
if(checkIn&&checkOut<=checkIn){
  setCheckOut('')
}
 }
 const handleCheckOut=(e)=>{
e.preventDefault();

setCheckOut(e.target.value);
console.log(checkOut);
 }
 console.log(selected)
  const roomPrice = 250;
  const nights = checkIn && checkOut
    ? Math.max(0, Math.round((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24)))
    : 0;

console.log(guest)
  const handleSubmit = (event) => {
    
    event.preventDefault();
    if (!selected|| !checkOut|| !checkIn){
    alert("All field required");
 return;
    }
     navigate('/room');
 console.log({ checkIn, checkOut, guest, nights, total });

  };
const handleguest_sub=()=>{
  if (guest<=1){
return 1;
  }
  else{
   return setGuest(guest - 1);
  }
}
  return (
    <div>
<div className="md:static mx-auto w-60 md:w-230  bg-white/10 backdrop-blur-xl border border-white/20 shadow-xl text-white rounded-xl flex-col font-inter px-2 py-2 " >
  <span className="md:flex md:px-4 py-2   md:gap-x-3 " >
   
    <div className="font-inter  font-medium text-black">
  <p className="md:text-xl font-inter text-base" >Check in</p>
  <input type="date" name="check_in" id=""required value={checkIn} onChange={handleCheckIn} className="text-black" />
</div>
  <div className="font-inter font-medium text-black">
  <p className="md:text-xl font-inter text-base" >Check out <output></output></p>
  <input type="date" name="check_out" className="text-black" min={checkIn} disabled={!checkIn}  required value={checkOut} onChange={handleCheckOut}  /></div>
  <div>
    <div className="flex">
      <button className="text-xl font-bold outline outline-transparent backdrop-blur-2xl rounded-md px-2 py-2" onClick={()=>{setGuest(guest + 1)}}>+</button> <span className="text-xl font-bold text-black mx-4">{guest}</span><button className="text-xl font-bold outline outline-transparent backdrop-blur-2xl rounded-md px-2 py-2" onClick={handleguest_sub}>-</button>
    </div>
   {/*----the select menu ---- for the room category ------------------------------------------*/}
 <div className={`  ml-3 flex mt-4` } onClick={()=>{setShow(!show)}}>
 <span className="md:text-xl font-inter mr-4 text-black">{selected||"Select your category"
}</span> 
 <span className="md:text-xl text-black duration-50 ease-in-out"> {show?(<IoIosArrowUp />):(<IoIosArrowDown />)}</span>
 </div>
 <div className="absolute bg-white shadow-xl rounded-xl gap-y-3 md:w-60">
  {show && dataCategorys.map((item,id)=>{
    return(
<div key={id}>
  <div className="text-2xl text-black" onClick={()=>{setSelected(item.category),setShow(false)}} className= " text-center  hover:text-white text-black hover:bg-blue-600 px-2 py-2 font-inter">{item.category}</div>
</div>)
  })}
 </div>
 </div>
        
  </span>
  {/* -------the button section-----*/}
  <button className="md:px-20 w-full bg-amber-700 rounded-xl md:py-3 shadow-xl md:text-2xl text-md font-medium py-2 hover:text-blue-400 " onClick={handleSubmit}>Check for availability</button>
</div>
    </div>
  )
}

export default BookingMenu