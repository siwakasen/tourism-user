import React from 'react';
import { useForm } from 'react-hook-form';

interface TravelerDetailsFormValues {
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  day: string;
  month: string;
  year: string;
  gender: string;
  nationality: string;
}

const TravelerDetailsSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TravelerDetailsFormValues>();

  const onSubmit = (data: TravelerDetailsFormValues) => {
    data;
  };

  return (
    <section className='bg-white rounded-lg shadow-sm p-6 border border-gray-300 flex flex-col gap-6 mt-8'>
      <div className='flex gap-6 items-center'>
        <div className='bg-neutral-600 py-1 px-3 rounded-xl text-white font-bold text-lg'>
          3
        </div>
        <h3 className='text-lg font-bold'>Enter Your Traveler Information</h3>
      </div>

      <form className='flex flex-col gap-6' onSubmit={handleSubmit(onSubmit)}>
        {/* Title */}
        <div>
          <label className='font-bold'>Title*</label>
          <div className='flex gap-4 mt-2'>
            {['Mr.', 'Ms.', 'Mrs.', 'Miss'].map((option) => (
              <label key={option} className='flex items-center gap-2'>
                <input
                  type='radio'
                  value={option}
                  {...register('title', { required: 'Title is required' })}
                  className='form-radio'
                />
                {option}
              </label>
            ))}
          </div>
          {errors.title && (
            <p className='text-red-500 text-sm'>{errors.title.message}</p>
          )}
        </div>

        {/* First Name */}
        <div>
          <label className='font-bold' htmlFor='firstName'>
            First Name*
          </label>
          <input
            id='firstName'
            type='text'
            placeholder='Enter your first name'
            className='border border-gray-300 rounded-md p-2 w-full'
            {...register('firstName', { required: 'First name is required' })}
          />
          {errors.firstName && (
            <p className='text-red-500 text-sm'>{errors.firstName.message}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label className='font-bold' htmlFor='lastName'>
            Last Name*
          </label>
          <input
            id='lastName'
            type='text'
            placeholder='Enter your last name'
            className='border border-gray-300 rounded-md p-2 w-full'
            {...register('lastName', { required: 'Last name is required' })}
          />
          {errors.lastName && (
            <p className='text-red-500 text-sm'>{errors.lastName.message}</p>
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
            {...register('email', { required: 'Email is required' })}
          />
          {errors.email && (
            <p className='text-red-500 text-sm'>{errors.email.message}</p>
          )}
        </div>

        {/* Phone Number */}
        <div>
          <label className='font-bold' htmlFor='phoneNumber'>
            Phone Number*
          </label>
          <input
            id='phoneNumber'
            type='tel'
            placeholder='e.g. +62 1234 567890'
            className='border border-gray-300 rounded-md p-2 w-full'
            {...register('phoneNumber', {
              required: 'Phone number is required',
            })}
          />
          {errors.phoneNumber && (
            <p className='text-red-500 text-sm'>{errors.phoneNumber.message}</p>
          )}
        </div>

        {/* Date of Birth */}
        <div>
          <label className='font-bold'>Date of Birth*</label>
          <div className='flex gap-4'>
            <select
              className='border border-gray-300 rounded-md p-2 w-1/3'
              {...register('day', { required: 'Day is required' })}
            >
              <option value=''>Day</option>
              {[...Array(31)].map((_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </select>
            <select
              className='border border-gray-300 rounded-md p-2 w-1/3'
              {...register('month', { required: 'Month is required' })}
            >
              <option value=''>Month</option>
              {[
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
              ].map((month, index) => (
                <option key={index + 1} value={index + 1}>
                  {month}
                </option>
              ))}
            </select>
            <select
              className='border border-gray-300 rounded-md p-2 w-1/3'
              {...register('year', { required: 'Year is required' })}
            >
              <option value=''>Year</option>
              {Array.from(
                { length: 100 },
                (_, index) => new Date().getFullYear() - index
              ).map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Gender */}
        <div>
          <label className='font-bold'>Gender*</label>
          <div className='flex gap-4 mt-2'>
            {['Male', 'Female'].map((option) => (
              <label key={option} className='flex items-center gap-2'>
                <input
                  type='radio'
                  value={option}
                  {...register('gender', { required: 'Gender is required' })}
                  className='form-radio'
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        {/* Nationality */}
        <div>
          <label className='font-bold' htmlFor='nationality'>
            Nationality*
          </label>
          <select
            id='nationality'
            className='border border-gray-300 rounded-md p-2 w-full'
            {...register('nationality', {
              required: 'Nationality is required',
            })}
          >
            <option value=''>Select your nationality</option>
            {['Indonesia', 'United States', 'United Kingdom', 'Australia'].map(
              (country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              )
            )}
          </select>
          {errors.nationality && (
            <p className='text-red-500 text-sm'>{errors.nationality.message}</p>
          )}
        </div>
      </form>
    </section>
  );
};

export default TravelerDetailsSection;
