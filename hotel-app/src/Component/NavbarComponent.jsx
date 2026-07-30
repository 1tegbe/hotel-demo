import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';

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
      className={`flex flex-col md:flex-row items-start md:items-center  justify-between px-6 py-4 md:px-10 ${
        scroll ? 'sticky shadow-xl top-0 backdrop-blur-2xl ' : 'absolute inset-x-0 top-0 bg-transparent'
      }`}
    >
      <Link to="/" className="text-2xl font-medium text-white sm:text-black ">
        Élara
      </Link>

      <div className="w-full md:w-auto md:ml-auto">
        <button
          type="button"
          onClick={() => setMenu(!menu)}
          className="ml-auto  block text-2xl text-white md:hidden"
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
            <Link to="/" className="hover:text-gray-600">
              Destinations
            </Link>
          </li>
          <li>
            <Link to="/" className="hover:text-gray-600">
              Experiences
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-600">
              Contact
            </Link>
          </li>
          <li className="bg-amber-300 px-4 py-2 uppercase tracking-[0.15em] text-neutral-900 transition hover:bg-amber-400 md:px-10 md:py-4">
            <Link to="/room">Reserve</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavbarComponent;