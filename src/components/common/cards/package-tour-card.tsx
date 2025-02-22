import { formatCurrency } from '@/lib/helpers/currency';

import ButtonLink from '@/components/common/links/ButtonLink';
import NextImage from '@/components/NextImage';

import { PackageTour } from '@/__interfaces/package-tour.interface';
import { getImageUrl } from '@/__utils/get-image-helper';
interface TourPackageCardProps {
  packagetour: PackageTour;
}

const TourPackageCard = ({ packagetour }: TourPackageCardProps) => {
  return (
    <div className='group relative card 2xl:max-w-[90%] xl:max-w-[75%] sm:max-w-[85%] max-w-[95%] xl:w-[30rem] lg:w-[22rem] sm:w-[28rem] w-[90%] shadow-xl  bg-neutral-light sm:h-[32rem] h-[28rem] rounded-2xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 m-0'>
      {/* Image Section */}
      <div className='relative h-[40%] '>
        <NextImage
          src={getImageUrl(`tour-images/${packagetour?.images[0] ?? ''}`)}
          alt={packagetour.package_name}
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
              {packagetour.package_name}
            </h2>
            <p className='text-gray-600 text-xs mb-2 line-clamp-3'>
              {packagetour.description}
            </p>
            <div className='border-t-2 border-gray-200 mt-2 mb-4'></div>
          </div>
          {/* Content Section */}
          <div className='mb-4 max-h-20 overflow-hidden '>
            <ul className='list-disc list-inside text-gray-700 text-sm'>
              {packagetour.itineraries.slice(0, 3).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Pricing Section */}
        <div className='bg-gray-200 rounded-xl border-gray-300 border sm:p-4 py-2 px-4 flex flex-row justify-between items-center'>
          <p className='text-gray-700 max-w-[50%] text-xs'>
            This price is lower than the average price in February
          </p>
          <div className='text-black text-right '>
            <p className='font-semibold text-base'>
              {formatCurrency(packagetour.package_price, 'USD')}
              <span className='text-sm'> /Person</span>
            </p>
            <p className='sm:text-sm text-xs'>
              Total Price{' '}
              <span className='font-semibold sm:text-base'>
                {formatCurrency(
                  packagetour.package_price * packagetour.max_group_size,
                  'USD'
                )}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Hover Overlay */}
      <ButtonLink
        className='absolute inset-0 bg-transparent border-transparent hover:bg-transparent hover:border-transparent'
        href={`/packages-tour/${packagetour.id}`}
      >
        <div className='absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center transition-opacity duration-300'>
          {/* Gambar muncul saat hover */}
          <NextImage
            src={getImageUrl(`tour-images/${packagetour?.images[0] ?? ''}`)}
            alt={packagetour.package_name}
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

export default TourPackageCard;
