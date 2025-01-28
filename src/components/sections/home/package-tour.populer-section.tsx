import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import NextImage from '@/components/NextImage';

import { PackageTour } from '@/__interfaces/package-tour.interface';
import { getImageUrl } from '@/__utils/get-image-helper';

interface PackageTourPopulerProps {
  listTourPackage: PackageTour[];
}

const PackageTourPupulerSection = ({
  listTourPackage,
}: PackageTourPopulerProps) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
  };

  return (
    <section ref={ref}>
      <motion.div
        className='flex flex-col layout w-full'
        variants={textVariant}
        initial='hidden'
        animate={inView ? 'visible' : 'hidden'}
      >
        <motion.h2
          className='divider divide-solid divide-y-12 divider-start xl:text-xl sm:text-lg text-sm'
          variants={textVariant}
        >
          Poppuler Destination 2025
        </motion.h2>

        <motion.div
          className='grid grid-cols-5 xl:gap-[12rem] sm:gap-[6rem] gap-[2rem]'
          variants={textVariant}
        >
          <div className='sm:col-span-2 col-span-5'>
            <motion.h3
              className='xl:text-5xl sm:text-3xl text-2xl'
              variants={textVariant}
            >
              Sunny Summer Exclusive
            </motion.h3>
          </div>
          <div className='sm:col-span-3 col-span-5'>
            <motion.h4
              className='text-black font-light xl:text-2xl sm:text-xl text-lg'
              variants={textVariant}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              dolores, facilis a officia unde consectetur necessitatibus magni
              vero labore magnam quia earum nisi exercitationem reprehenderit
              sed illum explicabo. Eligendi, tempore.
            </motion.h4>
          </div>
        </motion.div>

        <div className='sm:h-[6rem] h-[2rem]'></div>

        <motion.div
          className='grid grid-cols-5 xl:gap-[8rem] sm:gap-[6rem] gap-[2rem]'
          initial='hidden'
          animate={inView ? 'visible' : 'hidden'}
        >
          {/* Gambar Pertama */}
          <motion.div
            className='sm:col-span-2 col-span-5 flex flex-col h-[300px] w-full'
            variants={imageVariant}
          >
            <NextImage
              src={getImageUrl(
                `tour-images/${listTourPackage[0]?.images[0] ?? ''}`
              )}
              alt='Monkey Forest'
              fill
              style={{ objectFit: 'cover' }}
              imageClassName='rounded-2xl'
            />
            <p className='mt-2 font-semibold text-black lg:text-xl text-lg'>
              {listTourPackage[0].package_name}
            </p>
          </motion.div>

          {/* Gambar Kedua */}
          <motion.div
            className='sm:col-span-3 col-span-5 flex flex-col h-[500px] w-full'
            variants={imageVariant}
          >
            <NextImage
              src={getImageUrl(
                `tour-images/${listTourPackage[1]?.images[0] ?? ''}`
              )}
              alt='Danau Tamblingan'
              fill
              style={{ objectFit: 'cover' }}
              imageClassName='rounded-2xl'
            />
            <p className='mt-2 font-semibold text-black lg:text-xl text-lg'>
              {listTourPackage[1].package_name}
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default PackageTourPupulerSection;
