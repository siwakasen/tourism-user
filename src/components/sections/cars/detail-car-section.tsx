import { motion } from 'framer-motion';
import React from 'react';
import { BsCheck2Circle } from 'react-icons/bs';

interface DetailCarSectionProps {
  includes: string[];
  features: string;
  capacity: {
    min: number;
    max: number;
  };
}

const DetailCarSection: React.FC<DetailCarSectionProps> = ({
  includes,
  capacity,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className='mt-[2rem]'
    >
      {/* Capacity Section */}
      <div className='mt-[2rem]'>
        <h2 className='text-2xl font-semibold mb-4'>Capacity</h2>
        <div className='pl-8'>
          <p className='text-lg text-gray-700'>
            Min: {capacity.min} person(s), Max: {capacity.max} person(s)
          </p>
        </div>
      </div>

      {/* What's Included */}
      <div className='mt-[2rem]'>
        <h2 className='text-2xl font-semibold mb-4'>What's Included</h2>
        <div className='pl-8 flex flex-col gap-6'>
          {includes.map((item, index) => (
            <div key={`${item}-${index}`} className='flex gap-x-2 items-center'>
              <div className='text-gray-500'>
                <BsCheck2Circle color='green' className='w-6 h-6' />
              </div>
              <p className='text-black text-lg'>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DetailCarSection;
