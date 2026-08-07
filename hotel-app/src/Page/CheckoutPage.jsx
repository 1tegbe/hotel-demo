import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { checkOut_context } from '../Roomcontext/CheckoutContext';

const CheckoutPage = () => {
  const { arr_id } = useContext(checkOut_context);
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
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
        {/* to get the contact from the user*/}
      <div className=" flex flex-col">
        <input type="text" placeholder="Enter Your Name" className="focus:border-2 focus:border-black text-base md:text-xl font-inter border-b border-gray-900" required/>
        <input type="email" placeholder="Enter Your Email" className="focus:border-2 focus:border-black md:text-xl text-base font-inter border-b border-gray-900" required/>
        <input type="number" placeholder="000-0000-0000" className="focus:border-2 focus:border-black md:text-xl font-inter border-b border-gray-900 text-base" required/>
      </div>
        <button className="bg-black text-white w-full p-5">CheckOut</button>
      </div>
    </div>
  );
};

export default CheckoutPage