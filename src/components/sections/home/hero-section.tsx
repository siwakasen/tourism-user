import { motion } from 'framer-motion';

import ButtonLink from '@/components/common/links/ButtonLink';
import NextImage from '@/components/NextImage';

const HeroSection = () => {
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.3 } },
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.8 },
    },
  };

  const overlayVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <section className='relative h-[100vh]'>
      {/* Background Image */}
      <motion.div
        className='absolute inset-0 z-0'
        initial='hidden'
        animate='visible'
      >
        <NextImage
          src='/images/hero4_img.jpg'
          alt='Hero Section'
          fill
          style={{ objectFit: 'cover' }}
          className='absolute'
        />
        {/* Overlay */}
        <motion.div
          className='absolute inset-0 bg-black/30'
          variants={overlayVariant}
        ></motion.div>
      </motion.div>

      {/* Text Content */}
      <div className='relative z-10 h-full layout flex flex-col justify-between items-center py-6 text-neutral-light'>
        <div></div>
        <div className='flex flex-col justify-center items-center gap-8 text-center'>
          <motion.h1
            className='xl:text-8xl lg:text-7xl sm:text-6xl text-4xl font-libre'
            variants={textVariant}
            initial='hidden'
            animate='visible'
          >
            Ride Bali
          </motion.h1>
          <motion.h1
            className='xl:text-9xl lg:text-8xl sm:text-7xl text-5xl font-libre'
            variants={textVariant}
            initial='hidden'
            animate='visible'
          >
            Destination
          </motion.h1>
        </div>
        <div className='flex justify-between w-full'>
          <motion.p
            className='text-lg'
            variants={textVariant}
            initial='hidden'
            animate='visible'
          >
            Explore the beauty of Bali with us
          </motion.p>
          <motion.div
            variants={buttonVariant}
            initial='hidden'
            animate='visible'
          >
            <ButtonLink
              href='/'
              className='btn btn-ghost hover:bg-black hover:text-white rounded-full border-1 border-white text-white'
            >
              Book Now
            </ButtonLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
