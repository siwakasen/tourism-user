import { motion } from 'framer-motion';

import NextImage from '@/components/NextImage';

const OwnerSection = () => {
  return (
    <section className='layout rounded-3xl relative overflow-hidden py-8 '>
      {/* Background Garis Dekoratif */}
      <div className='absolute top-0 left-0 w-2/5 h-full rounded-tl-3xl'></div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className='flex flex-col layout w-full items-center text-center'
      >
        {/* Divider dan Title */}
        <div className='flex justify-center items-center w-full gap-4'>
          <div className='flex-grow border-t border-gray-300'></div>
          <h3 className='text-black text-lg font-semibold uppercase tracking-wide'>
            Meet Our Team
          </h3>
          <div className='flex-grow border-t border-gray-300'></div>
        </div>
      </motion.div>

      <motion.div>
        <h1 className='sm:text-5xl text-3xl font-bold text-center mt-6'>
          Our Great Team
        </h1>
      </motion.div>

      <div className='relative w-full flex flex-col md:flex-row items-center justify-center gap-8 md:gap-[6rem] mt-12'>
        {/* Gambar Kiri - Sekretaris */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className='relative rounded-xl overflow-hidden text-center'
        >
          <div className='w-48 h-64 md:w-60 md:h-80'>
            <NextImage
              src='/images/owner.jpg'
              alt='Secretary'
              fill
              className='object-cover rounded-xl'
              imageClassName='rounded-xl shadow-xl'
            />
          </div>

          <h3 className='text-xl font-semibold mt-4'>Sarah Johnson</h3>
          <p className='text-gray-600'>Secretary</p>
        </motion.div>

        {/* Gambar Tengah - Owner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className='relative rounded-xl overflow-hidden text-center'
        >
          <div className='w-48 h-64 md:w-80 md:h-96'>
            <NextImage
              src='/images/owner.jpg'
              alt='Owner'
              fill
              className='object-cover rounded-xl'
              imageClassName='rounded-xl shadow-xl'
            />
          </div>

          <h3 className='text-xl font-semibold mt-4'>Ethan Carter</h3>
          <p className='text-gray-600'>CEO & Founder</p>
          <p className='text-lg font-medium text-gray-500'>The Great Founder</p>
        </motion.div>

        {/* Gambar Kanan - Manager */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className='relative rounded-xl overflow-hidden text-center'
        >
          <div className='w-48 h-64 md:w-60 md:h-80'>
            <NextImage
              src='/images/owner.jpg'
              alt='Manager'
              fill
              className='object-cover rounded-xl'
              imageClassName='rounded-xl shadow-xl'
            />
          </div>

          <h3 className='text-xl font-semibold mt-4'>Michael Smith</h3>
          <p className='text-gray-600'>Manager</p>
        </motion.div>
      </div>
    </section>
  );
};

export default OwnerSection;
