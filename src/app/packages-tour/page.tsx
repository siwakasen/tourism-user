'use client';
import { motion } from 'framer-motion';
import React, { useState } from 'react';

import TourPackageCard from '@/components/common/cards/package-tour-card';
import SkeletonCard from '@/components/common/cards/skeleton-card';
import NextImage from '@/components/NextImage';

import {
  PackageTour,
  PaginationI,
} from '@/__interfaces/package_tour.interface';
import { useGetTourPackages } from '@/_hooks/package-tour';

export const data: PackageTour[] = [
  {
    id: '8e83762a-b780-4f4c-8dfb-495cef9640bc',
    package_name: 'Danau Tampligan',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    images: ['/images/bali_1.jpg', '/images/hero2_img.jpg'],
    package_price: 123,
    duration: 0.523,
    max_group_size: 1,
    children_price: 4,
    itineraries: ['asdasdasd', 'asdasd,4a', 'asdasdlkn', 'asdas/d'],
    includes: ['asdasdjnna', 'askjdasnd'],
    pickup_areas: ['Seminyak', 'Kuta', 'Pecatu', 'Ubud', 'Denpasar', 'Airport'],
    terms_conditions: [
      'The tour is private tours and that means there is no other participant',
      'Flexible time arrangement and subject to change based on your request',
      'For the payment you may pay upon start the tour and no deposit needed',
    ],
    status: true,
    created_at: '2024-12-25T08:03:40.711Z',
    updated_at: '2024-12-25T09:10:08.665Z',
    deleted_at: undefined,
  },
  {
    id: '8e83762a-b780-4f4c-8dfb-495cef96422c',
    package_name: 'ANKASD',
    description: 'asdasdsd',
    images: ['/images/hero2_img.jpg', '/images/hero1_img.jpg'],
    package_price: 123,
    duration: 123,
    max_group_size: 1,
    children_price: 4,
    itineraries: ['asdasdasd', 'asdasd,4a', 'asdasdlkn', 'asdas/d'],
    includes: ['asdasdjnna', 'askjdasnd'],
    pickup_areas: ['Seminyak', 'Kuta', 'Pecatu', 'Ubud', 'Denpasar', 'Airport'],
    terms_conditions: [
      'The tour is private tours and that means there is no other participant',
      'Flexible time arrangement and subject to change based on your request',
      'For the payment you may pay upon start the tour and no deposit needed',
    ],
    status: true,
    created_at: '2024-12-25T08:03:40.711Z',
    updated_at: '2024-12-25T09:10:08.665Z',
    deleted_at: undefined,
  },
  {
    id: '8e83762a-b780-4f4c-8dfb-495cef964088',
    package_name: 'ANKASD',
    description: 'asdasdsd',
    images: ['/images/hero3_img.jpg', '/images/hero4_img.jpg'],
    package_price: 123,
    duration: 123,
    max_group_size: 1,
    children_price: 4,
    itineraries: ['asdasdasd', 'asdasd,4a', 'asdasdlkn', 'asdas/d'],
    includes: ['asdasdjnna', 'askjdasnd'],
    pickup_areas: ['Seminyak', 'Kuta', 'Pecatu', 'Ubud', 'Denpasar', 'Airport'],
    terms_conditions: [
      'The tour is private tours and that means there is no other participant',
      'Flexible time arrangement and subject to change based on your request',
      'For the payment you may pay upon start the tour and no deposit needed',
    ],
    status: true,
    created_at: '2024-12-25T08:03:40.711Z',
    updated_at: '2024-12-25T09:10:08.665Z',
    deleted_at: undefined,
  },
];

