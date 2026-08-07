import React, { createContext, useState } from 'react';

export const checkOut_context = createContext();

export const CheckoutContext = ({ children }) => {
  const [arr_id, setArr_id] = useState(null);

  return (
    <checkOut_context.Provider value={{ arr_id, setArr_id }}>
      {children}
    </checkOut_context.Provider>
  );
};

