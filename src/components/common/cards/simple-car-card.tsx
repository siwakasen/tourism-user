import { formatCurrency } from '@/lib/helpers/currency';

import UnstyledLink from '@/components/common/links/UnstyledLink';
import NextImage from '@/components/NextImage';

import { Car } from '@/__interfaces/car-tour.interface';
import { getImageUrl } from '@/__utils/get-image-helper';

interface SimpleCarCardProps {
  car: Car;
}

const SimpleCarCard = ({ car }: SimpleCarCardProps) => {
  return (
    <UnstyledLink
      href={`/cars/${car.id}`}
      className='group relative max-w-[20rem] w-full shadow-md bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300'
    >
      {/* Image Section */}
      <div className='relative h-[12rem]'>
        <NextImage
          src={getImageUrl(`car-images/${car?.car_image ?? ''}`)}
          alt={car.car_name}
          fill
          className='object-cover'
        />
      </div>

      {/* Card Body */}
      <div className='p-4 flex flex-col gap-2'>
        <h3 className='font-semibold text-lg text-gray-800'>{car.car_name}</h3>
        <p className='text-gray-600 text-sm line-clamp-2'>{car.description}</p>

        {/* Car Capacity Section */}
        <div className='text-sm text-gray-600'>
          <p>
            👥 Min: {car.min_person} - Max: {car.max_person} persons
          </p>
        </div>

        {/* Price Section */}
        <div className='mt-2 text-gray-700 flex justify-between items-center'>
          <p className='text-sm font-medium'>Price:</p>
          <p className='font-semibold text-base text-black'>
            {formatCurrency(car.price, 'USD')}
          </p>
        </div>

        {/* Brand Section */}
        <div className='mt-2 text-gray-500 text-sm'>
          <p>Brand: {car.brand.brand_name}</p>
        </div>
      </div>
    </UnstyledLink>
  );
};

export default SimpleCarCard;
