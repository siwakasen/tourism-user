import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const ContactInfoSection: React.FC = () => {
  const contactInfos = [
    {
      id: 1,
      icon: <FaPhoneAlt className='text-2xl text-primary' />,
      title: '+(654) 6455 654',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar.',
      link: '#',
    },
    {
      id: 2,
      icon: <FaEnvelope className='text-2xl text-white' />,
      title: 'mail@txtils.com',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar.',
      link: '#',
    },
    {
      id: 3,
      icon: <FaMapMarkerAlt className='text-2xl text-primary' />,
      title: 'London Eye, UK',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis pulvinar.',
      link: '#',
    },
  ];

  return (
    <section className='py-12 '>
      <div className='layout grid grid-cols-1 md:grid-cols-3 gap-8 '>
        {contactInfos.map((info) => (
          <div
            key={info.id}
            className={`px-6 py-12 rounded-xl shadow-md hover:shadow-lg transition text-center ${
              info.id === 2 ? 'bg-gray-800 text-white' : 'bg-white'
            }`}
          >
            <div
              className={`flex justify-center mb-4 ${
                info.id === 2 ? 'text-white' : ''
              }`}
            >
              {info.icon}
            </div>
            <h3 className='text-xl font-semibold mb-2'>{info.title}</h3>
            <p
              className={`text-sm mb-4 ${
                info.id === 2 ? 'text-gray-300' : 'text-gray-600'
              }`}
            >
              {info.description}
            </p>
            <a
              href={info.link}
              className={`text-sm font-medium hover:underline ${
                info.id === 2 ? 'text-white' : 'text-primary'
              }`}
            >
              Learn More &rarr;
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactInfoSection;
