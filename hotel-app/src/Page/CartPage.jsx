import React, { useContext } from 'react';
import { CartData } from '../Context/CartContext';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const { Cart, setCart } = useContext(CartData);

  const removeFromCart = (roomId) => {
    setCart((prev) => prev.filter((item) => item.id !== roomId));
  };

  return (
    <div className="min-h-screen bg-stone-100 px-6 py-16 md:px-10 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">Your cart</p>
          <h1 className="mt-3 text-3xl font-semibold text-stone-900 sm:text-4xl">Rooms selected for your stay</h1>
        </div>

        {Cart.length === 0 ? (
          <div className="rounded-3xl border border-stone-200 bg-white p-8 text-center shadow-sm">
            <p className="text-lg text-stone-700">Your cart is empty.</p>
            <Link to="/room" className="mt-4 inline-block rounded-full bg-amber-600 px-5 py-2 text-sm font-semibold text-white">
              Browse rooms
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {Cart.map((room) => (
              <div key={room.id} className="flex flex-col justify-between rounded-3xl border border-stone-200 bg-white p-6 shadow-sm md:flex-row md:items-center">
                <div>
                  <h2 className="text-xl font-semibold text-stone-900">{room.head}</h2>
                  <p className="mt-2 text-sm text-stone-600">{room.category} • ₦{room.price}</p>
                </div>
                <div className="mt-4 flex gap-3 md:mt-0">
                  <Link to="/checkout" className="rounded-full bg-amber-600 px-4 py-2 text-sm font-semibold text-white">
                    Proceed to checkout
                  </Link>
                  <button type="button" onClick={() => removeFromCart(room.id)} className="rounded-full border border-stone-300 px-4 py-2 text-sm font-semibold text-stone-700">
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
