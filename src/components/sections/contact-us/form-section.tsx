'use client';

import React from 'react';

import NextImage from '@/components/NextImage';

import useContactUs from '@/_hooks/contact-us/use-handle-contact-us';

export default function ContactSection() {
  const { register, handleSubmit, errors, isSubmitting } = useContactUs();

  return (
    <section className='relative z-10 -top-[12rem]'>
      <div className='shadow-2xl bg-neutral-light flex flex-col lg:flex-row layout px-0 rounded-2xl'>
        <div className='relative h-40 lg:h-auto lg:w-1/2  overflow-hidden'>
          <NextImage
            imageClassName='absolute inset-0 w-full h-full object-cover rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl'
            src='/images/bali_1.jpg'
            alt='Hero Section'
            fill
          />
        </div>
        <div className='lg:w-1/2 px-12 py-12 flex flex-col justify-center'>
          <h2 className='text-2xl font-semibold mb-4'>Contact Us</h2>
          <form onSubmit={handleSubmit} className='space-y-4'>
            {/* Input Name */}
            <div>
              <label
                htmlFor='name'
                className='block text-sm font-medium text-gray-700'
              >
                Name
              </label>
              <input
                type='text'
                id='name'
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
                {...register('name')}
              />
              {errors.name && (
                <p className='mt-1 text-sm text-red-600'>
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Input Email */}
            <div>
              <label
                htmlFor='email'
                className='block text-sm font-medium text-gray-700'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
                {...register('email')}
              />
              {errors.email && (
                <p className='mt-1 text-sm text-red-600'>
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Input Subject */}
            <div>
              <label
                htmlFor='subject'
                className='block text-sm font-medium text-gray-700'
              >
                Subject
              </label>
              <input
                type='text'
                id='subject'
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
                {...register('subject')}
              />
              {errors.subject && (
                <p className='mt-1 text-sm text-red-600'>
                  {errors.subject.message}
                </p>
              )}
            </div>

            {/* Input Message */}
            <div>
              <label
                htmlFor='message'
                className='block text-sm font-medium text-gray-700'
              >
                Message
              </label>
              <textarea
                id='message'
                rows={4}
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
                {...register('message')}
              ></textarea>
              {errors.message && (
                <p className='mt-1 text-sm text-red-600'>
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type='submit'
                className='w-full bg-black text-white py-2 px-4 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-6'
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
