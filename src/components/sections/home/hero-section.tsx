import ButtonLink from '@/components/common/links/ButtonLink';
import NextImage from '@/components/NextImage';

const HeroSection = () => {
  return (
    <>
      <section className='relative h-[90vh]'>
        {/* Background Image */}
        <div className='absolute inset-0 z-0'>
          <div className='relative w-full h-[100%] overflow-hidden'>
            <NextImage
              src='/images/hero4_img.jpg'
              alt='Hero Section'
              layout='fill'
              objectFit='cover' // Memastikan gambar terpotong untuk mengisi layar
              className='absolute'
            />
          </div>

          {/* Overlay */}
          <div className='absolute inset-0 bg-black/30'></div>
        </div>

        {/* Text Content */}
        <div className='relative z-10 h-full'>
          <div className='flex flex-col justify-between items-center h-full text-neutral-light layout py-6'>
            <div></div>
            <div className='h-[20rem] flex flex-col justify-center items-center'>
              {/* <p className='text-2xl font-libre'>Let's Travel</p> */}
              <h1 className='xl:text-[14rem] text-[8rem] font-libre'>
                Tour Web
              </h1>
            </div>
            <div className='flex justify-between w-full'>
              <div className='flex items-center'>
                <p>Explore the beauty of Bali with us</p>
              </div>
              <div className='flex items-center'>
                <ButtonLink
                  href='/'
                  className='btn btn-ghost rounded-2xl border-1 border-white'
                >
                  Learn More
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
