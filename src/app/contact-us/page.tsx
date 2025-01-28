'use client';

import { motion } from 'framer-motion';
import React from 'react';
import { useInView } from 'react-intersection-observer';
import '@/lib/env';

import NextImage from '@/components/NextImage';
import ContactInfoSection from '@/components/sections/contact-us/contact-section';
import ContactSection from '@/components/sections/contact-us/form-section';

export default function ContactUs() {
  // Variants for motion
  const fadeInVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: 'easeIn' } },
  };

  const slideUpVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const backgroundVariant = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, ease: 'easeIn' } },
  };

  // Hook to trigger animation when in view
  const { ref: heroRef, inView: heroInView } = useInView({
    triggerOnce: true,
    threshold: 0.2, // Animates when 20% of the element is visible
  });

  const { ref: infoRef, inView: infoInView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const { ref: formRef, inView: formInView } = useInView({
    triggerOnce: true,
    threshold: 0.0,
  });

  return (
    <div className='flex flex-col gap-16 bg-neutral-light scroll-smooth'>
      {/* Hero Section */}
      <section className='relative sm:h-[50vh] h-[40vh]' ref={heroRef}>
        <motion.div
          className='absolute inset-0 z-0'
          variants={backgroundVariant}
          initial='hidden'
          animate={heroInView ? 'visible' : 'hidden'}
        >
          <NextImage
            src='/images/bali_1.jpg'
            alt='Hero Section'
            fill
            style={{ objectFit: 'cover' }}
            className='absolute'
          />
          {/* Gradient Overlay */}
          <div className='absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent'></div>
        </motion.div>

        <motion.div
          className='flex flex-col justify-center items-center sm:h-[50vh] h-[40vh] gap-6 relative z-10'
          variants={slideUpVariant}
          initial='hidden'
          animate={heroInView ? 'visible' : 'hidden'}
        >
          <div className='layout flex flex-col justify-center items-center text-neutral-light gap-6'>
            <motion.h1
              id='contact-us-heading'
              className='xl:text-6xl sm:text-5xl text-4xl font-bold text-white drop-shadow-lg text-center'
              variants={fadeInVariant}
              initial='hidden'
              animate={heroInView ? 'visible' : 'hidden'}
            >
              Contact Us
            </motion.h1>
            <motion.p
              className='xl:px-[25%] sm:px-[20%] px-[10%] text-center text-lg text-white leading-relaxed'
              variants={fadeInVariant}
              initial='hidden'
              animate={heroInView ? 'visible' : 'hidden'}
            >
              Have any questions? Reach out to us, and our team will get back to
              you as soon as possible. Your adventure starts here!
            </motion.p>
          </div>
        </motion.div>
      </section>

      {/* Contact Info Section */}
      <motion.section
        className='relative z-10 -top-[12rem]'
        ref={infoRef}
        variants={slideUpVariant}
        initial='hidden'
        animate={infoInView ? 'visible' : 'hidden'}
      >
        <ContactInfoSection />
      </motion.section>

      {/* Contact Form Section */}
      <motion.section
        className='relative z-10'
        ref={formRef}
        variants={slideUpVariant}
        initial='hidden'
        animate={formInView ? 'visible' : 'hidden'}
      >
        <ContactSection />
      </motion.section>
    </div>
  );
}
