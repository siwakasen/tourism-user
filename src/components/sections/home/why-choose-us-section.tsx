import ButtonLink from '@/components/common/links/ButtonLink';
import NextImage from '@/components/NextImage';

const superiorities: {
  title: string;
  description: string;
}[] = [
  {
    title: 'Enjoy a great journey tailoared just for you',
    description: 'We provide',
  },
  {
    title: 'Enjoy a great journey tailoared just for you',
    description: 'We provide',
  },
  {
    title: 'Enjoy a great journey tailoared just for you',
    description: 'We provide',
  },
  {
    title: 'Enjoy a great journey tailoared just for you',
    description: 'We provide',
  },
];

const WhyChooseUsSection = () => {
  return (
    <section>
      <div className='flex flex-col layout w-full '>
        <h2 className='divider divide-solid divide-y-12 divider-start xl:text-xl sm:text-lg text-sm'>
          Why Choose Us
        </h2>

        <div className='grid grid-cols-5 xl:gap-[12rem] sm:gap-[6rem] gap-[2rem]'>
          <div className='sm:col-span-2 col-span-5'>
            <h3 className='xl:text-5xl sm:text-3xl text-2xl'>
              Your Trusted Partner In Travel
            </h3>
          </div>
          <div className='sm:col-span-3 col-span-5 flex justify-end items-center'>
            <div className='flex items-center gap-6'>
              <p className='text-lg'>For More Information, please</p>
              <div className='flex'>
                <ButtonLink
                  href='/'
                  className='btn btn-ghost rounded-2xl border-1 border-black text-black'
                >
                  Learn More
                </ButtonLink>
              </div>
            </div>
          </div>
        </div>
        <div className='sm:h-[6rem] h-[2rem]'></div>
        <div className='grid grid-cols-5 xl:gap-[12rem] sm:gap-[6rem] gap-[2rem]'>
          <div className='sm:col-span-2 col-span-5'>
            <NextImage
              src='/images/hero3_img.jpg'
              alt='#'
              width={300}
              height={200}
              layout='responsive'
              imageClassName='rounded-2xl'
              objectFit='cover'
            />
          </div>
          <div className='sm:col-span-3 col-span-5 flex justify-start items-start gap-6 '>
            <div className='flex flex-col gap-6 w-full'>
              {superiorities.map((item, index) => (
                <div key={index} className='flex gap-4 w-full'>
                  <h4 className='sm:text-2xl text-xl'>{index + 1}</h4>
                  <div className='flex flex-col w-full'>
                    <h4 className='text-black font-light sm:text-2xl text-xl'>
                      {item.title}
                    </h4>
                    <p>{item.description}</p>
                    <div className='mt-6 w-full border-t-2 '></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
