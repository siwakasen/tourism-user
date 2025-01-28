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
          <label className='font-bold' htmlFor='fulleName'>
            FullName*
          </label>
          <input
            id='fullName'
            type='text'
            placeholder='Enter your first name'
            className='border border-gray-300 rounded-md p-2 w-full'
            {...register('firstName', { required: 'First name is required' })}
          />
          {errors.firstName && (
            <p className='text-red-500 text-sm'>{errors.firstName.message}</p>
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

        <div>
          <label className='font-bold'>Pifck Up Loactions*</label>
        </div>
        <div>
          <label className='font-bold'>Adtional Message</label>
        </div>
      </form>
    </section>
  );
};

export default TravelerDetailsSection;
