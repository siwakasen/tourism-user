import { motion, useAnimation } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import ButtonLink from '@/components/common/links/ButtonLink';
import NextImage from '@/components/NextImage';

const superiorities = [
  {
    title: 'Enjoy a great journey tailored just for you',
    description: 'We provide the best experiences for our customers.',
  },
  {
    title: 'Affordable and reliable services',
    description: 'Experience the best quality at a reasonable price.',
  },
  {
    title: 'Trusted by thousands',
    description: 'Join the community of happy travelers.',
  },
  {
    title: 'Wide range of options',
    description: 'From budget-friendly to luxurious travels.',
  },
];

const WhyChooseUsSection = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2, // 20% visible to trigger
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
      <motion.div
        className='flex flex-col layout w-full'
        initial='hidden'
        animate={controls}
        variants={containerVariants}
      >
        <motion.h2
          className='divider divide-solid divide-y-12 divider-start xl:text-xl sm:text-lg text-sm'
          variants={itemVariants}
        >
          Why Choose Us
        </motion.h2>

        <motion.div
          className='grid grid-cols-5 xl:gap-[12rem] sm:gap-[6rem] gap-[2rem]'
          variants={itemVariants}
        >
          <div className='sm:col-span-2 col-span-5'>
            <h3 className='xl:text-5xl sm:text-3xl text-2xl'>
              Your Trusted Partner In Travel
            </h3>
          </div>
          <div className='sm:col-span-3 col-span-5 flex justify-end items-center'>
            <div className='flex items-center gap-6'>
              <p className='text-lg'>For More Information, please</p>
              <div className='flex'>
                <ButtonLink
                  href='/'
                  className='btn btn-ghost rounded-2xl border-1 border-black text-black'
                >
                  Learn More
                </ButtonLink>
              </div>
            </div>
          </div>
        </motion.div>

        <div className='sm:h-[6rem] h-[2rem]'></div>

        <motion.div
          className='grid grid-cols-5 xl:gap-[12rem] sm:gap-[6rem] gap-[2rem]'
          variants={containerVariants}
        >
          <div className='sm:col-span-2 col-span-5'>
            <NextImage
              src='/images/hero3_img.jpg'
              alt='Travel Image'
              width={300}
              height={200}
              imageClassName='rounded-2xl'
            />
          </div>
          <div className='sm:col-span-3 col-span-5 flex justify-start items-start gap-6'>
            <div className='flex flex-col gap-6 w-full'>
              {superiorities.map((item, index) => (
                <motion.div
                  key={index}
                  className='flex gap-4 w-full'
                  variants={itemVariants}
                >
                  <h4 className='sm:text-2xl text-xl'>{index + 1}</h4>
                  <div className='flex flex-col w-full'>
                    <h4 className='text-black font-light sm:text-2xl text-xl'>
                      {item.title}
                    </h4>
                    <p>{item.description}</p>
                    <div className='mt-6 w-full border-t-2'></div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default WhyChooseUsSection;
