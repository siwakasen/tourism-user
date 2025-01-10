// app/contact-us/layout.tsx
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Package Tour - My Website',
  description: 'Get in touch with us for any inquiries.',
  openGraph: {
    title: 'Package Tour - My Website',
    description: 'Reach out to us through our contact page.',
    url: 'https://example.com/contact-us',
    images: ['/images/contact-us-og.jpg'],
  },
};

export default function DetailPackageTour({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='bg-white'>
      <header />
      <main>{children}</main>
    </div>
  );
}
