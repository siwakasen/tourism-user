import NextImage from '@/components/NextImage';
import DestinationList from '@/components/sections/destination-list';

const PackagesTourOverviewSection = () => {
  return (
    <>
      <section>
        <div className='flex flex-col layout w-full '>
          <h2 className='divider divide-solid divide-y-12 divider-start xl:text-xl sm:text-lg text-sm '>
            Feature Destination
          </h2>

          <h1 className='xl:text-5xl sm:text-3xl text-2xl font-libre'>
            Explore one of the beautiful places in Bali with us, we guarantee
            comfort and safety during your journey.
          </h1>
          <div className='sm:h-[6rem] h-[2rem]'></div>
          <div className='sm:flex justify-between items-end '>
            <div className='sm:order-2 order-1'>
              <NextImage
                src='/images/hero3_img.jpg'
                alt='#'
                width={600}
                height={500}
                layout='responsive'
                objectFit='cover'
                sizes='(max-width: 500px) 100vw, 500px'
                imageClassName='sm:rounded-2xl rounded-lg'
              />
            </div>
            <div className='sm:order-1 order-2 w-full mr-[20%] sm:mt-0 mt-[2rem]'>
              <DestinationList />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PackagesTourOverviewSection;
