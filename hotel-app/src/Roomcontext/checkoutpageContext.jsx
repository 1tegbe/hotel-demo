import  {react ,useContext, createContext,useState } from 'react'
export const CheckoutData=createContext()
export const checkoutpageContext = ({children}) => {
    const[email,setEmail]=useState('');
     const[Name,setName]=useState('');
     const[number,setNumber]=useState('');
  return (
    <>
   < checkoutpageContext.Provider value={{email,setEmail,Name,setName,number,setNumber}}>
    {children}
</checkoutpageContext.Provider>
    </>
  )
}

