import {React, useContext} from 'react'
import {RoomContext} from "../Roomcontext/Roomlist"
const RoomId = () => {
  const {arr_id}=useContext(RoomContext); 
console.log(arr_id)
  return (<>
    </>
    
  )
}

export default RoomId