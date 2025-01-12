import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import NextImage from '@/components/NextImage';
import DestinationList from '@/components/sections/destination-list';

const PackagesTourOverviewSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const sectionVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  return (
    <>
      <section ref={ref}>
        <motion.div
          className='flex flex-col layout w-full'
          variants={sectionVariant}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.h2
            className='divider divide-solid divide-y-12 divider-start xl:text-xl sm:text-lg text-sm'
            variants={sectionVariant}
          >
            Feature Destination
          </motion.h2>

          <motion.h1
            className='xl:text-5xl sm:text-3xl text-2xl font-libre'
            variants={sectionVariant}
          >
            Explore one of the beautiful places in Bali with us, we guarantee
            comfort and safety during your journey.
          </motion.h1>

          <div className='sm:h-[6rem] h-[2rem]'></div>

          <motion.div
            className='sm:flex justify-between items-end'
            variants={sectionVariant}
          >
            <motion.div
              className='sm:order-2 order-1'
              variants={sectionVariant}
            >
              <NextImage
                src='/images/hero3_img.jpg'
                alt='#'
                width={600}
                height={500}
                imageClassName='sm:rounded-2xl rounded-lg'
              />
            </motion.div>
            <motion.div
              className='sm:order-1 order-2 w-full mr-[20%] sm:mt-0 mt-[2rem]'
              variants={sectionVariant}
            >
              <DestinationList />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default PackagesTourOverviewSection;
