import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { Checking } from './Context/DateContext';
import CartContext from './Context/CartContext';
import RoomContextProvider from './Roomcontext/Roomlist';
import { CheckoutContext } from './Roomcontext/CheckoutContext';
import { CheckoutPageContext } from './Roomcontext/checkoutpageContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartContext>
      <CheckoutPageContext>
        <CheckoutContext>
          <Checking>
            <RoomContextProvider>
              <App />
            </RoomContextProvider>
          </Checking>
        </CheckoutContext>
      </CheckoutPageContext>
    </CartContext>
  </StrictMode>
);
