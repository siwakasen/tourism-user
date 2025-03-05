'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import React, { useRef, useState } from 'react';
import Select from 'react-select';

import { formatCurrency } from '@/lib/helpers/currency';

import { countryList } from '@/data/country-data';

import Button from '@/components/common/buttons/Button';
import NumberInput from '@/components/common/inputs/number-input';
import CheckoutModal from '@/components/common/modals/cehckout-modal';
import ConfirmationModal from '@/components/common/modals/confirmation-whatsapp-modal';
import NextImage from '@/components/NextImage';

import { getImageUrl } from '@/__utils/get-image-helper';
import UseCheckoutPackageTour from '@/_hooks/package-tour/use-checkout-package-tour';

const CheckoutPage = () => {
  const { id } = useParams();

  const [selectedPickupArea, setSelectedPickupArea] = useState<
    { value: string; label: string } | undefined
  >(undefined);
  const [selectedCountry, setSelectedCountry] = useState<
    { value: string; label: string } | undefined
  >(undefined);

  const discountPercentage = 35; // Diskon dalam persen

  const {
    data: packageTour,
    isLoading,
    register,
    errors,
    formData,
    handleCheckout,
    handleNext,
    setValue,
    isModalOpen,
    setIsModalOpen,
    isModalOpen2,
    setIsModalOpen2,
    handleSendMessageWa,
    setTotalPrice,
    totalPrice,
    maxAdult,
    maxChildren,
    setMaxAdult,
    setMaxChildren,
    maxGroupSize,
  } = UseCheckoutPackageTour(Array.isArray(id) ? id[0] : id);
  // Refs for Animations
  const refDetails = useRef(null);

  const refMyTrip = useRef(null);

  const refPriceBreakdown = useRef(null);

  const calculateTotalPrice = (): number => {
    return (
      formData('adult_count') * (packageTour?.package_price ?? 0) +
      formData('children_count') * (packageTour?.children_price ?? 0)
    );
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

          <div className='h-[8rem]'></div>
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

            <form className='relative z-20 flex sm:flex-row flex-col layout px-0 gap-12 mt-[2rem] top-[8vh] '>
              {/* Main Content Section */}
              <motion.div
                ref={refDetails}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
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
                      max={maxAdult}
                      defaultValue={1}
                      setValue={setValue}
                      name='adult_count'
                      error={errors.adult_count}
                      onChange={() => {
                        setMaxAdult(maxGroupSize - formData('children_count'));
                        setMaxChildren(maxGroupSize - formData('adult_count'));
                        setTotalPrice(calculateTotalPrice());
                      }}
                    />
                  </div>
                  <div className='flex justify-between items-center'>
                    <p className='text-lg font-bold'>Children</p>
                    <NumberInput
                      min={0}
                      max={maxChildren}
                      defaultValue={0}
                      setValue={setValue}
                      name='children_count'
                      error={errors.children_count}
                      onChange={() => {
                        setMaxChildren(maxGroupSize - formData('adult_count'));
                        setMaxAdult(maxGroupSize - formData('children_count'));
                        setTotalPrice(calculateTotalPrice());
                      }}
                    />
                  </div>
                </div>
                <section className='bg-white rounded-lg shadow-sm p-6 border border-gray-300 flex flex-col gap-6 mt-8'>
                  <div className='flex gap-6 items-center'>
                    <div className='bg-neutral-600 py-1 px-3 rounded-xl text-white font-bold text-lg'>
                      2
                    </div>
                    <h3 className='text-lg font-bold'>Enter Your Tour Date</h3>
                  </div>

                  {/* Tour Date */}
                  <div className='flex flex-row gap-6 '>
                    {/* Start Date */}
                    <div className='flex-grow'>
                      <label className='font-bold' htmlFor='start_date'>
                        Start
                      </label>
                      <input
                        id='start_date'
                        type='date'
                        className='border border-gray-300 rounded-md p-2 w-full'
                        {...register('start_date', {
                          required: 'Start date is required',
                          validate: (value) => {
                            const today = new Date()
                              .toISOString()
                              .split('T')[0];
                            return (
                              value >= today ||
                              'Start date cannot be in the past'
                            );
                          },
                        })}
                        min={new Date().toISOString().split('T')[0]} // Minimum date adalah hari ini
                      />
                    </div>

                    {/* End Date */}
                    <div className='flex-grow'>
                      <label className='font-bold' htmlFor='end_date'>
                        End
                      </label>
                      <input
                        id='end_date'
                        type='date'
                        className='border border-gray-300 rounded-md p-2 w-full bg-gray-100 cursor-not-allowed'
                        {...register('end_date', {
                          required: 'End date is required',
                        })}
                        readOnly // Input hanya bisa diubah oleh sistem
                      />
                    </div>
                  </div>
                  <div className='w-1/2'>
                    <label className='font-bold' htmlFor='pickupTime'>
                      Pick Up Time
                    </label>
                    <input
                      id='pickupTime'
                      type='time' // Ubah ke time untuk pemilihan jam
                      className={`border border-gray-300 rounded-md p-2 w-full ${
                        errors.pickup_time ? 'border-red-500' : ''
                      }`}
                      {...register('pickup_time', {
                        required: 'Pick up time is required',
                        validate: (value) => {
                          const [hours, minutes] = value.split(':').map(Number);
                          return (
                            (hours >= 0 &&
                              hours <= 23 &&
                              minutes >= 0 &&
                              minutes <= 59) ||
                            'Invalid time format'
                          );
                        },
                      })}
                    />
                    {errors.pickup_time && (
                      <p className='text-red-500 text-sm mt-1'>
                        {errors.pickup_time.message}
                      </p>
                    )}
                  </div>
                </section>

                <section className='bg-white rounded-lg shadow-sm p-6 border border-gray-300 flex flex-col gap-6 mt-8'>
                  <div className='flex gap-6 items-center'>
                    <div className='bg-neutral-600 py-1 px-3 rounded-xl text-white font-bold text-lg'>
                      3
                    </div>
                    <h3 className='text-lg font-bold'>
                      Enter Your Traveler Information
                    </h3>
                  </div>

                  {/* Title */}
                  <div>
                    <label className='font-bold'>Title*</label>
                    <div className='flex gap-4 mt-2'>
                      {['Mr.', 'Ms.', 'Mrs.', 'Miss'].map((option) => (
                        <label key={option} className='flex items-center gap-2'>
                          <input
                            type='radio'
                            value={option}
                            {...register('title', {
                              required: 'Title is required',
                            })}
                            className='form-radio'
                          />
                          {option}
                        </label>
                      ))}
                    </div>
                    {errors.title && (
                      <p className='text-red-500 text-sm'>
                        {errors.title.message}
                      </p>
                    )}
                  </div>

                  {/* First Name */}
                  <div>
                    <label className='font-bold' htmlFor='fulleName'>
                      FullName*
                    </label>
                    <input
                      id='fullName'
                      type='text'
                      placeholder='Enter your first name'
                      className='border border-gray-300 rounded-md p-2 w-full'
                      {...register('name', {
                        required: 'First name is required',
                      })}
                    />
                    {errors.name && (
                      <p className='text-red-500 text-sm'>
                        {errors.name.message}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className='font-bold' htmlFor='email'>
                      Email*
                    </label>
                    <input
                      id='email'
                      type='email'
                      placeholder='Enter your email'
                      className='border border-gray-300 rounded-md p-2 w-full'
                      {...register('email', {
                        required: 'Email is required',
                      })}
                    />
                    {errors.email && (
                      <p className='text-red-500 text-sm'>
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label className='font-bold' htmlFor='phone_number'>
                      Phone Number*
                    </label>
                    <input
                      id='phone_number'
                      type='tel'
                      placeholder='e.g. +62 1234 567890'
                      className='border border-gray-300 rounded-md p-2 w-full'
                      {...register('phone_number', {
                        required: 'Phone number is required',
                      })}
                    />
                    {errors.phone_number && (
                      <p className='text-red-500 text-sm'>
                        {errors.phone_number.message}
                      </p>
                    )}
                  </div>
                  {/* Country of Origin */}
                  <div>
                    <label className='font-bold' htmlFor='country_of_origin'>
                      Country of Origin*
                    </label>
                    <Select
                      id='country_of_origin'
                      options={countryList.map((country) => ({
                        value: country,
                        label: country,
                      }))}
                      placeholder='Select your country'
                      value={selectedCountry}
                      onChange={(selectedOption) => {
                        setSelectedCountry(selectedOption ?? undefined); // Update state
                        register('country_of_origin').onChange({
                          target: {
                            name: 'country_of_origin',
                            value: selectedOption?.value,
                          },
                        }); // Update form data
                      }}
                      classNamePrefix='react-select'
                      isSearchable
                    />
                    {errors.country_of_origin && (
                      <p className='text-red-500 text-sm mt-1'>
                        {errors.country_of_origin.message}
                      </p>
                    )}
                  </div>
                  {/* Pickup Location */}
                  <div>
                    <label className='font-bold' htmlFor='pickup_location'>
                      Pickup Location*
                    </label>
                    <Select
                      id='pickup_location'
                      options={packageTour?.pickup_areas.map((area) => {
                        return {
                          value: area,
                          label: area,
                        };
                      })}
                      placeholder='Select your pickup location'
                      value={selectedPickupArea}
                      onChange={(selectedOption) => {
                        setSelectedPickupArea(
                          selectedOption as { value: string; label: string }
                        ); // Update state
                        register('pickup_location').onChange({
                          target: {
                            name: 'pickup_location',
                            value: (
                              selectedOption as {
                                value: string;
                                label: string;
                              }
                            )?.value,
                          },
                        }); // Update form data
                      }}
                      classNamePrefix='react-select'
                      isSearchable
                    />
                    {errors.pickup_location && (
                      <p className='text-red-500 text-sm mt-1'>
                        {errors.pickup_location.message}
                      </p>
                    )}
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label className='font-bold' htmlFor='additional_condition'>
                      Additional condition
                    </label>
                    <textarea
                      id='additional_message'
                      placeholder='Enter any additional message (optional)'
                      className='border border-gray-300 rounded-md p-2 w-full h-[10rem]'
                      {...register('additional_condition')}
                    />
                  </div>
                </section>
              </motion.div>

              {/* Sidebar Section */}
              <motion.div
                ref={refMyTrip}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className='w-full md:w-1/3 bg-white rounded-lg shadow-sm p-6 border border-gray-300 space-y-6 h-fit'
              >
                {/* My Trip Section */}
                <div>
                  <h3 className='text-lg font-bold text-gray-900 mb-4'>
                    My Trip
                  </h3>
                  <p className='text-sm font-medium text-gray-900'>
                    {packageTour?.package_name}
                  </p>
                  <p className='text-sm text-gray-500'>
                    {packageTour?.duration} Hour
                  </p>

                  <div className='mt-2'>
                    <p className='text-sm text-gray-500'>
                      {formData('start_date')}
                    </p>
                  </div>
                </div>

                {/* Price Breakdown Section */}
                <motion.div
                  ref={refPriceBreakdown}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: 'easeOut' }}
                >
                  <h3 className='text-lg font-bold text-gray-900 mb-4'>
                    Price Breakdown
                  </h3>
                  <div className='flex justify-between items-center mb-2'>
                    <p className='text-sm text-gray-900'>
                      {formData('adult_count')} x{' '}
                      {formatCurrency(packageTour?.package_price ?? 0, 'IDR')}
                    </p>
                  </div>
                  <div className='flex justify-between items-center mb-2'>
                    {formData('children_count') > 0 && (
                      <p className='text-sm text-gray-900'>
                        {formData('children_count')} x{' '}
                        {formatCurrency(
                          packageTour?.children_price ?? 0,
                          'IDR'
                        )}
                      </p>
                    )}
                  </div>
                  <div className='flex justify-between items-center mb-2 text-green-600'>
                    <p className='text-sm'>Mega Sale Deal </p>
                    <p className='text-sm'>
                      {formatCurrency(
                        totalPrice -
                          totalPrice / (1 - discountPercentage / 100),
                        'IDR'
                      )}
                    </p>
                  </div>
                  <hr className='my-4 border-gray-300' />
                  <div className='flex justify-between items-center mb-4'>
                    <p className='text-sm font-medium text-gray-900'>
                      Total due
                    </p>
                    <p className='text-xl font-bold text-gray-900'>
                      {formatCurrency(totalPrice, 'IDR')}
                    </p>
                  </div>
                </motion.div>

                <Button
                  onClick={() => {
                    handleNext();
                    // setIsModalOpen(true);
                  }}
                  className='w-full bg-primary text-white text-lg font-semibold py-3 rounded-full mt-4 hover:bg-blue-700 transition justify-center'
                >
                  Next Booking
                </Button>
              </motion.div>
            </form>
            <div className='h-[10rem]'></div>
            {/* Checkout Modal */}
            <CheckoutModal
              isOpen={isModalOpen}
              onClose={() => setIsModalOpen(false)}
              packageName={packageTour?.package_name || ''}
              handleSendToEmail={handleCheckout}
              handleSendToWhatsApp={handleCheckout}
              date={formData('start_date')}
              totalAdult={2}
              totalChild={1}
              totalPrice={totalPrice}
            />
            {/* Checkout Modal */}
            <ConfirmationModal
              isOpen={isModalOpen2}
              onClose={() => setIsModalOpen2(false)}
              onConfirm={handleSendMessageWa}
              packageName={packageTour?.package_name || ''}
              date={formData('start_date')}
              totalAdult={2}
              totalChild={1}
              totalPrice={totalPrice}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CheckoutPage;
