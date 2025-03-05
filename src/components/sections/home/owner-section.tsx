'use client';

import { motion } from 'framer-motion';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

import NextImage from '@/components/NextImage';

const LeadershipSection = () => {
  return (
    <section className='layout w-full mx-auto py-16 px-4 '>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='flex flex-col items-center text-center gap-6'
      >
        <motion.h2
          className='divider divide-solid divide-y-12  xl:text-xl sm:text-lg text-sm'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-2'>
            Meet Our Founder
          </h2>
        </motion.h2>

        {/* Profile Image with Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='relative'
        >
          <div className='w-48 h-48 md:w-64 md:h-64 rounded-full relative'>
            <NextImage
              src='/images/owner.jpeg'
              alt='Alexandra Morrison'
              fill
              className='object-cover rounded-full'
              imageClassName='rounded-full'
            />

            {/* Crown Badge */}
            <div className='absolute bottom-0 right-0 bg-gray-900 rounded-full p-2 shadow-lg'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='text-white'
              >
                <path
                  d='M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z'
                  fill='currentColor'
                />
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className='text-2xl font-bold text-gray-900 mb-1'>
            Alexandra Morrison
          </h3>
          <p className='text-gray-600 text-lg mb-6'>
            Founder & Chief Executive Officer
          </p>

          {/* Social Media Icons */}
          <div className='flex justify-center gap-4 '>
            <a
              href='#'
              className='text-gray-900 hover:text-gray-700 transition-colors'
            >
              <Linkedin size={24} />
              <span className='sr-only'>LinkedIn</span>
            </a>
            <a
              href='#'
              className='text-gray-900 hover:text-gray-700 transition-colors'
            >
              <Twitter size={24} />
              <span className='sr-only'>Twitter</span>
            </a>
            <a
              href='#'
              className='text-gray-900 hover:text-gray-700 transition-colors'
            >
              <Instagram size={24} />
              <span className='sr-only'>Instagram</span>
            </a>
          </div>
        </motion.div>

        {/* Bio Paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className='text-gray-600 max-w-2xl mx-auto text-center mb-8'
        >
          With over 15 years of industry experience, Alexandra leads our company
          with vision and innovation. Her commitment to excellence and
          sustainable practices has transformed how we approach business in the
          modern era.
        </motion.p>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className='grid grid-cols-1 md:grid-cols-3 gap-8 w-full border-t border-gray-200 pt-12'
        >
          <div className='text-center'>
            <h4 className='text-4xl font-bold text-gray-900 mb-2'>15+</h4>
            <p className='text-gray-600'>Years Experience</p>
          </div>

          <div className='text-center md:border-x md:border-gray-200 px-4'>
            <h4 className='text-4xl font-bold text-gray-900 mb-2'>200+</h4>
            <p className='text-gray-600'>Projects Completed</p>
          </div>

          <div className='text-center'>
            <h4 className='text-4xl font-bold text-gray-900 mb-2'>50+</h4>
            <p className='text-gray-600'>Global Partners</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LeadershipSection;