const ListPackageTour = () => {
  const [paginationParams, setPaginationParams] = useState<PaginationI>({
    limit: 10,
    page: 1,
    search: '',
  });

  const { tourPackages, loading, error } = useGetTourPackages(paginationParams);
  console.log(tourPackages);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    location: '',
    maxPrice: '',
    maxGroupSize: '',
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredData = tourPackages?.data.filter((item) => {
    const matchesLocation =
      !filters.location || item.pickup_areas.includes(filters.location);
    const matchesPrice =
      !filters.maxPrice || item.package_price <= parseInt(filters.maxPrice);
    const matchesGroupSize =
      !filters.maxGroupSize ||
      item.max_group_size <= parseInt(filters.maxGroupSize);
    const matchesSearch =
      !searchTerm ||
      item.package_name.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesLocation && matchesPrice && matchesGroupSize && matchesSearch;
  });

  return (
    <div className='flex flex-col gap-12 bg-neutral-light scroll-smooth h-full'>
      {/* Hero Section */}
      <section className='relative '>
        <motion.div
          className='absolute inset-0 z-0 sm:h-[40vh] h-[30vh]'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <NextImage
            src='/images/bali_1.jpg'
            alt='Hero Section'
            fill
            style={{ objectFit: 'cover' }}
            className='absolute'
          />
          <div className='absolute inset-0 bg-black/30'></div>
        </motion.div>
        <div className='mt-[10vh]'></div>
        <motion.div
          className='relative z-10 h-full layout px-0 flex flex-col justify-start items-start py-6 text-neutral-light gap-6 top-[30%]'
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className='xl:text-5xl sm:text-4xl text-3xl font-bold text-white'>
            Bali our Package
          </h1>
          <p className='text-lg'>Explore the best tour packages in Bali</p>
        </motion.div>
        <div className='relative z-20 -top-[35%] flex sm:flex-row flex-col bg-neutral-light px-0 layout rounded-3xl shadow-xl'>
          {/* Filter Section */}
          <motion.div
            className='sm:w-1/4 w-full flex-col gap-6 px-6 py-6 sm:border-r-2 sm:flex hidden'
            initial={{ x: -300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className='font-semibold text-lg'>Filter</h3>
            <div className='flex flex-col gap-4'>
              <label className='flex flex-col gap-2 '>
                <span className='text-sm font-medium'>Location</span>
                <select
                  className='select select-bordered'
                  onChange={(e) =>
                    handleFilterChange('location', e.target.value)
                  }
                >
                  <option value=''>All Locations</option>
                  <option value='Seminyak'>Seminyak</option>
                  <option value='Kuta'>Kuta</option>
                  <option value='Pecatu'>Pecatu</option>
                  <option value='Ubud'>Ubud</option>
                  <option value='Denpasar'>Denpasar</option>
                  <option value='Airport'>Airport</option>
                </select>
              </label>
              <label className='flex flex-col gap-2'>
                <span className='text-sm font-medium'>Min Price</span>
                <input
                  type='number'
                  className='input input-bordered'
                  placeholder='Enter max price'
                  onChange={(e) =>
                    handleFilterChange('maxPrice', e.target.value)
                  }
                />
              </label>
              <label className='flex flex-col gap-2'>
                <span className='text-sm font-medium'>Max Price</span>
                <input
                  type='number'
                  className='input input-bordered'
                  placeholder='Enter max price'
                  onChange={(e) =>
                    handleFilterChange('maxPrice', e.target.value)
                  }
                />
              </label>
              <label className='flex flex-col gap-2'>
                <span className='text-sm font-medium'>Max Group Size</span>
                <input
                  type='number'
                  className='input input-bordered'
                  placeholder='Enter max group size'
                  onChange={(e) =>
                    handleFilterChange('maxGroupSize', e.target.value)
                  }
                />
              </label>
            </div>
          </motion.div>

          {/* Search and Package List Section */}
          <motion.div
            className='sm:w-3/4 flex flex-col'
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className='h-[5rem] flex justify-start items-center px-6'>
              <div className='relative w-full'>
                <input
                  type='text'
                  className='input input-bordered w-full pl-10'
                  placeholder='Search packages...'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 16 16'
                  fill='currentColor'
                  className='absolute left-3 top-3 h-6 w-6 text-gray-400'
                >
                  <path
                    fillRule='evenodd'
                    d='M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
            </div>
            <motion.div
              className='bg-gray-300 px-6 py-6 grid grid-cols-1 lg:grid-cols-2 lg:gap-12 sm:gap-6 gap-12 justify-items-center rounded-br-3xl sm:rounded-bl-none rounded-bl-3xl'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {loading ? (
                <>
                  <SkeletonCard />
                  <SkeletonCard />
                </>
              ) : (
                filteredData?.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className=' flex justify-center'
                  >
                    <TourPackageCard packagetour={item} />
                  </motion.div>
                ))
              )}
            </motion.div>
          </motion.div>
        </div>
        <div className='h-[10rem]'></div>
      </section>
    </div>
  );
};

export default ListPackageTour;
