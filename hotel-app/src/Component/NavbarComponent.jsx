import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';
import Logo from "../assets/Screenshot_2026-08-06_224501-removebg-preview.png";
const NavbarComponent = () => {
  const [scroll, setScroll] = useState(false);
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 flex flex-col items-start justify-between px-6 py-4 shadow-xl backdrop-blur-2xl md:flex-row md:items-center md:px-10 
      `}
    >
      <Link to="/" className="text-2xl font-medium text-white sm:text-black ">
        <img src={Logo} alt="" className="bg-transparent w-40" />
      </Link>

      <div className="w-full md:w-auto md:ml-auto">
        <button
          type="button"
          onClick={() => setMenu(!menu)}
          className="ml-auto  block text-2xl text-black md:hidden"
          aria-label="Toggle navigation"
        >
          {menu ? <IoCloseOutline /> : <IoMenuOutline />}
        </button>

        <ul
          className={`mt-4 flex flex-col gap-3 text-lg font-medium text-gray-900 md:mt-0 md:flex md:flex-row md:items-center md:gap-5 md:text-xl ${
            menu ? 'flex bg-white relative text-center ' : 'hidden'
          } md:flex`}
        >
          <li>
            <Link to="/gallery" className="hover:text-gray-600 ">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-600">
              Contact Us
            </Link>
          </li>
            <li>
            <Link to="/contact" className="hover:text-gray-600">
              Service
            </Link>
          </li>
                 <li>
            <Link to="/contact" className="hover:text-gray-600">
              Cart
            </Link>
          </li>
          <li className="bg-amber-300 px-4 py-2 uppercase tracking-[0.15em] text-neutral-900 transition hover:bg-amber-400 md:px-10 md:py-4">
            <Link to="/">Book an Event</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;