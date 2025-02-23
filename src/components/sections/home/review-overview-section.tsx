import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

import ReviewCard from '@/components/common/cards/review-card';
import UseListTestimonial from '@/_hooks/testimonials/testimonial';

const ReviewOverviewSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { testimonials, isLoading } = UseListTestimonial();

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3;

  // Fungsi untuk berpindah ke testimonial berikutnya
  const handleNext = () => {
    if (currentIndex + itemsPerPage < testimonials.length) {
      setCurrentIndex(currentIndex + itemsPerPage);
    } else {
      setCurrentIndex(0); // Reset ke awal jika sudah di akhir
    }
  };

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
          <motion.div
            className='flex sm:w-2/3 w-full flex-col'
            variants={textVariant}
          >
            <div className='flex xl:flex-row flex-col gap-6'>
              {testimonials
                .slice(currentIndex, currentIndex + itemsPerPage)
                .map((testimonial) => (
                  <>
                    {' '}
                    <motion.div
                      key={testimonial.id}
                      className='sm:max-w-full xl:max-w-1/3'
                      variants={cardVariant}
                      initial='hidden'
                      animate={inView ? 'visible' : 'hidden'}
                    >
                      <ReviewCard testimonial={testimonial} />
                    </motion.div>
                  </>
                ))}
            </div>

            {/* Tombol Next */}
            {testimonials.length > itemsPerPage && (
              <div className='flex justify-center mt-6'>
                <button
                  onClick={handleNext}
                  className='px-6 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition'
                >
                  Next
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ReviewOverviewSection;
