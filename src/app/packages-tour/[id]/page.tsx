'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

import { formatCurrency } from '@/lib/helpers/currency';

import SimpleTourPackageCard from '@/components/common/cards/simple-tour-card';
import ButtonLink from '@/components/common/links/ButtonLink';
import NextImage from '@/components/NextImage';
import CarouselSection from '@/components/sections/package-tour/detail/carosul-section';
import DetailsSection from '@/components/sections/package-tour/detail/detail-section';
import PickUpAreasSection from '@/components/sections/package-tour/detail/pickup-area-section';
import PricingSection from '@/components/sections/package-tour/detail/pricing-section';

import { getImageUrl } from '@/__utils/get-image-helper';
import useDetailPackageTour from '@/_hooks/package-tour/use-detail-package-tour';

const dataCategorie = ['Adventure', 'Relaxation', 'Cultural'];
const DetailPackageTour = () => {
  const { id } = useParams();

  const [currentSlide, setCurrentSlide] = useState(0);

  const {
    data: packageTour,
    isLoading,
    listTourPackages,
  } = useDetailPackageTour(Array.isArray(id) ? id[0] : id);

  const images = packageTour?.images || [];
  const totalSlides = images.length;

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  return (
    <AnimatePresence>
      {isLoading ? (
        <motion.div
          key='skeleton'
          className='animate-pulse px-4 layout '
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
                  src={getImageUrl(
                    `tour-images/${packageTour?.images[0] ?? ''}`
                  )}
                  alt='End Section Background'
                  fill
                  style={{ objectFit: 'cover' }}
                  className='absolute'
                />
              </div>
            </div>
            <div className='relative z-20 -top-[35%] px-0 layout rounded-3xl'>
              <div className='h-[10rem]'></div>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: 'easeOut' }}
                className='px-0'
              >
                <h1 className='sm:text-6xl text-5xl font-bold text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.7)]'>
                  {packageTour?.package_name}
                </h1>
              </motion.div>

              <div className='flex sm:flex-row flex-col gap-12 mt-[2rem]'>
                <div className='sm:w-3/4 w-full flex flex-col '>
                  <CarouselSection
                    images={packageTour?.images ?? []}
                    currentSlide={currentSlide}
                    onPrev={handlePrev}
                    onNext={handleNext}
                    setCurrentSlide={setCurrentSlide}
                  />
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className='flex flex-row gap-4 mt-[2rem]'
                  >
                    {dataCategorie.map((item, index) => (
                      <div
                        key={index}
                        className='badge px-4 py-3 bg-gray-200 border-1 border-gray-500 rounded-full text-sm'
                      >
                        {item}
                      </div>
                    ))}
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className='mt-[2rem]'
                  >
                    <p className='text-gray-600'>{packageTour?.description}</p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className='mt-[2rem] '
                  >
                    <PricingSection
                      packagePrice={packageTour?.package_price ?? 0}
                      childrenPrice={packageTour?.children_price ?? 0}
                      duration={packageTour?.duration ?? 0}
                      maxGroupSize={packageTour?.max_group_size ?? 0}
                    />
                  </motion.div>
                  <PickUpAreasSection
                    pickupAreas={packageTour?.pickup_areas ?? []}
                  />
                  <DetailsSection
                    itineraries={packageTour?.itineraries ?? []}
                    includes={packageTour?.includes ?? []}
                    terms={packageTour?.terms_conditions ?? []} // Sesuaikan jika field terms berbeda
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                  className='sm:w-1/4 w-full space-y-6 sm:block hidden'
                >
                  {/* Harga dan Diskon */}
                  <div className='bg-white rounded-lg shadow-sm p-6 border border-gray-300'>
                    <div className='flex justify-between items-start'>
                      <div>
                        <p className='text-sm text-gray-500'>
                          From{' '}
                          <span className='line-through'>
                            {packageTour?.package_price
                              ? (packageTour.package_price / 0.65).toFixed(2) // Harga asli dihitung dari diskon 35%
                              : 0}
                          </span>
                        </p>
                        <p className='text-4xl font-bold text-gray-900'>
                          {formatCurrency(
                            packageTour?.package_price ?? 0,
                            'USD'
                          )}
                        </p>
                      </div>
                      <div className='bg-red-100 text-red-500 text-xs font-bold px-2 py-1 rounded-full'>
                        -35%
                      </div>
                    </div>

                    <ButtonLink
                      href={`${packageTour?.id}/checkout`}
                      className='w-full bg-primary text-white text-lg font-semibold py-3 rounded-full mt-4 hover:bg-blue-700 transition justify-center'
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

                  {/* Rencana Petualangan */}
                  <div className='bg-white rounded-lg shadow-sm p-6 border border-gray-300'>
                    <h3 className='text-lg font-semibold text-gray-900 '>
                      Plan your adventure:
                    </h3>
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
                Explore More Package Tours
              </h2>
              <div className='h-[2rem]'></div>
              <div className='grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6'>
                {listTourPackages?.map((item, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className=' flex justify-center'
                  >
                    <SimpleTourPackageCard packagetour={item} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <div className='h-[10rem]'></div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className=' space-y-6 sm:hidden sticky  bottom-4 z-20  px-1 '
            >
              {/* Harga dan Diskon */}
              <div className='bg-white rounded-3xl shadow-sm p-4 border border-gray-300'>
                <div className='flex justify-between items-start'>
                  <div>
                    <p className='text-sm text-gray-500'>
                      From{' '}
                      <span className='line-through'>
                        {packageTour?.package_price
                          ? (packageTour.package_price / 0.65).toFixed(2) // Harga asli dihitung dari diskon 35%
                          : 0}
                      </span>
                    </p>
                    <p className='text-2xl font-bold text-gray-900'>
                      {formatCurrency(packageTour?.package_price ?? 0, 'USD')}
                    </p>
                  </div>
                  <div className='bg-red-100 text-red-500 text-xs font-bold px-2 py-1 rounded-full'>
                    -35%
                  </div>
                </div>

                <ButtonLink
                  href={`${packageTour?.id}/checkout`}
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

export default DetailPackageTour;
