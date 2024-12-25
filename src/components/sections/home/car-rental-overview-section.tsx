import CarOverviewCard from '@/components/common/cards/car-overview-card';

const CarRentalOverview = () => {
  return (
    <section>
      <div className='flex flex-col layout w-full '>
        <h2 className='divider divide-solid divide-y-12 divider-start xl:text-xl sm:text-lg text-sm font-libre'>
          Our Car Rental
        </h2>

        <h1 className='xl:text-5xl sm:text-3xl text-2xl font-libre'>
          High-quality car rentals that will take you to see the beauty of the
          world.
        </h1>
        <div className='sm:h-[6rem] h-[2rem]'></div>
        <div className='flex flex-col sm:flex-row gap-12'>
          <div className='sm:w-1/2 w-[100%]'>
            <CarOverviewCard
              image='/images/hero3_img.jpg'
              title='Toyota Avanza'
              price={200000}
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolores, facilis a officia unde consectetur necessitatibus magni vero labore magnam quia earum nisi exercitationem reprehenderit sed illum explicabo. Eligendi, tempore.'
            />
          </div>
          <div className='xl:w-1/4 sm:w-1/2 w-full'>
            <CarOverviewCard
              image='/images/hero3_img.jpg'
              title='Toyota Avanza'
              price={200000}
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolores, facilis a officia unde consectetur necessitatibus magni vero labore magnam quia earum nisi exercitationem reprehenderit sed illum explicabo. Eligendi, tempore.'
            />
          </div>

          <div className='xl:w-1/4 sm:hidden xl:block  w-full '>
            <CarOverviewCard
              image='/images/hero3_img.jpg'
              title='Toyota Avanza'
              price={200000}
              description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolores, facilis a officia unde consectetur necessitatibus magni vero labore magnam quia earum nisi exercitationem reprehenderit sed illum explicabo. Eligendi, tempore.'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarRentalOverview;
