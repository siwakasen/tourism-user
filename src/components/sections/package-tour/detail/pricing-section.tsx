import { motion } from 'framer-motion';
import React from 'react';
import { FaClock, FaUsers } from 'react-icons/fa';
import { GrMoney } from 'react-icons/gr';

import { formatCurrency } from '@/lib/helpers/currency';

interface PricingSectionProps {
  packagePrice: number;
  childrenPrice?: number;
  duration: number;
  maxGroupSize: number;
}

const PricingSection: React.FC<PricingSectionProps> = ({
  packagePrice,
  childrenPrice,
  duration,
  maxGroupSize,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className='grid grid-cols-2 mt-[2rem] gap-4'
    >
      <div className='flex sm:flex-row flex-col gap-4 items-center bg-gray-100 p-4 rounded-lg shadow'>
        <div className='text-black text-3xl'>
          <GrMoney />
        </div>
        <div className='flex flex-col'>
          <p className='text-gray-600 font-semibold text-sm'>Adult Price</p>
          <p className='text-gray-800 text-lg font-bold'>
            {formatCurrency(packagePrice, 'USD')}
          </p>
        </div>
      </div>

      {childrenPrice && (
        <div className='flex sm:flex-row flex-col gap-4 items-center bg-gray-100 p-4 rounded-lg shadow'>
          <div className='text-black text-3xl'>
            <GrMoney />
          </div>
          <div className='flex flex-col'>
            <p className='text-gray-600 font-semibold text-sm'>
              Children Price
            </p>
            <p className='text-gray-800 text-lg font-bold'>
              {formatCurrency(childrenPrice, 'USD')}
            </p>
          </div>
        </div>
      )}

      <div className='flex sm:flex-row flex-col gap-4 items-center bg-gray-100 p-4 rounded-lg shadow'>
        <div className='text-black text-3xl'>
          <FaClock />
        </div>
        <div className='flex flex-col'>
          <p className='text-gray-600 font-semibold text-sm'>Duration</p>
          <p className='text-gray-800 text-lg font-bold'>{duration} days</p>
        </div>
      </div>

      <div className='flex sm:flex-row flex-col gap-4 items-center bg-gray-100 p-4 rounded-lg shadow'>
        <div className='text-black text-3xl'>
          <FaUsers />
        </div>
        <div className='flex flex-col'>
          <p className='text-gray-600 font-semibold text-sm'>Max Group Size</p>
          <p className='text-gray-800 text-lg font-bold'>
            {maxGroupSize} people
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default PricingSection;
