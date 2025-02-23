import NextImage from '@/components/NextImage';

import { Driver } from '@/__interfaces/driver.interface';
import { getImageDriver } from '@/__utils/get-image-helper';

interface DriverCardProps {
  driver: Driver;
}
const DriverCard = ({ driver }: DriverCardProps) => {
  return (
    <div className=' w-48 h-56 bg-white rounded-2xl shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg'>
      <div className='w-full h-3/5'>
        <NextImage
          src={getImageDriver(`drivers-images/${driver?.photo_profile ?? ''}`)}
          alt='/images/people.jpg'
          fill
          className='object-cover'
        />
      </div>

      <div className='absolute inset-0 bg-black bg-opacity-10 opacity-0 hover:opacity-100 transition-opacity duration-300'></div>
      <div className='h-2/5 flex flex-col items-center p-3'>
        <h3 className='text-lg font-semibold text-gray-800'>{driver.name}</h3>
        <p className='text-sm text-gray-500'>Driver</p>
      </div>
    </div>
  );
};

export default DriverCard;
