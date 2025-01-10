'use client';

import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

import NextImage from '@/components/NextImage';

// Schema untuk validasi menggunakan Yup
const formSchema = Yup.object().shape({
  name: Yup.string()
    .required('Name is required')
    .max(50, 'Name cannot exceed 50 characters'),
  email: Yup.string()
    .required('Email is required')
    .email('Invalid email address'),
  nohp: Yup.string()
    .required('Phone number is required')
    .matches(/^[0-9]+$/, 'Phone number must contain only numbers')
    .min(10, 'Phone number must be at least 10 digits')
    .max(15, 'Phone number cannot exceed 15 digits'),
  message: Yup.string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters'),
});

// TypeScript interface untuk data form
type FormData = {
  name: string;
  email: string;
  nohp: string;
  message: string;
};

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data: FormData) => {
    // Setup handle submit function
    data;
  };

  return (
    <section className='relative z-10 -top-[12rem]'>
      <div className='shadow-2xl bg-neutral-light flex flex-row layout px-0  rounded-2xl'>
        <div className='w-1/2 rounded-2xl'>
          <NextImage
            imageClassName='rounded-l-2xl'
            src='/images/bali_1.jpg'
            alt='Hero Section'
            fill
          />
        </div>
        <div className='w-1/2 px-12 py-12 flex flex-col justify-center '>
          <h2 className='text-2xl font-semibold mb-4'>Contact Us</h2>
          <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
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

            {/* Input No HP */}
            <div>
              <label
                htmlFor='nohp'
                className='block text-sm font-medium text-gray-700'
              >
                Phone Number
              </label>
              <input
                type='text'
                id='nohp'
                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500'
                {...register('nohp')}
              />
              {errors.nohp && (
                <p className='mt-1 text-sm text-red-600'>
                  {errors.nohp.message}
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
                  {errors.message.toString()}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className=''>
              <button
                type='submit'
                className='w-full bg-black text-white py-2 px-4 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-6 '
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
