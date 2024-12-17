'use client';
import React from 'react';

import ButtonLink from '@/components/common/links/ButtonLink';
import UnstyledLink from '@/components/common/links/UnstyledLink';

export interface NavigationDataI {
  title: string;
  href: string;
}

const navigationData: NavigationDataI[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'Packages Tour',
    href: '/packages-tour',
  },
  {
    title: 'Contact Us',
    href: '/contact-us',
  },
];

const NavBar = () => {
  return (
    <>
      <nav className='fixed z-50 w-full'>
        <div className='layout navbar bg-transparent'>
          <div className='navbar-start'>
            <div className='dropdown'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost lg:hidden'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5 text-neutral-light'
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
                className='menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-neutral-light'
              >
                {navigationData.map((item) => (
                  <li className='' key={item.href}>
                    <UnstyledLink className='text-xl' href={item.href}>
                      {item.title}
                    </UnstyledLink>
                  </li>
                ))}
              </ul>
            </div>
            <UnstyledLink href='/'>
              <div className='btn btn-ghost text-xl text-neutral-light'>
                TourWeb
              </div>
            </UnstyledLink>
          </div>
          <div className='navbar-center hidden lg:flex'>
            <ul className='menu menu-horizontal px-1 text-neutral-light'>
              {navigationData.map((item) => (
                <li key={item.href}>
                  <UnstyledLink href={item.href}>
                    <div>{item.title}</div>
                  </UnstyledLink>
                </li>
              ))}
            </ul>
          </div>
          <div className='navbar-end'>
            <ButtonLink href='/package-tour'>
              <div className=' '>Book Now</div>
            </ButtonLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
