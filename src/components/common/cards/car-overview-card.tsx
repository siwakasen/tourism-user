import { formatCurrency } from '@/lib/helpers/currency';

import ButtonLink from '@/components/common/links/ButtonLink';
import NextImage from '@/components/NextImage';

interface CarOverviewCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
}

const CarOverviewCard = ({
  description,
  image,
  price,
  title,
}: CarOverviewCardProps) => {
  return (
    <div className='flex flex-col gap-2'>
      <NextImage
        src={image}
        alt='#'
        width={600}
        height={500}
        fill
        style={{ objectFit: 'cover' }}
        sizes='(max-width: 500px) 100vw, 500px'
        imageClassName='sm:rounded-2xl rounded-lg'
      />
      <h3 className='text-black'>{title}</h3>
      <p>
        <span>{'Activity : '}</span>
        {description}
      </p>
      <div className='flex items-center mt-2 gap-6'>
        <ButtonLink
          href='/'
          className='btn btn-ghost rounded-2xl border-1 border-black text-black'
        >
          Book Trip
        </ButtonLink>
        <p className='xl:text-2xl sm:text-xl text-2xl text-black'>
          {formatCurrency(price, 'USD')}
        </p>
      </div>
    </div>
  );
};

export default CarOverviewCard;
