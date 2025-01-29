'use client';
import { motion } from 'framer-motion';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import CarCard from '@/components/common/cards/car-card';
import SkeletonCard from '@/components/common/cards/skeleton-card';
import NextImage from '@/components/NextImage';

import { UseListCars } from '@/_hooks/cars/use-list-cars';

const ListCars = () => {
  const { data: carsData, isLoading, setisFetching } = UseListCars();

  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    brand: '',
    minPrice: '',
    maxPrice: '',
    maxPerson: '',
  });

  const handleFilterChange = (key: string, value: string) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredData = carsData?.filter((item) => {
    const matchesBrand =
      !filters.brand || item.brand.brand_name.includes(filters.brand);
    const minPriceMatched =
      !filters.minPrice || item.price >= parseInt(filters.minPrice);
    const matchesPrice =
      !filters.maxPrice || item.price <= parseInt(filters.maxPrice);
    const matchesMaxPerson =
      !filters.maxPerson || item.max_person <= parseInt(filters.maxPerson);
    const matchesSearch =
      !searchTerm ||
      item.car_name.toLowerCase().includes(searchTerm.toLowerCase());

    return (
      matchesBrand &&
      matchesPrice &&
      matchesMaxPerson &&
      matchesSearch &&
      minPriceMatched
    );
  });

  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const triggerElement = document.getElementById('triger_fetching');
    if (!triggerElement) return;
    if (isLoading) return;
    const rect = triggerElement.getBoundingClientRect();
    const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
    const isScrollingDown = window.scrollY > lastScrollY.current;

    if (isInViewport && isScrollingDown && !isLoading) {
      setisFetching(true); // Memicu fetch data baru
    }

    lastScrollY.current = window.scrollY; // Perbarui posisi scroll terakhir
  }, [isLoading, setisFetching]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

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
            Explore Our Cars
          </h1>
          <p className='text-lg'>Find the best cars for your journey</p>
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
                <span className='text-sm font-medium'>Brand</span>
                <select
                  className='select select-bordered'
                  onChange={(e) => handleFilterChange('brand', e.target.value)}
                >
                  <option value=''>All Brands</option>
                  <option value='Toyota'>Toyota</option>
                  <option value='Honda'>Honda</option>
                  <option value='Ford'>Ford</option>
                  <option value='BMW'>BMW</option>
                  <option value='Tesla'>Tesla</option>
                </select>
              </label>
              <label className='flex flex-col gap-2'>
                <span className='text-sm font-medium'>Min Price</span>
                <input
                  type='number'
                  className='input input-bordered'
                  placeholder='Enter min price'
                  onChange={(e) =>
                    handleFilterChange('minPrice', e.target.value)
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
                <span className='text-sm font-medium'>Max Capacity</span>
                <input
                  type='number'
                  className='input input-bordered'
                  placeholder='Enter max capacity'
                  onChange={(e) =>
                    handleFilterChange('maxPerson', e.target.value)
                  }
                />
              </label>
            </div>
          </motion.div>

          {/* Search and Cars List Section */}
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
                  placeholder='Search cars...'
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
              className='bg-gray-300 px-6 py-12 grid grid-cols-1 lg:grid-cols-2 lg:gap-12 h-full sm:gap-6 gap-12 justify-items-center rounded-br-3xl sm:rounded-bl-none rounded-bl-3xl'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              {isLoading && filteredData == null ? (
                <>
                  <SkeletonCard />
                  <SkeletonCard />
                </>
              ) : (
                <>
                  {filteredData?.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                      className=' flex justify-center '
                    >
                      <CarCard car={item} />
                    </motion.div>
                  ))}
                  {isLoading && filteredData != null ? (
                    <>
                      {filteredData.length % 2 === 0 ? (
                        <></>
                      ) : (
                        <>
                          <SkeletonCard />
                        </>
                      )}
                    </>
                  ) : null}
                </>
              )}
            </motion.div>
            <div className='w-full h-[1px]' id='triger_fetching'></div>
          </motion.div>
        </div>
        <div className='h-[10rem]'></div>
      </section>
    </div>
  );
};

export default ListCars;
