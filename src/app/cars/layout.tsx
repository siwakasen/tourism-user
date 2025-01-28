// app/contact-us/layout.tsx
import { Metadata } from 'next';

import Footer from '@/components/common/layouts/bottombar';
import NavBar from '@/components/common/layouts/navbar';

export const metadata: Metadata = {
  title: 'cars - My Website',
  description: 'Get in touch with us for any inquiries.',
  openGraph: {
    title: 'cars - My Website',
    description: 'Reach out to us through our contact page.',
    url: 'https://example.com/contact-us',
    images: ['/images/contact-us-og.jpg'],
  },
};

export default function PackageTourLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className='bg-white'>
        <header />
        <NavBar />
        <main>{children}</main>
        <Footer backgroundColor='bg-gray-800' />
      </div>
    </>
  );
}
