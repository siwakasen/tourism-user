'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useParams } from 'next/navigation';
import React, { useState } from 'react';
import Select from 'react-select';

import { formatCurrency } from '@/lib/helpers/currency';

import { countryList } from '@/data/country-data';
import { pickupAreas } from '@/data/pickup-area-data';

import Button from '@/components/common/buttons/Button';
import NumberInput from '@/components/common/inputs/number-input';
import CheckoutCarModal from '@/components/common/modals/cars/checkout-car-modal';
import ConfirmationCarModal from '@/components/common/modals/cars/confirmation-car-whatsapp-moda';
import NextImage from '@/components/NextImage';

import { getImageUrl } from '@/__utils/get-image-helper';
import UseCheckoutCar from '@/_hooks/cars/use-checkout-car';

const CheckoutCarPage = () => {
  const { id } = useParams();

  const [selectedPickupArea, setSelectedPickupArea] = useState<
    { value: string; label: string } | undefined
  >(undefined);
  const [selectedCountry, setSelectedCountry] = useState<
    { value: string; label: string } | undefined
  >(undefined);

  const {
    data: car,
    isLoading,
    register,
    errors,
    handleCheckout,
    handleSendMessageWa,
    handleNext,
    setValue,
    isModalOpen,
    setIsModalOpen,
    isModalOpen2,
    setIsModalOpen2,
    totalPrice,
    days,
    calculateDays,
    calculateTotalPrice,
    start_date,
    setStartDate,
    end_date,
    setEndDate,
  } = UseCheckoutCar(Array.isArray(id) ? id[0] : id);

  return (
    <AnimatePresence mode='wait'>
      {isLoading ? (
        <motion.div
          key='skeleton'
          className='animate-pulse px-4 layout '
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className='h-[8rem]'></div>
          <div className='h-[800px] w-full bg-gray-300 rounded-lg mb-6'></div>
          <div className='h-8 w-2/3 bg-gray-300 rounded mb-4'></div>
          <div className='h-6 w-1/2 bg-gray-300 rounded mb-6'></div>
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
              <motion.div
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
                    <p className='text-lg font-bold'>Number Of Person</p>
                    <NumberInput
                      min={1}
                      max={car?.max_person ?? 1} // Set max value based on car's max_person
                      defaultValue={1}
                      setValue={setValue}
                      name='number_of_person'
                      error={errors.number_of_person}
                    />
                  </div>
                </div>
                <div className='bg-white rounded-lg shadow-sm p-6 border border-gray-300 flex flex-col gap-6 mt-8'>
                  <div className='flex gap-6 items-center'>
                    <div className='bg-neutral-600 py-1 px-3 rounded-xl text-white font-bold text-lg'>
                      2
                    </div>
                    <h3 className='text-lg font-bold'>Enter Your Tour Date</h3>
                  </div>
                  <div className='flex gap-6'>
                    {/* Start Date */}
                    <div className='flex-grow'>
                      <label className='font-bold' htmlFor='start_date'>
                        Start Date*
                      </label>
                      <input
                        id='start_date'
                        type='date'
                        className='border border-gray-300 rounded-md p-2 w-full'
                        {...register('start_date', {
                          required: 'Start date is required',
                        })}
                        onChange={(event) => {
                          const value = event.target.value;
                          setStartDate(new Date(value));
                          calculateDays(new Date(value), end_date);
                          calculateTotalPrice(days, car?.price ?? 0);
                        }}
                      />
                      {errors.start_date && (
                        <p className='text-red-500 text-sm'>
                          {errors.start_date.message}
                        </p>
                      )}
                    </div>

                    {/* End Date */}
                    <div className='flex-grow'>
                      <label className='font-bold' htmlFor='end_date'>
                        End Date*
                      </label>
                      <input
                        id='end_date'
                        type='date'
                        className='border border-gray-300 rounded-md p-2 w-full'
                        {...register('end_date', {
                          required: 'End date is required',
                        })}
                        onChange={(event) => {
                          const value = event.target.value;
                          setEndDate(new Date(value));
                          calculateDays(start_date, new Date(value));
                          calculateTotalPrice(days, car?.price ?? 0);
                        }}
                      />
                      {errors.end_date && (
                        <p className='text-red-500 text-sm'>
                          {errors.end_date.message}
                        </p>
                      )}
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
                </div>

                <section className='bg-white rounded-lg shadow-sm p-6 border border-gray-300 flex flex-col gap-6 mt-8'>
                  <div className='flex gap-6 items-center'>
                    <div className='bg-neutral-600 py-1 px-3 rounded-xl text-white font-bold text-lg'>
                      3
                    </div>
                    <h3 className='text-lg font-bold'>Your Information</h3>
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
                  <div>
                    <label className='font-bold' htmlFor='fullName'>
                      Full Name*
                    </label>
                    <input
                      id='fullName'
                      type='text'
                      placeholder='Enter your full name'
                      className='border border-gray-300 rounded-md p-2 w-full'
                      {...register('name', {
                        required: 'Full name is required',
                      })}
                    />
                    {errors.name && (
                      <p className='text-red-500 text-sm'>
                        {errors.name.message}
                      </p>
                    )}
                  </div>

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
                      options={pickupAreas}
                      placeholder='Select your pickup location'
                      value={selectedPickupArea}
                      onChange={(
                        selectedOption: { value: string; label: string } | null
                      ) => {
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
                      Additional Message
                    </label>
                    <textarea
                      id='additional_message'
                      placeholder='Enter any additional message (optional)'
                      className='border border-gray-300 rounded-md p-2 w-full h-[10rem]'
                      {...register('additional_message')}
                    />
                  </div>
                </section>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className='w-full md:w-1/3 bg-white rounded-lg shadow-sm p-6 border border-gray-300 space-y-6 h-fit'
              >
                <div>
                  <h3 className='text-lg font-bold text-gray-900 mb-4'>
                    Price Breakdown
                  </h3>
                  <div className='flex justify-between items-center mb-4'>
                    <p className='text-sm text-gray-900'>
                      {days} Days x {formatCurrency(totalPrice, 'IDR')}
                    </p>
                  </div>
                  <hr className='my-4 border-gray-300' />
                  <div className='flex justify-between items-center mb-4'>
                    <p className='text-sm font-medium text-gray-900'>Total</p>
                    <p className='text-xl font-bold text-gray-900'>
                      {formatCurrency(totalPrice, 'IDR')}
                    </p>
                  </div>
                </div>

                <Button
                  onClick={() => {
                    handleNext();
                  }}
                  className='w-full bg-primary text-white text-lg font-semibold py-3 rounded-full mt-4 hover:bg-blue-700 transition justify-center'
                >
                  Next Booking
                </Button>
              </motion.div>
            </form>
            <div className='h-[10rem]'></div>
            <CheckoutCarModal
              isOpen={isModalOpen}
              rentalDays={days}
              onClose={() => setIsModalOpen(false)}
              carName={car?.car_name || ''}
              handleSendToEmail={handleCheckout}
              totalPrice={totalPrice}
            />
            <ConfirmationCarModal
              isOpen={isModalOpen2}
              carName={car?.car_name ?? ''}
              onClose={() => {
                setIsModalOpen2(false);
              }}
              onConfirm={() => {
                handleSendMessageWa();
              }}
              rentalDays={days}
              totalPrice={totalPrice}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CheckoutCarPage;
