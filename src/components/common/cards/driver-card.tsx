'use client';

import { motion } from 'framer-motion';

import NextImage from '@/components/NextImage';

import type { Driver } from '@/__interfaces/driver.interface';
import { getImageDriver } from '@/__utils/get-image-helper';

interface DriverCardProps {
  driver: Driver;
}

const DriverCard = ({ driver }: DriverCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
      className='flex flex-col items-center gap-2'
    >
      <div className='relative sm:w-32 sm:h-32 w-12 h-12 bg-white rounded-full shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-lg'>
        <div className='w-full h-full rounded-full relative'>
          <NextImage
            src={getImageDriver(
              `drivers-images/${driver?.photo_profile ?? ''}`
            )}
            alt='/images/people.jpg'
            fill
            className='object-cover'
          />
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className='absolute inset-0 bg-black bg-opacity-10'
          />
        </div>
      </div>

      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
        className='flex flex-col items-center justify-center p-2'
      >
        <h3 className='sm:text-lg text-sm font-semibold text-gray-800 mb-1 text-center'>
          {driver.name}
        </h3>
        <p className='sm:text-sm text-xs text-gray-500'>Driver</p>
      </motion.div>
    </motion.div>
  );
};

export default DriverCard;
