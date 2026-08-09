import React from 'react';
import { useEffect, useState} from 'react';
import Heropic from '../assets/hotel image.webp';
import Loading from '../Component/Loading';
import BookingMenu from '../Component/BookingMenu'


import FeaturedComponent from "../Component/FeaturedComponent"
const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
 
  return (
    <>
      {isLoading ?(<Loading />):
      (<div>
        <div
          style={{
            backgroundImage: `url(${Heropic})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '900px',
          }}
          className=" h-full w-full"
        >
          <div className="flex-col pt-30 md:w-130 md:ml-10 ml-5  justify-center items-center">
<p className="text-amber-500 md:text-xl font-semibold pb-20 sm:text-md">Redefining hospitality</p>
<div className="font-Cormorant md:text-7xl text-6xl text-white text-center place-self-center">Where every
 <span className="text-amber-100 italic">moment</span>
 is
a memory.</div>
<h1 className="md:text-xl text-gray-200 md:py-20 md:w-full w-60 text-base py-5">Discover our handpicked collection of extraordinary hotels across the world's most coveted destinations.</h1></div>
{/*----------------------------------------------------------------------------------the booking section-----------------------------------*/}
<BookingMenu />

        </div>

        <section className="bg-stone-100 px-6 py-16 md:px-10 lg:px-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">Our services</p>
              <h2 className="text-3xl font-semibold text-stone-900 sm:text-4xl">Everything you need for a seamless stay</h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {[
                { title: '24 Hours Wi-Fi', text: 'Stay connected anywhere in the hotel.' },
                { title: 'Book Events', text: 'Host meetings, weddings, and celebrations with ease.' },
                { title: 'Swimming Pool', text: 'Relax in our rooftop and outdoor pool spaces.' },
                { title: '24 Hours Light', text: 'Enjoy well-lit rooms and common areas around the clock.' },
              ].map((service) => (
                <div key={service.title} className=" rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-stone-900">{service.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-stone-600">{service.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-6 py-16 md:px-10 lg:px-20">
          <div className="mx-auto max-w-6xl">
            <div className="mb-10 text-center">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-amber-600">Testimonials</p>
              <h2 className="text-3xl font-semibold text-stone-900 sm:text-4xl">Loved by our guests</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-3">
              {[
                {
                  name: 'Amina Yusuf',
                  quote: 'The service was flawless and the room felt like a home away from home.',
                },
                {
                  name: 'Daniel Brooks',
                  quote: 'The pool, Wi-Fi, and 24-hour lighting made our stay incredibly comfortable.',
                },
                {
                  name: 'Nneka Okafor',
                  quote: 'Perfect for a weekend escape and a family celebration. We will definitely return.',
                },
              ].map((testimonial) => (
                <div key={testimonial.name} className="rounded-2xl border border-stone-200 bg-stone-50 p-6 shadow-sm">
                  <p className="text-lg text-stone-700">“{testimonial.quote}”</p>
                  <p className="mt-4 font-semibold text-stone-900">{testimonial.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      
      </div>)}
    </>
  );
};

export default HomePage;