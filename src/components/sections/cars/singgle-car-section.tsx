'use client';

import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

import NextImage from '@/components/NextImage';

import { getImageUrl } from '@/__utils/get-image-helper';

interface SingleImageSectionProps {
  image: string;
  altText?: string;
}

const SingleImageSection: React.FC<SingleImageSectionProps> = ({
  image,
  altText,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className='relative w-full sm:h-[30rem] h-[25rem] overflow-hidden'
    >
      <div className='relative w-full h-full'>
        <NextImage
          src={getImageUrl(`car-images/${image ?? ''}`)}
          alt={altText || 'Car Image'}
          fill
          imageClassName='sm:rounded-2xl rounded-lg object-cover'
        />
      </div>
    </motion.div>
  );
};

export default SingleImageSection;
