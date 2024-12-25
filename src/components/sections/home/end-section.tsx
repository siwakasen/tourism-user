import Footer from '@/components/common/layouts/bottombar';
import ButtonLink from '@/components/common/links/ButtonLink';
import NextImage from '@/components/NextImage';

const EndSection = () => {
  return (
    <section className='relative '>
      {/* Background Layer */}
      <div
        className='absolute inset-0 z-0'
        style={{
          WebkitMaskImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))',
          maskImage:
            'linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))',
          WebkitMaskSize: '100% 100%',
          maskSize: '100% 100%',
          WebkitMaskRepeat: 'no-repeat',
          maskRepeat: 'no-repeat',
        }}
      >
        <div className='relative w-full h-full overflow-hidden'>
          <NextImage
            src='/images/hero3_img.jpg'
            alt='End Section Background'
            fill
            style={{ objectFit: 'cover' }}
            className='absolute'
          />
        </div>
      </div>

      {/* Content */}
      <div className='relative z-10 layout flex flex-col justify-center items-center gap-8 py-16 text-center'>
        <span className='divider divide-solid divide-y-12 divider-start xl:text-xl sm:text-lg text-sm font-libre text-gray-600'>
          Feature Destination
        </span>
        <h2 className='xl:text-6xl sm:text-5xl text-3xl sm:px-[15%] px-[5%] text-black mt-[8rem]'>
          Let's Just Get Travel Around The World
        </h2>
        <p className='xl:px-[25%] sm:px-[15%] px-[5%] text-gray-500 sm:text-lg text-sm'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus dolorum fugiat vel deserunt neque, accusantium
          dignissimos tempore similique quam iure libero perferendis eaque
          voluptatem ipsam impedit ipsa aut earum ad.
        </p>
        <ButtonLink
          href='/'
          className='btn btn-ghost rounded-2xl border-1 border-black bg-black px-6 text-white'
        >
          Join the Trip
        </ButtonLink>
      </div>

      {/* Footer */}
      <div className='sm:h-[6rem] h-[2rem]'></div>
      <Footer />
    </section>
  );
};

export default EndSection;
