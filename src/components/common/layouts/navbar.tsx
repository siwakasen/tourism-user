'use client';
import React, { useEffect, useState } from 'react';
import { IoLogoWhatsapp } from 'react-icons/io';

import UnstyledLink from '@/components/common/links/UnstyledLink';
export interface NavigationDataI {
  title: string;
  href: string;
}

const navigationData: NavigationDataI[] = [
  { title: 'Home', href: '/' },
  { title: 'Packages Tour', href: '/packages-tour' },
  { title: 'Cars Rental', href: '/cars' },
  { title: 'Contact Us', href: '/contact-us' },
];

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed z-50 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-gradient-to-b from-black/50 to-transparent'
      }`}
    >
      <div className='layout navbar flex items-center relative'>
        {/* Navbar Start - Expands Fully */}
        <div className='navbar-start flex items-center flex-1'>
          <div className='dropdown'>
            <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className={`h-5 w-5 ${
                  isScrolled ? 'text-black' : 'text-neutral-light'
                }`}
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h8m-8 6h16'
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ${
                isScrolled ? 'text-black' : 'text-neutral-light'
              }`}
            >
              {navigationData.map((item) => (
                <li key={item.href}>
                  <UnstyledLink
                    className='hover:underline text-black'
                    href={item.href}
                  >
                    {item.title}
                  </UnstyledLink>
                </li>
              ))}
            </ul>
          </div>
          <UnstyledLink href='/'>
            <div
              className={`rounded-full ps-6 pe-1 py-1 font-extrabold text-xl ${
                isScrolled
                  ? 'bg-transparent text-black border border-white'
                  : 'bg-transparent text-white hover:text-white'
              }`}
            >
              <span
                className={`${
                  isScrolled ? 'text-success-600' : 'text-success-400'
                }`}
              >
                Ride Bali
              </span>{' '}
              Explore
            </div>
          </UnstyledLink>
        </div>

        {/* Navbar Center - Stays in the Middle */}
        <div className='navbar-center absolute  hidden lg:flex w-full justify-center'>
          <ul className='menu menu-horizontal px-1 gap-4'>
            {navigationData.map((item) => (
              <li key={item.href}>
                <UnstyledLink
                  href={item.href}
                  className={`relative sm:text-lg text-sm font-semibold transition-all ${
                    isScrolled
                      ? 'text-black'
                      : 'text-neutral-light focus:text-neutral-light'
                  }`}
                >
                  {item.title}
                  <span className='absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-500 hover:w-full'></span>
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar End - Stays Compact */}
        <div className='navbar-end flex-shrink-0 gap-2 items-center'>
          <UnstyledLink href='https://wa.me/6281990104720'>
            <button
              className={`sm:flex hidden  items-center gap-2 py-[4px] px-2 rounded transition-transform duration-300 transform hover:scale-105 ${
                isScrolled ? 'bg-white text-black' : 'bg-green-500 text-white'
              }`}
            >
              <IoLogoWhatsapp size={24} />
              <h4 className='font-semibold'>+6281990104720</h4>
            </button>
          </UnstyledLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
