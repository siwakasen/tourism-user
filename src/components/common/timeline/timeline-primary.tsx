import React from 'react';

interface TimelineProps {
  items: string[];
}

const Timeline: React.FC<TimelineProps> = ({ items }) => {
  return (
    <div className='timeline timeline-vertical'>
      {items.map((item, index) => (
        <div key={index} className='relative flex gap-4 '>
          {/* Garis Vertikal dan Icon */}
          <div className='relative flex flex-col items-center'>
            {/* Icon Bulat */}
            <div className='h-3 w-3 rounded-full bg-gray-600'></div>
            {/* Garis Vertikal */}
            {index < items.length - 1 && (
              <div className='w-px flex-1 bg-gray-200'></div>
            )}
          </div>
          {/* Konten */}
          <div>
            {/* Tanggal */}
            {/* {index === 0 || items[index - 1].date !== item.date ? (
              <h3 className='text-xs font-medium uppercase text-gray-500 mb-2'>
                {item.date}
              </h3>
            ) : null} */}
            {/* Judul */}
            <h4 className='font-semibold text-gray-800'>{item}</h4>
            {/* Deskripsi (Opsional) */}
            {/* {item.description && (
              <p className='mt-1 text-sm text-gray-600'>{item.description}</p>
            )} */}
            <div className='h-8'></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
