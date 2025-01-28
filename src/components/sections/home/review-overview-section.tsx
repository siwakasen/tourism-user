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
          Testimonials
        </motion.h2>
        <motion.div
          className='flex sm:flex-row flex-col gap-8 mt-[2rem]'
          variants={textVariant}
        >
          <motion.div className='flex flex-col sm:w-1/3' variants={textVariant}>
            <h1 className='xl:text-5xl sm:text-3xl text-2xl font-libre'>
              Hear What Our Travelers Are Saying About Our Tour Packages
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
                  description='The Bali Adventure package was beyond my expectations. From the pristine beaches of Nusa Dua to the cultural heart of Ubud, every moment was magical. Exploring the vibrant markets, serene rice terraces, and the iconic Uluwatu Temple was an unforgettable experience. The guides were friendly and ensured everything went smoothly.'
                  profile={{
                    name: 'Michael Johnson',
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
                  description='The Exotic Bali tour was perfectly curated. Visiting the breathtaking Tegallalang Rice Terraces, soaking in the natural beauty of Tegenungan Waterfall, and experiencing the tranquil atmosphere of Tanah Lot Temple were highlights of the trip. The accommodations and food were top-notch, making the journey even more enjoyable.'
                  profile={{
                    name: 'Sophia Lee',
                    origin: 'Canada',
                    image: '/images/profile2.jpg',
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
                  description='Bali is truly a paradise! The Serenity Escape package gave me a perfect blend of relaxation and exploration. The sunrise hike at Mount Batur, snorkeling in the crystal-clear waters of Amed, and the cultural dance performances in Ubud were absolutely mesmerizing. A trip I’ll cherish forever!'
                  profile={{
                    name: 'Emily Carter',
                    origin: 'Australia',
                    image: '/images/profile3.jpg',
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
