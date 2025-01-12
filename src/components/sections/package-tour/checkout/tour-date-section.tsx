import React from 'react';
import { useForm } from 'react-hook-form';

interface TravelerTourDateFormValues {
  tourDate: string;
}

const TravelerTourDateSection: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TravelerTourDateFormValues>();

  const onSubmit = (data: TravelerTourDateFormValues) => {
    data;
  };

  // Get today's date in the format YYYY-MM-DD
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  return (
    <section className='bg-white rounded-lg shadow-sm p-6 border border-gray-300 flex flex-col gap-6 mt-8'>
      <div className='flex gap-6 items-center'>
        <div className='bg-neutral-600 py-1 px-3 rounded-xl text-white font-bold text-lg'>
          2
        </div>
        <h3 className='text-lg font-bold'>Enter Your Tour Date</h3>
      </div>

      <form className='flex flex-col gap-6' onSubmit={handleSubmit(onSubmit)}>
        {/* Tour Date */}
        <div>
          <label className='font-bold' htmlFor='tourDate'>
            Tour Date*
          </label>
          <input
            id='tourDate'
            type='date'
            className={`border border-gray-300 rounded-md p-2 w-full ${
              errors.tourDate ? 'border-red-500' : ''
            }`}
            {...register('tourDate', {
              required: 'Tour date is required',
              validate: (value) =>
                new Date(value) >= new Date(getTodayDate()) ||
                'Tour date cannot be in the past',
            })}
            min={getTodayDate()} // Set the minimum date to today
          />
          {errors.tourDate && (
            <p className='text-red-500 text-sm mt-1'>
              {errors.tourDate.message}
            </p>
          )}
        </div>
      </form>
    </section>
  );
};

export default TravelerTourDateSection;
