import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import CarOverviewCard from '@/components/common/cards/car-overview-card';

const CarRentalOverview = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true, // Animasi hanya terjadi sekali
    threshold: 0.2, // Sebagian elemen harus terlihat (20%) untuk memicu animasi
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section ref={ref}>
      <div className='flex flex-col layout w-full'>
        <motion.h2
          className='divider divide-solid divide-y-12 divider-start xl:text-xl sm:text-lg text-sm font-libre'
          initial='hidden'
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
        >
          Our Car Rental
        </motion.h2>

        <motion.h1
          className='xl:text-5xl sm:text-3xl text-2xl font-libre'
          initial='hidden'
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          High-quality car rentals that will take you to see the beauty of the
          world.
        </motion.h1>

        <div className='sm:h-[6rem] h-[2rem]'></div>

        <motion.div
          className='flex flex-col sm:flex-row gap-12'
          variants={containerVariants}
          initial='hidden'
          animate={controls}
        >
          <motion.div className='sm:w-1/2 w-full' variants={itemVariants}>
            <CarOverviewCard
              image='/images/hero3_img.jpg'
              title='Toyota Avanza'
              price={200000}
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolores, facilis a officia unde consectetur necessitatibus magni vero labore magnam quia earum nisi exercitationem reprehenderit sed illum explicabo. Eligendi, tempore.'
            />
          </motion.div>

          <motion.div
            className='xl:w-1/4 sm:w-1/2 w-full'
            variants={itemVariants}
          >
            <CarOverviewCard
              image='/images/hero3_img.jpg'
              title='Toyota Avanza'
              price={200000}
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolores, facilis a officia unde consectetur necessitatibus magni vero labore magnam quia earum nisi exercitationem reprehenderit sed illum explicabo. Eligendi, tempore.'
            />
          </motion.div>

          <motion.div
            className='xl:w-1/4 sm:hidden xl:block w-full'
            variants={itemVariants}
          >
            <CarOverviewCard
              image='/images/hero3_img.jpg'
              title='Toyota Avanza'
              price={200000}
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolores, facilis a officia unde consectetur necessitatibus magni vero labore magnam quia earum nisi exercitationem reprehenderit sed illum explicabo. Eligendi, tempore.'
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CarRentalOverview;
