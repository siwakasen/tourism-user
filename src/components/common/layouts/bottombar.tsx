'use client';
import UnstyledLink from '@/components/common/links/UnstyledLink';
import NextImage from '@/components/NextImage';

interface FooterProps {
  hasBackground?: boolean; // Menentukan apakah footer memiliki background
  backgroundColor?: string; // Warna background jika ada
  textColor?: string; // Warna teks
}

const Footer = ({
  hasBackground = true,
  backgroundColor = 'bg-neutral-900',
  textColor = 'text-neutral-200',
}: FooterProps) => {
  return (
    <footer
      className={`py-10 ${
        hasBackground ? `${backgroundColor} shadow-xl ` : 'bg-transparent'
      } ${textColor}`}
    >
      <div className='layout px-0 flex flex-col md:flex-row justify-between items-center gap-10'>
        {/* Logo and Company Info */}
        <div className='flex flex-col items-center md:items-start text-center md:text-left'>
          <UnstyledLink href='/'>
            <NextImage
              alt='Company Logo'
              src='/images/logo_tour2.png'
              width={80}
              height={80}
              className='mb-4'
            />
          </UnstyledLink>
          <p className='text-sm text-neutral-200'>
            Discover the world with us. Explore destinations, create memories,
            and make every trip unforgettable.
          </p>
        </div>

        {/* Navigation Links */}
        <div className='flex flex-col items-center md:items-start'>
          <h6 className='text-lg font-semibold mb-4'>Quick Links</h6>
          <nav className='flex flex-col gap-2'>
            <UnstyledLink href='/about' className='text-sm hover:text-white'>
              About Us
            </UnstyledLink>
            <UnstyledLink href='/contact' className='text-sm hover:text-white'>
              Contact Us
            </UnstyledLink>
            <UnstyledLink href='/faq' className='text-sm hover:text-white'>
              FAQ
            </UnstyledLink>
            <UnstyledLink href='/privacy' className='text-sm hover:text-white'>
              Privacy Policy
            </UnstyledLink>
          </nav>
        </div>

        {/* Social Media Icons */}
        <div className='flex flex-col items-center md:items-end'>
          <h6 className='text-lg font-semibold mb-4'>Follow Us</h6>
          <div className='flex gap-4'>
            <a
              href='https://twitter.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-neutral-400 hover:text-white transition duration-300'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                className='fill-current'
              >
                <path d='M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z'></path>
              </svg>
            </a>
            <a
              href='https://youtube.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-neutral-400 hover:text-white transition duration-300'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='fill-current'
              >
                <path d='M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z'></path>
              </svg>
            </a>
            <a
              href='https://facebook.com'
              target='_blank'
              rel='noopener noreferrer'
              className='text-neutral-400 hover:text-white transition duration-300'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                className='fill-current'
              >
                <path d='M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z'></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div
        className={`border-t mt-10 pt-6 text-center text-sm ${
          hasBackground
            ? 'border-neutral-700 text-neutral-500'
            : 'border-neutral-300 text-neutral-700'
        }`}
      >
        © {new Date().getFullYear()} Travel Bali. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
