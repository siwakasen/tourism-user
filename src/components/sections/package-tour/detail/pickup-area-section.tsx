import { motion } from 'framer-motion';
import React from 'react';
import { FcGlobe } from 'react-icons/fc';

interface PickUpAreasSectionProps {
  pickupAreas: string[];
}

const PickUpAreasSection: React.FC<PickUpAreasSectionProps> = ({
  pickupAreas,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className='mt-[2rem]'
    >
      <h2 className='text-2xl font-semibold mb-8 text-gray-900'>
        Pick Up Areas
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
        {pickupAreas.map((area, index) => (
          <div
            key={index}
            className='flex items-center gap-4 p-4 bg-white rounded-lg shadow-lg border border-gray-200 hover:shadow-xl hover:border-blue-300 transition-all duration-300 ease-in-out'
          >
            <FcGlobe className='text-white w-6 h-6' />
            <p className='text-gray-700 text-base font-medium'>{area}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default PickUpAreasSection;
