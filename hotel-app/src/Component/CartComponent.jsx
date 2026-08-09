import React from 'react';

const CartComponent = ({ cartItems, onRemove }) => {
  if (!cartItems.length) {
    return null;
  }

  return (
    <div className="mx-10 mb-8 rounded-2xl border border-stone-700 bg-zinc-900/90 p-5 text-white shadow-xl">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-xl font-semibold">Your Cart</h3>
          <p className="text-sm text-stone-400">
            {cartItems.length} room{cartItems.length > 1 ? 's' : ''} selected
          </p>
        </div>
      </div>

      <div className="mt-4 space-y-3">
        {cartItems.map((room) => (
          <div
            key={room.id}
            className="flex items-center justify-between rounded-lg border border-stone-700 bg-black/30 px-4 py-3"
          >
            <div>
              <p className="font-medium text-amber-100">{room.head}</p>
              <p className="text-sm text-stone-400">
                {room.category} • ₦{room.price}
              </p>
            </div>
            <button
              type="button"
              onClick={() => onRemove(room.id)}
              className="rounded-md border border-amber-500 px-3 py-1.5 text-sm font-medium text-amber-300 transition hover:bg-amber-500 hover:text-black"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartComponent;
