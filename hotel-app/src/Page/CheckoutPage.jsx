import React, { useEffect, useState, useContext } from 'react';
import { checkOut_context } from '../Roomcontext/CheckoutContext';
import { CheckoutData } from '../Roomcontext/checkoutpageContext';
import PaystackPop from '@paystack/inline-js';

const CheckoutPage = () => {
  const { arr_id } = useContext(checkOut_context);
  const { email, setEmail, Name, setName, number, setNumber } = useContext(CheckoutData);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleSubmit = () => {
    if (!arr_id) {
      alert('Please select a room first.');
      return;
    }

    if (!email || !Name || !number) {
      alert('Please fill in all required fields');
      return;
    }

    const publicKey = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY;

    if (!publicKey) {
      alert('Paystack public key is missing. Add VITE_PAYSTACK_PUBLIC_KEY to your environment file.');
      return;
    }

    const paystack = new PaystackPop();
    paystack.newTransaction({
      key: publicKey,
      email,
      amount: Number(arr_id?.price || 0) * 100,
      name: Name,
      onSuccess: (transaction) => {
        console.log('Payment complete! Reference: ', transaction.reference);
        alert(`Payment successful. Reference: ${transaction.reference}`);
      },
      onCancel: () => {
        console.log('Payment window closed.');
      }
    });
  };

  useEffect(() => {
    if (!arr_id?.images?.length) return;

    const interval = setInterval(() => {
      setActiveImageIndex((prev) => (prev + 1) % arr_id.images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [arr_id]);

  if (!arr_id) {
    return (
      <div className="p-10 text-center text-xl text-black">
        No room selected yet.
      </div>
    );
  }

  const images = arr_id.images || [];

  return (
    <div className="p-10">
      <div className="text-center text-2xl font-medium text-black">Checkout</div>

      <div className="mt-8 rounded-lg border border-stone-300 bg-white p-6 shadow-sm">
        <div className="relative overflow-hidden rounded-lg">
          {images.length > 0 ? (
            <>
              <img
                src={images[activeImageIndex]}
                alt={`${arr_id.head} ${activeImageIndex + 1}`}
                className="h-80 w-full object-cover"
              />

              {images.length > 1 && (
                <>
                  <div className="absolute inset-x-0 bottom-3 flex justify-center gap-2">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        type="button"
                        onClick={() => setActiveImageIndex(index)}
                        className={`h-2.5 w-2.5 rounded-full ${
                          index === activeImageIndex ? 'bg-white' : 'bg-white/60'
                        }`}
                        aria-label={`Show image ${index + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      setActiveImageIndex((prev) =>
                        prev === 0 ? images.length - 1 : prev - 1
                      )
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-sm text-white"
                  >
                    ←
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setActiveImageIndex((prev) => (prev + 1) % images.length)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/50 px-3 py-2 text-sm text-white"
                  >
                    →
                  </button>
                </>
              )}
            </>
          ) : (
            <div className="flex h-80 items-center justify-center rounded-lg bg-stone-100 text-stone-500">
              No images available
            </div>
          )}
        </div>

        <h2 className="mt-4 text-3xl font-semibold text-stone-800">{arr_id.head}</h2>
        <p className="mt-2 text-lg text-stone-600">{arr_id.category}</p>
        <p className="mt-4 text-stone-700 md:text-xl text-base font-medium">{arr_id.story}</p>
        <p className="mt-4 text-xl font-bold text-amber-600">₦{arr_id.price}</p>

        <div className="mt-6 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Enter Your Name"
            value={Name}
            onChange={(e) => setName(e.target.value)}
            className="border-b border-gray-900 pb-2 text-base font-inter focus:border-2 focus:border-black md:text-xl"
            required
          />
          <input
            type="email"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border-b border-gray-900 pb-2 text-base font-inter focus:border-2 focus:border-black md:text-xl"
            required
          />
          <input
            type="number"
            placeholder="000-0000-0000"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            className="border-b border-gray-900 pb-2 text-base font-inter focus:border-2 focus:border-black md:text-xl"
            required
          />
        </div>

        <button className="mt-6 w-full bg-black p-5 text-white" onClick={handleSubmit}>
          CheckOut
        </button>
      </div>
    </div>
  );
};

export default CheckoutPage