import React from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

const ContactInfoSection: React.FC = () => {
  const contactInfos = [
    {
      id: 1,
      icon: <FaPhoneAlt className='text-2xl text-primary' />,
      title: '+6281990104720',
      description: 'Admin Ride Bali Explore',
      link: 'https://api.whatsapp.com/send/?phone=6281990104720&text=Hello%2C%20I%20want%20to%20ask%20about%20your%20services.&type=phone_number&app_absent=0',
    },
    {
      id: 2,
      icon: <FaEnvelope className='text-2xl text-white' />,
      title: 'ridebaliexplore@gmail.com',
      description:
        'Send us an email for any inquiries or questions you may have.',
      link: 'mailto:ridebaliexplore@gmail.com',
    },
    {
      id: 3,
      icon: <FaMapMarkerAlt className='text-2xl text-primary' />,
      title: 'Gianyar, Bali, Indonesia',
      description:
        'Visit our office in Gianyar, Bali, Indonesia for more information.',
      link: 'https://maps.app.goo.gl/epSR4s1EFZZ78Yt76',
    },
  ];

  return (
    <section className='py-12 '>
      <div className='layout grid grid-cols-1 md:grid-cols-3 gap-8 '>
        <div
          key={contactInfos[0].id}
          className={`px-6 py-12 rounded-xl shadow-md hover:shadow-lg transition text-center ${
            contactInfos[0].id === 2 ? 'bg-gray-800 text-white' : 'bg-white'
          }`}
        >
          <div
            className={`flex justify-center mb-4 ${
              contactInfos[0].id === 2 ? 'text-white' : ''
            }`}
          >
            {contactInfos[0].icon}
          </div>
          <h3 className='text-xl font-semibold mb-2'>
            {contactInfos[0].title}
          </h3>
          <p
            className={`text-sm mb-4 ${
              contactInfos[0].id === 2 ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            {contactInfos[0].description}
          </p>
          <a
            href={contactInfos[0].link}
            target='_blank'
            className={`text-sm font-medium hover:underline ${
              contactInfos[0].id === 2 ? 'text-white' : 'text-primary'
            }`}
          >
            Contact via Whatsapp &rarr;
          </a>
        </div>
        <div
          key={contactInfos[1].id}
          className={`px-6 py-12 rounded-xl shadow-md hover:shadow-lg transition text-center ${
            contactInfos[1].id === 2 ? 'bg-gray-800 text-white' : 'bg-white'
          }`}
        >
          <div
            className={`flex justify-center mb-4 ${
              contactInfos[1].id === 2 ? 'text-white' : ''
            }`}
          >
            {contactInfos[1].icon}
          </div>
          <h3 className='text-xl font-semibold mb-2'>
            {contactInfos[1].title}
          </h3>
          <p
            className={`text-sm mb-4 ${
              contactInfos[1].id === 2 ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            {contactInfos[1].description}
          </p>
          <a
            href={contactInfos[1].link}
            target='_blank'
            className={`text-sm font-medium hover:underline ${
              contactInfos[1].id === 2 ? 'text-white' : 'text-primary'
            }`}
          >
            Contact email &rarr;
          </a>
        </div>
        <div
          key={contactInfos[2].id}
          className={`px-6 py-12 rounded-xl shadow-md hover:shadow-lg transition text-center ${
            contactInfos[2].id === 2 ? 'bg-gray-800 text-white' : 'bg-white'
          }`}
        >
          <div
            className={`flex justify-center mb-4 ${
              contactInfos[2].id === 2 ? 'text-white' : ''
            }`}
          >
            {contactInfos[2].icon}
          </div>
          <h3 className='text-xl font-semibold mb-2'>
            {contactInfos[2].title}
          </h3>
          <p
            className={`text-sm mb-4 ${
              contactInfos[2].id === 2 ? 'text-gray-300' : 'text-gray-600'
            }`}
          >
            {contactInfos[2].description}
          </p>
          <a
            href={contactInfos[2].link}
            target='_blank'
            className={`text-sm font-medium hover:underline ${
              contactInfos[2].id === 2 ? 'text-white' : 'text-primary'
            }`}
          >
            Our Office &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
