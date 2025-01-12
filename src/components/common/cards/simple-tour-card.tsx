import { formatCurrency } from '@/lib/helpers/currency';

import NextImage from '@/components/NextImage';

import { PackageTour } from '@/__interfaces/package_tour.interface';

interface SimpleTourPackageCardProps {
  packagetour: PackageTour;
}

const SimpleTourPackageCard = ({ packagetour }: SimpleTourPackageCardProps) => {
  return (
    <div className='group relative max-w-[20rem] w-full shadow-md bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300'>
      {/* Image Section */}
      <div className='relative h-[12rem]'>
        <NextImage
          src={packagetour.images[0]}
          alt={packagetour.package_name}
          fill
          className='object-cover'
        />
      </div>

      {/* Card Body */}
      <div className='p-4 flex flex-col gap-2'>
        <h3 className='font-semibold text-lg text-gray-800'>
          {packagetour.package_name}
        </h3>
        <p className='text-gray-600 text-sm line-clamp-2'>
          {packagetour.description}
        </p>

        {/* Price Section */}
        <div className='mt-2 text-gray-700 flex justify-between items-center'>
          <p className='text-sm font-medium'>From:</p>
          <p className='font-semibold text-base text-black'>
            {formatCurrency(packagetour.package_price, 'USD')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimpleTourPackageCard;
