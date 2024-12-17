'use client';
import React from 'react';

interface Destination {
  location: string;
  activity: string;
  rating: string;
}

const destinations: Destination[] = [
  { location: 'Santorini, Greece', activity: 'SWIMMING', rating: '5+' },
  { location: 'Machu Picchu, Peru', activity: 'EXPLORING', rating: '4+' },
  { location: 'Raja Ampat, Indonesia', activity: 'SNORKLING', rating: '3+' },
  { location: 'Sydney, Australia', activity: 'SIGHTSEEING', rating: '6+' },
];

const DestinationList: React.FC = () => {
  return (
    <div className='w-full max-w-lg mx-auto bg-gray-50'>
      {destinations.map((item, index) => (
        <div
          key={index}
          className={`flex items-center justify-between p-4 border-b ${
            index === 0 ? 'bg-slate-200' : ''
          }`}
        >
          {/* Left Section */}
          <span className='text-lg font-semibold'>{item.location}</span>

          {/* Right Section */}
          <div className='flex items-center gap-2'>
            <span className='border rounded-full px-3 py-1 text-sm font-medium'>
              {item.activity}
            </span>
            <span className='border rounded-full px-3 py-1 text-sm font-medium'>
              {item.rating}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DestinationList;
