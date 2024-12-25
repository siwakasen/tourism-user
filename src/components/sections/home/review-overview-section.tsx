import ReviewCard from '@/components/common/cards/review-card';

const ReviewOverviewSection = () => {
  return (
    <section>
      <div className='flex flex-col layout w-full '>
        <h2 className='divider divide-solid divide-y-12 divider-start xl:text-xl sm:text-lg text-sm font-libre'>
          Testimonial
        </h2>
        <div className='flex sm:flex-row flex-col gap-8 mt-[2rem]'>
          <div className='flex flex-col sm:w-1/3 '>
            <h1 className='xl:text-5xl sm:text-3xl text-2xl font-libre'>
              Don't Just Take World for it, See What Our Traveler Say
            </h1>
          </div>
          <div className='flex sm:w-2/3 w-full'>
            <div className='flex xl:flex-row flex-col gap-6'>
              <ReviewCard
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolores, facilis a officia unde consectetur necessitatibus magni vero labore magnam quia earum nisi exercitationem reprehenderit sed illum explicabo. Eligendi, tempore.'
                profile={{
                  name: 'John Doe',
                  origin: 'USA',
                  image: '/images/profile1.jpg',
                }}
              />
              <ReviewCard
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolores, facilis a officia unde consectetur necessitatibus magni vero labore magnam quia earum nisi exercitationem reprehenderit sed illum explicabo. Eligendi, tempore.'
                profile={{
                  name: 'John Doe',
                  origin: 'USA',
                  image: '/images/profile1.jpg',
                }}
              />
              <ReviewCard
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt dolores, facilis a officia unde consectetur necessitatibus magni vero labore magnam quia earum nisi exercitationem reprehenderit sed illum explicabo. Eligendi, tempore.'
                profile={{
                  name: 'John Doe',
                  origin: 'USA',
                  image: '/images/profile1.jpg',
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewOverviewSection;
