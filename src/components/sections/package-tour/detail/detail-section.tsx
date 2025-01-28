import { motion } from 'framer-motion';
import React from 'react';
import { BsCheck2Circle, BsClipboard2Check } from 'react-icons/bs';

import Timeline from '@/components/common/timeline/timeline-primary';

interface DetailsSectionProps {
  itineraries: string[];
  includes: string[];
  terms: string[];
}

const DetailsSection: React.FC<DetailsSectionProps> = ({
  itineraries,
  includes,
  terms,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className='mt-[2rem]'
    >
      {/* Itinerary */}
      <div className='mt-[2rem]'>
        <h2 className='text-2xl font-semibold mb-8'>Itinerary</h2>
        <div className='pl-8'>
          <Timeline items={itineraries} />
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

      {/* Terms and Conditions */}
      <div className='mt-[2rem]'>
        <h2 className='text-2xl font-semibold mb-4'>Term and Conditions</h2>
        <div className='pl-8 flex flex-col gap-6'>
          {terms.map((item, index) => (
            <div key={`${item}-${index}`} className='flex gap-x-2 items-center'>
              <div className='text-gray-500'>
                <BsClipboard2Check className='w-6 h-6' />
              </div>
              <p className='text-black text-lg'>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default DetailsSection;
