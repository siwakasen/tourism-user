'use client';

import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

import NextImage from '@/components/NextImage';

interface CarouselSectionProps {
  images: string[];
  currentSlide: number;
  onPrev: () => void;
  onNext: () => void;
  setCurrentSlide: (index: number) => void;
}

const CarouselSection: React.FC<CarouselSectionProps> = ({
  images,
  currentSlide,
  onPrev,
  onNext,
  setCurrentSlide,
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
      {/* Carousel Slides */}
      <div
        className='flex transition-transform duration-700 ease-in-out w-full h-full'
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className='min-w-full h-full relative flex-shrink-0'
            style={{ height: '100%', position: 'relative' }}
          >
            <NextImage
              src={src}
              alt={`Slide ${index + 1}`}
              fill
              imageClassName='sm:rounded-2xl rounded-lg object-cover'
            />
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <button
        className='absolute top-1/2 left-5 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-all'
        onClick={onPrev}
      >
        ❮
      </button>
      <button
        className='absolute top-1/2 right-5 transform -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full hover:bg-gray-700 transition-all'
        onClick={onNext}
      >
        ❯
      </button>

      {/* Slide Indicators */}
      <div className='absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2'>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index
                ? 'bg-blue-500'
                : 'bg-gray-300 hover:bg-gray-500'
            }`}
          ></button>
        ))}
      </div>
    </motion.div>
  );
};

export default CarouselSection;
