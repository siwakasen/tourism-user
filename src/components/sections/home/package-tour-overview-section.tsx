'use client';
import NextImage from '@/components/NextImage';
import DestinationList from '@/components/sections/destination-list';

const PackagesTourOverviewSection = () => {
  return (
    <>
      <section>
        <div className='flex flex-col layout '>
          <h2 className='divider divide-solid divide-y-12 divider-start text-xl'>
            Feature Destination
          </h2>

          <h1 className='text-5xl'>
            Explore one of the beautiful places in Bali with us, we guarantee
            comfort and safety during your journey.
          </h1>
          <div className='h-12'></div>
          <div className='flex justify-between items-end hero-content '>
            <div>
              <DestinationList />
            </div>
            <div className='bg-yellow-100'>
              <NextImage
                src='/images/hero3_img.jpg'
                alt='#'
                width={500}
                height={400}
                layout='responsive'
                objectFit='cover'
                sizes='(max-width: 400px) 100vw, 400px'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PackagesTourOverviewSection;
