import React, { createContext, useState } from 'react';

export const CheckoutData = createContext();

export const CheckoutPageContext = ({ children }) => {
  const [email, setEmail] = useState('');
  const [Name, setName] = useState('');
  const [number, setNumber] = useState('');

  return (
    <CheckoutData.Provider value={{ email, setEmail, Name, setName, number, setNumber }}>
      {children}
    </CheckoutData.Provider>
  );
};

