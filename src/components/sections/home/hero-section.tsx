import ButtonLink from '@/components/common/links/ButtonLink';
import NextImage from '@/components/NextImage';

const HeroSection = () => {
  return (
    <section className='relative h-[90vh]'>
      {/* Background Image */}
      <div className='absolute inset-0 z-0'>
        <NextImage
          src='/images/hero4_img.jpg'
          alt='Hero Section'
          fill
          style={{ objectFit: 'cover' }}
          className='absolute'
        />
        {/* Overlay */}
        <div className='absolute inset-0 bg-black/30'></div>
      </div>

      {/* Text Content */}
      <div className='relative z-10 h-full layout flex flex-col justify-between items-center py-6 text-neutral-light'>
        <div></div>
        <div className='flex flex-col justify-center items-center gap-8 text-center'>
          <h1 className='xl:text-8xl lg:text-7xl sm:text-6xl text-4xl font-libre'>
            Ride Bali
          </h1>
          <h1 className='xl:text-9xl lg:text-8xl sm:text-7xl text-5xl font-libre'>
            Destination
          </h1>
        </div>
        <div className='flex justify-between w-full'>
          <p className='text-lg'>Explore the beauty of Bali with us</p>
          <ButtonLink
            href='/'
            className='btn btn-ghost rounded-2xl border-1 border-white text-white'
          >
            Learn More
          </ButtonLink>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
