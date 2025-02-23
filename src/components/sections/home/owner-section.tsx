import NextImage from '@/components/NextImage';

const OwnerSection = () => {
  return (
    <section className='layout  rounded-3xl  relative overflow-hidden'>
      {/* Background Garis Dekoratif */}
      <div className='absolute top-0 left-0 w-2/5 h-full rounded-tl-3xl'></div>

      <div className='flex flex-col layout w-full items-center text-center'>
        {/* Divider dan Title */}
        <div className='flex justify-center items-center w-full gap-4'>
          <div className='flex-grow border-t border-gray-300'></div>
          <h3 className='text-green-600 text-lg font-semibold uppercase tracking-wide'>
            Meet Our Founder
          </h3>
          <div className='flex-grow border-t border-gray-300'></div>
        </div>

        <h2 className='text-5xl md:text-6xl font-extrabold text-gray-900 mt-3 leading-tight'>
          Ethan Carter
        </h2>
        <p className='text-xl text-gray-600 font-medium mt-1'>SEO & Founder</p>
      </div>

      <div className='relative flex flex-col md:flex-row items-center gap-12 mt-12'>
        {/* Gambar Owner */}

        <div className='relative z-10 w-full md:w-full flex justify-center '>
          <NextImage
            src='/images/owner.jpg'
            alt='Owner'
            fill
            className='w-96 h-96 object-cover rounded-xl shadow-xl'
            imageClassName='rounded-xl shadow-xl'
          />
        </div>
      </div>
    </section>
  );
};

export default OwnerSection;
