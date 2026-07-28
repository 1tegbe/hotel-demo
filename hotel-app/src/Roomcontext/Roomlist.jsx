import { createContext, useContext } from 'react';
import Dataset from '../assets/Dataset';

export const RoomContext = createContext([]);

const Roomlist = ({ children }) => {
  const value = Dataset;

  return <RoomContext.Provider value={value}>{children}</RoomContext.Provider>;
};



export default Roomlist;