'use client';
import React from 'react';

import { PackageTour } from '@/__interfaces/package-tour.interface';

interface DestinationListProps {
  listPackageTour: PackageTour[];
}

const DestinationList: React.FC<DestinationListProps> = ({
  listPackageTour,
}) => {
  return (
    <div className='w-full mx-auto  text-black'>
      {listPackageTour.map((item, index) => (
        <div
          key={index}
          className={`flex items-center justify-between p-4 border-b ${
            index === 0 ? 'bg-slate-200' : ''
          }`}
        >
          {/* Left Section */}
          <span className='xl:text-lg text-sm font-semibold'>
            {item.package_name}
          </span>
          {/* Right Section */}
          <div className='flex items-center gap-2'>
            <span className='border border-black rounded-full xl:px-3 px-1 xl:py-1 xl:text-sm text-[10px] font-medium'>
              {item.pickup_areas[0]}
            </span>
            <span className='border rounded-full px-3 py-1 text-sm font-medium'>
              {item.duration}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DestinationList;
