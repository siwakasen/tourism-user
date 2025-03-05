'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import React from 'react';

import { formatCurrency } from '@/lib/helpers/currency';

import SimpleCarCard from '@/components/common/cards/simple-car-card';
import ButtonLink from '@/components/common/links/ButtonLink';
import NextImage from '@/components/NextImage';
import DetailCarSection from '@/components/sections/cars/detail-car-section';
import SingleImageSection from '@/components/sections/cars/singgle-car-section';

import { getImageUrl } from '@/__utils/get-image-helper';
import UseDetailCar from '@/_hooks/cars/use-detail-cars';

const DetailCar = () => {
  const { id } = useParams();

  const {
    data: car,
    isLoading,
    listCars,
  } = UseDetailCar(Array.isArray(id) ? id[0] : id);

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          key='skeleton'
          className='animate-pulse layout '
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Skeleton Loader Section */}

          <div className='h-[5rem]'></div>
          <div className='h-[800px] w-full bg-gray-300 rounded-lg mb-6'></div>
          <div className='h-8 w-2/3 bg-gray-300 rounded mb-4'></div>
          <div className='h-6 w-1/2 bg-gray-300 rounded mb-6'></div>
          <div className='grid grid-cols-2 gap-4'>
            <div className='h-[150px] bg-gray-300 rounded'></div>
            <div className='h-[150px] bg-gray-300 rounded'></div>
          </div>
          <div className='mt-6 h-6 w-1/4 bg-gray-300 rounded mb-2'></div>
          <div className='h-6 w-3/4 bg-gray-300 rounded'></div>
        </motion.div>
      ) : (
        <motion.div
          key='content'
          className='layout'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <div
              className='absolute inset-0 z-0'
              style={{
                WebkitMaskImage:
                  'linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))',
                maskImage:
                  'linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))',
                WebkitMaskSize: '100% 100%',
                maskSize: '100% 70%',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
              }}
            >
              <div className='relative w-full h-full overflow-hidden'>
                <NextImage
                  src={getImageUrl(`car-images/${car?.car_image ?? ''}`)}
                  alt='Car Detail Background'
                  fill
                  style={{ objectFit: 'cover' }}
                  className='absolute'
                />
              </div>
            </div>
            <div className='relative z-20 -top-[35%] px-0  rounded-3xl'>
              <div className='h-[10rem]'></div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                x
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className='px-0'
              >
                <h1 className='sm:text-6xl text-5xl font-bold text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.7)]'>
                  {car?.car_name}
                </h1>
              </motion.div>

              <div className='flex sm:flex-row flex-col gap-12 mt-[2rem]'>
                <div className='sm:w-3/4 w-full flex flex-col '>
                  <SingleImageSection image={car?.car_image ?? ''} />
                  <div className='mt-8 flex flex-wrap gap-2'>
                    <span
                      key={1}
                      className='bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded'
                    >
                      {car?.brand.brand_name ?? ''}
                    </span>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className='mt-[2rem]'
                  >
                    <p className='text-gray-600'>{car?.description}</p>
                  </motion.div>
                  <DetailCarSection
                    includes={car?.includes ?? []}
                    features={car?.brand?.brand_name ?? ''}
                    capacity={{
                      min: car?.min_person ?? 0,
                      max: car?.max_person ?? 0,
                    }}
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className='sm:w-1/4 w-full space-y-6 sm:block hidden'
                >
                  <div className='bg-white rounded-lg shadow-sm p-6 border border-gray-300'>
                    <div className='flex justify-between items-start'>
                      <div>
                        <p className='text-sm text-gray-500'>
                          From{' '}
                          <span className='line-through'>
                            {car?.price
                              ? (car?.price / 0.65).toFixed(2) // Harga asli dihitung dari diskon 35%
                              : 0}
                          </span>
                        </p>
                        <p className='text-2xl font-bold text-gray-900'>
                          {formatCurrency(car?.price ?? 0, 'USD')}
                        </p>
                      </div>
                      <div className='bg-red-100 text-red-500 text-xs font-bold px-2 py-1 rounded-full'>
                        -35%
                      </div>
                    </div>

                    <ButtonLink
                      href={`${car?.id}/checkout`}
                      className='w-full bg-primary text-white text-lg font-semibold py-3 rounded-full mt-4 hover:bg-blue-700 transition justify-center'
                    >
                      Rent Now
                    </ButtonLink>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className='h-[5rem]'></div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className='px-0 layout'
            >
              <h2 className='text-2xl font-bold text-black'>
                Explore More Cars
              </h2>
              <div className='h-[2rem]'></div>
              <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
                {listCars?.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className=' flex justify-center'
                  >
                    <SimpleCarCard car={item} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <div className='h-[10rem]'></div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className=' space-y-6 px-0 sm:hidden sticky bottom-4 z-20 layout w-full'
            >
              {/* Harga dan Diskon */}
              <div className='bg-white rounded-3xl shadow-sm p-4 border border-gray-300'>
                <div className='flex justify-between items-start'>
                  <div>
                    <p className='text-sm text-gray-500'>
                      From{' '}
                      <span className='line-through'>
                        {car?.price
                          ? (car.price / 0.65).toFixed(2) // Harga asli dihitung dari diskon 35%
                          : 0}
                      </span>
                    </p>
                    <p className='text-2xl font-bold text-gray-900'>
                      {formatCurrency(car?.price ?? 0, 'USD')}
                    </p>
                  </div>
                  <div className='bg-red-100 text-red-500 text-xs font-bold px-2 py-1 rounded-full'>
                    -35%
                  </div>
                </div>

                <ButtonLink
                  href={`${car?.id}/checkout`}
                  className='w-full bg-primary text-white text-lg font-semibold py-1 rounded-full mt-4 hover:bg-blue-700 transition justify-center '
                >
                  Books Now
                </ButtonLink>
                <p className='text-sm text-gray-500 mt-4 flex items-center gap-2'>
                  <i className='fas fa-info-circle'></i>
                  Price based on per person
                  <a href='#' className='text-blue-600 underline'>
                    departure 2025
                  </a>
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DetailCar;
