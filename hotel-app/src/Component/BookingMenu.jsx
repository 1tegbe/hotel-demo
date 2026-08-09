import { React, useContext, useState } from 'react';
import { DateContext } from '../Context/DateContext';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';

const BookingMenu = () => {
  const { checkIn, setCheckIn, checkOut, setCheckOut, guest, setGuest } = useContext(DateContext);
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [selected, setSelected] = useState('');

  const dataCategorys = [
    { id: 1, category: 'Standard' },
    { id: 2, category: 'Premium' },
    { id: 3, category: 'Exclusive' },
  ];

  const handleCheckIn = (event) => {
    event.preventDefault();
    const nextCheckIn = event.target.value;
    setCheckIn(nextCheckIn);

    if (checkOut && new Date(checkOut) < new Date(nextCheckIn)) {
      setCheckOut('');
    }
  };

  const handleCheckOut = (e) => {
    e.preventDefault();
    setCheckOut(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!selected || !checkOut || !checkIn) {
      alert('All fields required');
      return;
    }
    navigate('/room');
  };

  const handleguest_sub = () => {
    setGuest((prev) => Math.max(1, prev - 1));
  };

  return (
    <div className="px-4 pb-10 pt-6 md:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-4xl border border-white/40 bg-white/95 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur md:p-6">
        <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">
              Plan your stay
            </p>
            <h3 className="text-2xl font-semibold text-stone-900">
              Reserve your perfect room in minutes
            </h3>
          </div>
          <p className="text-sm text-stone-600">
            Flexible dates, premium rooms, and a smooth check-in experience.
          </p>
        </div>

        <div className="flex flex-col gap-3 lg:flex-row lg:items-end">
          <div className="grid flex-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
            <label className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <span className="mb-2 block text-sm font-semibold text-stone-700">Check in</span>
              <input
                type="date"
                name="check_in"
                required
                value={checkIn}
                onChange={handleCheckIn}
                className="w-full rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm text-stone-900 outline-none focus:border-amber-500"
              />
            </label>

            <label className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <span className="mb-2 block text-sm font-semibold text-stone-700">Check out</span>
              <input
                type="date"
                name="check_out"
                className="w-full rounded-lg border border-stone-200 bg-white px-3 py-2 text-sm text-stone-900 outline-none focus:border-amber-500"
                min={checkIn}
                disabled={!checkIn}
                required
                value={checkOut}
                onChange={handleCheckOut}
              />
            </label>

            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <span className="mb-2 block text-sm font-semibold text-stone-700">Guests</span>
              <div className="flex items-center justify-between rounded-lg border border-stone-200 bg-white px-3 py-2">
                <button
                  type="button"
                  className="rounded-full bg-stone-100 px-2.5 py-1 text-lg font-semibold text-stone-800"
                  onClick={handleguest_sub}
                >
                  -
                </button>
                <span className="px-3 text-lg font-semibold text-stone-900">{guest}</span>
                <button
                  type="button"
                  className="rounded-full bg-stone-100 px-2.5 py-1 text-lg font-semibold text-stone-800"
                  onClick={() => setGuest((prev) => prev + 1)}
                >
                  +
                </button>
              </div>
            </div>

            <div className="relative rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <span className="mb-2 block text-sm font-semibold text-stone-700">Room category</span>
              <button
                type="button"
                onClick={() => setShow((prev) => !prev)}
                className="flex w-full items-center justify-between rounded-lg border border-stone-200 bg-white px-3 py-2 text-left text-sm text-stone-900"
              >
                <span>{selected || 'Select your category'}</span>
                <span className="text-stone-600">
                  {show ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </button>

              {show && (
                <div className="absolute left-4 right-4 top-full z-20 mt-2 rounded-xl border border-stone-200 bg-white p-2 shadow-lg">
                  {dataCategorys.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        setSelected(item.category);
                        setShow(false);
                      }}
                      className="cursor-pointer rounded-lg px-3 py-2 text-sm text-stone-700 hover:bg-amber-50 hover:text-amber-700"
                    >
                      {item.category}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="rounded-2xl bg-amber-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-amber-700 lg:min-w-55"
          >
            Check availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingMenu