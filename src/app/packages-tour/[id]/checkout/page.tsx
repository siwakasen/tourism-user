'use client';

import { motion, useInView } from 'framer-motion';
import { useParams } from 'next/navigation';
import React, { useRef, useState } from 'react';

import { formatCurrency } from '@/lib/helpers/currency';

import Button from '@/components/common/buttons/Button';
import NumberInput from '@/components/common/inputs/number-input';
import CheckoutModal from '@/components/common/modals/cehckout-modal';
import NextImage from '@/components/NextImage';
import TravelerDetailsSection from '@/components/sections/package-tour/checkout/add-details-secitions';
import TravelerTourDateSection from '@/components/sections/package-tour/checkout/tour-date-section';

import { data } from '@/app/packages-tour/page';

const CheckoutPage = () => {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const packageTour = data.find((item) => item.id === id);

  const handleAdultsChange = (value: number) => {
    value;
    //
  };

  const handleChildrenChange = (value: number) => {
    value;
    //
  };

  // Refs for Animations
  const refDetails = useRef(null);
  const isDetailsInView = useInView(refDetails, { once: true });

  const refMyTrip = useRef(null);
  const isMyTripInView = useInView(refMyTrip, { once: true });

  const refPriceBreakdown = useRef(null);
  const isPriceBreakdownInView = useInView(refPriceBreakdown, { once: true });

  return (
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
            src={packageTour?.images[0] ?? ''}
            alt='End Section Background'
            fill
            style={{ objectFit: 'cover' }}
            className='absolute'
          />
        </div>
      </div>

      <div className='relative z-10 h-full layout px-0 flex flex-col justify-start items-start py-6 text-neutral-light gap-6 top-[10vh]'>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className='xl:text-5xl sm:text-4xl text-3xl font-bold text-white drop-shadow-[2px_2px_4px_rgba(0,0,0,0.7)]'
        >
          Booking Detail
        </motion.h1>
      </div>

      <div className='relative z-20 flex sm:flex-row flex-col layout px-0 gap-12 mt-[2rem] top-[8vh]'>
        {/* Main Content Section */}
        <motion.div
          ref={refDetails}
          initial={{ opacity: 0, x: -50 }}
          animate={isDetailsInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className='sm:w-3/4 w-full flex flex-col'
        >
          <div className='bg-white rounded-lg shadow-sm p-6 border border-gray-300 flex flex-col gap-6'>
            <div className='flex gap-6 items-center'>
              <div className='bg-neutral-600 py-1 px-3 rounded-xl text-white font-bold text-lg'>
                1
              </div>
              <h3>How Many Are Traveling</h3>
            </div>
            <div className='flex justify-between items-center'>
              <p className='text-lg font-bold'>Adults</p>
              <NumberInput
                min={1}
                defaultValue={1}
                onChange={handleAdultsChange}
              />
            </div>
            <div className='flex justify-between items-center'>
              <p className='text-lg font-bold'>Children</p>
              <NumberInput
                min={0}
                defaultValue={1}
                onChange={handleChildrenChange}
              />
            </div>
          </div>
          <TravelerTourDateSection />
          <TravelerDetailsSection />
        </motion.div>

        {/* Sidebar Section */}
        <motion.div
          ref={refMyTrip}
          initial={{ opacity: 0, x: 50 }}
          animate={isMyTripInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className='w-full md:w-1/3 bg-white rounded-lg shadow-sm p-6 border border-gray-300 space-y-6 h-fit'
        >
          {/* My Trip Section */}
          <div>
            <h3 className='text-lg font-bold text-gray-900 mb-4'>My Trip</h3>
            <p className='text-sm font-medium text-gray-900'>
              {packageTour?.package_name}
            </p>
            <p className='text-sm text-gray-500'>
              {packageTour?.duration} days
            </p>
            <div className='mt-4'>
              <p className='text-sm font-medium text-gray-900'>
                Starts in London, England
              </p>
              <p className='text-sm text-gray-500'>Sunday, 23 Mar 2025</p>
            </div>
            <div className='mt-4'>
              <p className='text-sm font-medium text-gray-900'>
                Ends in London, England
              </p>
              <p className='text-sm text-gray-500'>Saturday, 29 Mar 2025</p>
            </div>
          </div>

          {/* Price Breakdown Section */}
          <motion.div
            ref={refPriceBreakdown}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isPriceBreakdownInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            <h3 className='text-lg font-bold text-gray-900 mb-4'>
              Price Breakdown
            </h3>
            <div className='flex justify-between items-center mb-2'>
              <p className='text-sm text-gray-900'>
                1 Traveler x{' '}
                {formatCurrency(packageTour?.package_price ?? 0, 'USD')}
              </p>
            </div>
            <div className='flex justify-between items-center mb-2 text-green-600'>
              <p className='text-sm'>Mega Sale Deal</p>
              <p className='text-sm'>- $525.00</p>
            </div>
            <hr className='my-4 border-gray-300' />
            <div className='flex justify-between items-center mb-4'>
              <p className='text-sm font-medium text-gray-900'>Total due</p>
              <p className='text-xl font-bold text-gray-900'>US$1,545.00</p>
            </div>
          </motion.div>

          <Button
            onClick={() => setIsModalOpen(true)}
            className='w-full bg-primary text-white text-lg font-semibold py-3 rounded-full mt-4 hover:bg-blue-700 transition justify-center'
          >
            Next Booking
          </Button>
        </motion.div>
      </div>
      <div className='h-[10rem]'></div>
      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        packageName={packageTour?.package_name || ''}
        phoneNumber='1234567890'
        email='example@example.com'
        date='2025-03-23'
        totalAdult={2}
        totalChild={1}
      />
    </div>
  );
};

export default CheckoutPage;
