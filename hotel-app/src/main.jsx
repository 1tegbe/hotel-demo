import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {Checking} from "./Context/DateContext"
import RoomContextProvider from "./Roomcontext/Roomlist"
createRoot(document.getElementById('root')).render(
  
  <StrictMode>
  <Checking>
    <RoomContextProvider>
    <App /> 
    </RoomContextProvider>
   </Checking>
  </StrictMode>
 
)
