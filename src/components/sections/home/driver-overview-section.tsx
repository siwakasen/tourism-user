'use client';

import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import DriverCard from '@/components/common/cards/driver-card';

import UseListDriver from '@/_hooks/drivers/useListDriver';

const DriverOverviewSection = () => {
  const { drivers, isLoading } = UseListDriver();

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Menjadwalkan animasi masuk per kartu
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section ref={ref} className='py-12'>
      <div className='flex flex-col layout w-full'>
        <div className='flex justify-between items-center w-full'>
          <motion.h2
            className='divider divider-start flex-grow mx-4 border-t border-gray-300'
            initial='hidden'
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          />
          <motion.h2
            className='xl:text-xl sm:text-lg text-sm font-libre'
            initial='hidden'
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          >
            Best Cab Service in Bali
          </motion.h2>
          <motion.h2
            className='divider divider-start flex-grow mx-4 border-t border-gray-300'
            initial='hidden'
            animate={controls}
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.8 }}
          />
        </div>

        <motion.h1
          className='xl:text-5xl sm:text-3xl text-2xl font-libre text-center'
          initial='hidden'
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          The best drivers, with great cars and unbeatable prices
        </motion.h1>

        <div className='sm:h-[6rem] h-[2rem]'></div>

        {isLoading ? (
          <div className='text-center text-gray-500'>Loading drivers...</div>
        ) : (
          <motion.div
            className='flex flex-wrap justify-center gap-6'
            variants={containerVariants}
            initial='hidden'
            animate={controls}
          >
            {drivers.map((driver) => (
              <motion.div
                key={driver.id}
                className='w-48'
                variants={itemVariants}
              >
                <DriverCard driver={driver} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default DriverOverviewSection;
