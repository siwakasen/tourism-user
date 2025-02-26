import { formatCurrency } from '@/lib/helpers/currency';

import ButtonLink from '@/components/common/links/ButtonLink';
import NextImage from '@/components/NextImage';

import { Car } from '@/__interfaces/car-tour.interface';
import { getImageUrl } from '@/__utils/get-image-helper';
interface CarCardProps {
  car: Car;
}

const CarCard = ({ car }: CarCardProps) => {
  return (
    <div className='group relative card 2xl:max-w-[90%] xl:max-w-[75%] sm:max-w-[85%] max-w-[95%] xl:w-[30rem] lg:w-[22rem] sm:w-[28rem] w-[90%] shadow-xl  bg-neutral-light sm:h-[32rem] h-[28rem] rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 m-0'>
      {/* Image Section */}
      <div className='relative h-[40%] '>
        <NextImage
          src={getImageUrl(`car-images/${car?.car_image ?? ''}`)}
          alt={car.car_name}
          fill
          className='object-cover'
        />
      </div>

      {/* Card Body */}
      <div className='card-body px-4 py-4 max-h-[60%] justify-between gap-2 '>
        <div>
          {/* Title and Description */}
          <div>
            <h2 className='card-title text-black flex justify-between items-center text-lg'>
              {car.car_name}
            </h2>
            <p className='text-gray-600 text-xs mb-2 line-clamp-3'>
              {car.description}
            </p>
            <div className='border-t-2 border-gray-200 mt-2 mb-4'></div>
          </div>
          {/* Content Section */}
          <div className='mb-4 max-h-20 overflow-hidden '>
            <ul className='list-disc list-inside text-gray-700 text-sm'>
              <li>Brand: {car.brand.brand_name}</li>
              <li>Min Capacity: {car.min_person}</li>
              <li>Max Capacity: {car.max_person}</li>
              {car.includes.slice(0, 3).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pricing Section */}
        <div className='bg-gray-200 rounded-xl border-gray-300 border sm:p-4 py-2 px-4 flex flex-row justify-between items-center'>
          <p className='text-gray-700 max-w-[50%] text-xs'>
            Get the best value for your trip
          </p>
          <div className='text-black text-right '>
            <p className='font-semibold text-base'>
              {formatCurrency(car.price, 'IDR')}
              <span className='text-sm'> /Day</span>
            </p>
          </div>
        </div>
      </div>

      {/* Hover Overlay */}
      <ButtonLink
        className='absolute inset-0 bg-transparent border-transparent hover:bg-transparent hover:border-transparent'
        href={`/cars/${car.id}`}
      >
        <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300'>
          {/* Gambar muncul saat hover */}
          <NextImage
            src={getImageUrl(`car-images/${car?.car_image ?? ''}`)}
            alt={car.car_name}
            fill
            className='object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300'
          />
          <div className='absolute inset-0 bg-black bg-opacity-25 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300'>
            <p className='text-white font-semibold text-lg'>
              Click for details
            </p>
          </div>
        </div>
      </ButtonLink>
    </div>
  );
};

export default CarCard;
