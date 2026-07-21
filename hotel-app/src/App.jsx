import {BrowserRouter ,Routes,Route } from "react-router-dom";
import NavbarComponent from "./Component/NavbarComponent";
import HomePage from "./Page/HomePage";
import Footer from "./Component/Footer"
import RoomPage from "./Page/RoomPage"
import Gallery from "./Page/Gallery"
import Contact from "./Page/Contact"
function App() {

  return (
    <>
    <BrowserRouter>
    <NavbarComponent/>  
      <Routes>
        <Route path="/" element={<HomePage/>}/>
         <Route path="/room" element={<RoomPage/>}/>
         <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
      </>
  )
}

export default App
