'use client';
import React, { useEffect, useState } from 'react';

import ButtonLink from '@/components/common/links/ButtonLink';
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
      <div className='layout navbar'>
        {/* Navbar Start */}
        <div className='navbar-start flex items-center'>
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
                    className={`hover:underline ${
                      isScrolled ? 'text-black' : 'text-neutral-light'
                    }`}
                    href={item.href}
                  >
                    {item.title}
                  </UnstyledLink>
                </li>
              ))}
            </ul>
          </div>
          <UnstyledLink className='bg-' href='/'>
            <div
              className={`rounded-full px-6 py-1 font-extrabold text-xl ${
                isScrolled
                  ? 'bg-transparent text-black border border-white'
                  : 'bg-transparent  text-white  hover:text-white'
              }`}
            >
              <span
                className={`${
                  isScrolled ? 'text-success-600' : 'text-success-400'
                }  `}
              >
                Ride Bali
              </span>{' '}
              Explore
            </div>
          </UnstyledLink>
        </div>

        {/* Navbar Center */}
        <div className='navbar-center hidden lg:flex'>
          <ul className='menu menu-horizontal px-1 gap-4'>
            {navigationData.map((item) => (
              <li key={item.href}>
                <UnstyledLink
                  href={item.href}
                  className={`relative sm:text-lg text-sm font-semibold transition-all ${
                    isScrolled
                      ? 'text-black '
                      : 'text-neutral-light focus:text-neutral-light'
                  }  `}
                >
                  {item.title}
                  <span className='absolute left-0 bottom-0 h-0.5 w-0 bg-black transition-all duration-500 hover:w-full'></span>
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Navbar End */}
        <div className='navbar-end'>
          <ButtonLink
            href='/packages-tour'
            className={`rounded-full ${
              isScrolled
                ? 'bg-black text-white hover:bg-black border border-white active:bg-black'
                : 'bg-transparent backdrop-blur-md text-white hover:bg-black hover:text-white border border-white active:bg-black '
            }`}
          >
            Book Now
          </ButtonLink>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
