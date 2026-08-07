import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Checking} from "./Context/DateContext"
import RoomContextProvider from "./Roomcontext/Roomlist"
import {CheckoutContext} from "./Roomcontext/CheckoutContext"
import {CheckoutData} from "./Roomcontext/checkoutpageContext"
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <CheckoutData>
    <CheckoutContext>
  <Checking>
    <RoomContextProvider>
    <App /> 
    </RoomContextProvider>
   </Checking>
   </CheckoutContext>
   </CheckoutData>
  </StrictMode>
 
)
