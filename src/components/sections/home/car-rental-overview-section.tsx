import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import CarOverviewCard from '@/components/common/cards/car-overview-card';

import { Car } from '@/__interfaces/car-tour.interface';
import { getImageUrl } from '@/__utils/get-image-helper';

interface CarRentalOverviewProps {
  listCar: Car[];
}

const CarRentalOverview = ({ listCar }: CarRentalOverviewProps) => {
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
              image={getImageUrl(`car-images/${listCar[0].car_image}`)}
              title={listCar[0].car_name}
              price={listCar[0].price}
              description={listCar[0].description}
              id={listCar[0].id}
            />
          </motion.div>

          <motion.div
            className='xl:w-1/4 sm:w-1/2 w-full'
            variants={itemVariants}
          >
            <CarOverviewCard
              image={getImageUrl(`car-images/${listCar[1].car_image}`)}
              title={listCar[1].car_name}
              price={listCar[1].price}
              description={listCar[1].description}
              id={listCar[1].id}
            />
          </motion.div>

          <motion.div
            className='xl:w-1/4 sm:hidden xl:block w-full'
            variants={itemVariants}
          >
            <CarOverviewCard
              image={getImageUrl(`car-images/${listCar[2].car_image}`)}
              title={listCar[2].car_name}
              price={listCar[2].price}
              description={listCar[2].description}
              id={listCar[2].id}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CarRentalOverview;
