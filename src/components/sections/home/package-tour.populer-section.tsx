import NextImage from '@/components/NextImage';

const PackageTourPupulerSection = () => {
  return (
    <section>
      <div className='flex flex-col layout w-full '>
        <h2 className='divider divide-solid divide-y-12 divider-start xl:text-xl sm:text-lg text-sm'>
          Poppuler Destination 2024
        </h2>

        <div className='grid grid-cols-5 xl:gap-[12rem] sm:gap-[6rem] gap-[2rem]'>
          <div className='sm:col-span-2 col-span-5'>
            <h3 className='xl:text-5xl sm:text-3xl text-2xl'>
              Sunny Summer Exclusive
            </h3>
          </div>
          <div className='sm:col-span-3 col-span-5'>
            <h4 className='text-black font-light xl:text-2xl sm:text-xl text-lg'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              dolores, facilis a officia unde consectetur necessitatibus magni
              vero labore magnam quia earum nisi exercitationem reprehenderit
              sed illum explicabo. Eligendi, tempore.
            </h4>
          </div>
        </div>
        <div className='sm:h-[6rem] h-[2rem]'></div>
        <div className='grid grid-cols-5 xl:gap-[12rem] sm:gap-[6rem] gap-[2rem] '>
          <div className='sm:col-span-2 col-span-5 flex flex-col h-full justify-start'>
            <NextImage
              src='/images/hero3_img.jpg'
              alt='#'
              width={300}
              height={200}
              layout='responsive'
              imageClassName='rounded-2xl'
              objectFit='cover'
            />
            <p className='mt-2 font-semibold text-black lg:text-xl text-lg'>
              Monkey Forest{' '}
            </p>
          </div>

          <div className='sm:col-span-3 col-span-5  flex flex-col justify-end '>
            <NextImage
              src='/images/hero3_img.jpg'
              alt='#'
              width={600}
              height={500}
              layout='responsive'
              objectFit='cover'
              imageClassName='rounded-2xl'
            />
            <p className='mt-2 font-semibold text-black lg:text-xl text-lg'>
              Danau Tamblingan
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageTourPupulerSection;
