import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import ReviewCard from '@/components/common/cards/review-card';

const ReviewOverviewSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const cardVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <section ref={ref}>
      <motion.div
        className='flex flex-col layout w-full'
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        variants={textVariant}
      >
        <motion.h2
          className='divider divide-solid divide-y-12 divider-start xl:text-xl sm:text-lg text-sm font-libre'
          variants={textVariant}
        >
          Testimonial
        </motion.h2>
        <motion.div
          className='flex sm:flex-row flex-col gap-8 mt-[2rem]'
          variants={textVariant}
        >
          <motion.div className='flex flex-col sm:w-1/3' variants={textVariant}>
            <h1 className='xl:text-5xl sm:text-3xl text-2xl font-libre'>
              Don't Just Take Word for it, See What Our Travelers Say
            </h1>
          </motion.div>
          <motion.div className='flex sm:w-2/3 w-full' variants={textVariant}>
            <div className='flex xl:flex-row flex-col gap-6'>
              {/* Card 1 */}
              <motion.div
                className='w-full'
                variants={cardVariant}
                initial='hidden'
                animate={inView ? 'visible' : 'hidden'}
              >
                <ReviewCard
                  description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolores, facilis a officia unde consectetur necessitatibus magni vero labore magnam quia earum nisi exercitationem reprehenderit sed illum explicabo. Eligendi, tempore.'
                  profile={{
                    name: 'John Doe',
                    origin: 'USA',
                    image: '/images/profile1.jpg',
                  }}
                />
              </motion.div>
              {/* Card 2 */}
              <motion.div
                className='w-full'
                variants={cardVariant}
                initial='hidden'
                animate={inView ? 'visible' : 'hidden'}
              >
                <ReviewCard
                  description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolores, facilis a officia unde consectetur necessitatibus magni vero labore magnam quia earum nisi exercitationem reprehenderit sed illum explicabo. Eligendi, tempore.'
                  profile={{
                    name: 'Jane Smith',
                    origin: 'Canada',
                    image: '/images/profile1.jpg',
                  }}
                />
              </motion.div>
              {/* Card 3 */}
              <motion.div
                className='w-full'
                variants={cardVariant}
                initial='hidden'
                animate={inView ? 'visible' : 'hidden'}
              >
                <ReviewCard
                  description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolores, facilis a officia unde consectetur necessitatibus magni vero labore magnam quia earum nisi exercitationem reprehenderit sed illum explicabo. Eligendi, tempore.'
                  profile={{
                    name: 'Alice Brown',
                    origin: 'Australia',
                    image: '/images/profile1.jpg',
                  }}
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ReviewOverviewSection;
