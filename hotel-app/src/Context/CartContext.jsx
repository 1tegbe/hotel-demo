import React,{createContext,useState} from 'react'
export const CartData=createContext()
const CartContext = ({children}) => {
    const[Cart,setCart]=useState([]);
  return (
   <>
   <CartData.Provider value={{Cart,setCart}}>
    {children}
   </CartData.Provider>
   </>
  )
}

export default CartContext;