import React, { useContext } from 'react';
import { RoomContext } from '../Roomcontext/Roomlist';
import { Link } from 'react-router-dom';
import { checkOut_context } from '../Roomcontext/CheckoutContext';

const RoomPage = () => {
  const { setArr_id } = useContext(checkOut_context);
  const Dataset = useContext(RoomContext);

  const handleOnclick = (room) => {
    setArr_id(room);
  };

  return (
    <>
      <div className="h-full w-full overflow-hidden bg-black pt-15 md:pt-30">
        <span className="px-10 text-base font-medium text-amber-300">Our collection</span>
        <p className="px-10 py-10 font-Cormorant text-7xl font-bold text-amber-100">
          Rooms & Suites
        </p>
        <div className="">
          {Dataset.map((item, id) => {
            return (
              <div
                key={id}
                className="mx-10 mb-20 grid-row-3 rounded-sm border-zinc-900 hover:bg-zinc-900 hover:shadow-xl md:flex"
              >
                <div>
                  <img className="h-100 w-full md:mr-20" src={item.images[0]} alt={item.head} />
                </div>
                <div className="flex flex-col md:ml-20 md:flex-row">
                  <div>
                    <div className="py-2 text-justify font-inter text-base text-amber-200/70 md:text-xl">
                      {item.text}
                    </div>
                    <div className="py-2 font-Cormorant text-4xl font-semibold text-white">
                      {item.head}
                    </div>
                    <div className="text-justify font-inter font-light text-stone-400 md:w-150 md:text-xl">
                      {item.story}
                    </div>
                    <div className="py-2 font-inter text-xl font-bold text-gray-200">
                      {item.category}
                    </div>
                  </div>

                  <div className="md:mt-40">
                    <div className="text-gray-600">From</div>
                    <div className="font-inter text-xl font-serif text-stone-50">
                      &#8358;{item.price}
                    </div>
                    <div className="text-gray-600">per night</div>
                    <div className="flex flex-col">
                      <Link
                        to="/checkout"
                        className="my-5 w-full bg-amber-600 px-2 py-1 text-center font-inter text-3xl text-black md:w-40"
                        onClick={() => handleOnclick(item)}
                      >
                        Book now
                      </Link>
                      <Link
                        to="/checkout"
                        className="w-full border border-stone-600 bg-transparent px-3 py-2 text-center font-inter text-2xl text-stone-300 md:w-40"
                        onClick={() => handleOnclick(item)}
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RoomPage