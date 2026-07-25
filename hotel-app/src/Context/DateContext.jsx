import React from 'react'
import {useState, useEffect,createContext} from "react";

export const DateContext=createContext();
export const Checking=({children})=>{

const [checkIn, setCheckIn] = useState('');
const [checkOut, setCheckOut] = useState('');
 const [guest, setGuest] = useState(1);
  const[selected,setselected]=useState("");
return(
<DateContext.Provider value={{checkIn,setCheckIn,setCheckOut,checkOut,guest,setGuest,selected,setselected}}>
  {children}
</DateContext.Provider>)
}

