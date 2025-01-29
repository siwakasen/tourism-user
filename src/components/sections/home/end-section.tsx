import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import ButtonLink from '@/components/common/links/ButtonLink';
import NextImage from '@/components/NextImage';

const EndSection = () => {
  const fadeUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1.2, ease: 'easeIn' } },
  };

  // Hook untuk mendeteksi apakah elemen dalam viewport
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Animasi akan terpicu saat 20% dari elemen terlihat
  });

  return (
    <section className='relative' ref={ref}>
      {/* Background Layer */}
      <motion.div
        className='absolute inset-0 z-0'
        style={{
          WebkitMaskImage:
            'linear-gradient(to top, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 100%)',
          maskImage:
            'linear-gradient(to top, rgba(0, 0, 0, 1) 30%, rgba(0, 0, 0, 0) 100%)',
          WebkitMaskSize: '100% 100%',
          maskSize: '100% 100%',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
        }}
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
        variants={fadeInVariant}
      >
        <div className='relative w-full h-full overflow-hidden backdrop-blur-lg'>
          <NextImage
            src='/images/hero3_img.jpg'
            alt='Footer Background'
            fill
            style={{ objectFit: 'cover' }}
            className='absolute'
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className='relative z-10 layout flex flex-col justify-center items-center gap-8 py-16 text-center'>
        <motion.span
          className='divider divide-solid divide-y-12 divider-start xl:text-xl sm:text-lg text-sm font-libre text-slate-700'
          variants={fadeUpVariant}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
        >
          Begin your journey
        </motion.span>
        <motion.h2
          className='xl:text-6xl sm:text-5xl text-3xl sm:px-[15%] px-[5%] text-slate-900 '
          variants={fadeUpVariant}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
        >
          Let's Just Get Travel Around The World
        </motion.h2>
        <motion.p
          className='hidden xl:block xl:px-[25%] sm:px-[15%] px-[5%] text-slate-900 sm:text-lg text-sm shadow-slate-600'
          variants={fadeUpVariant}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
        >
          Ready to turn your dreams into reality? Get in touch with us today and
          let's start planning your next adventure!
        </motion.p>
        <motion.div
          variants={fadeUpVariant}
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
        >
          <ButtonLink
            href='/packages-tour'
            className='hover:bg-green-800 shadow-lg font-bold btn btn-ghost rounded-2xl border-1 border-black bg-black px-6 text-white'
          >
            Join the Trip
          </ButtonLink>
        </motion.div>
      </div>

      {/* Footer */}
      <div className='sm:h-[6rem] h-[2rem]'></div>
    </section>
  );
};

export default EndSection;
