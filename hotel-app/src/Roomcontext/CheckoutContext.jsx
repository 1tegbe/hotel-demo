import React from 'react'
import {createContext,useState} from "react";
export const checkOut_context=createContext();
export const CheckoutContext = ({children}) => {
   const[arr_id,setArr_id]=([]);
     
  return (
  <checkOut_context.Provider value={{arr_id,setArr_id}}>
    {children}
  </checkOut_context.Provider>
  )
}

