'use client';

import * as FM from 'framer-motion';
import * as React from 'react';
import '@/lib/env';

import NavBar from '@/components/common/layouts/navbar';
import CarRentalOverview from '@/components/sections/home/car-rental-overview-section';
import DriverOverviewSection from '@/components/sections/home/driver-overview-section';
import EndSection from '@/components/sections/home/end-section';
import HeroSection from '@/components/sections/home/hero-section';
import OwnerSection from '@/components/sections/home/owner-section';
import PackageTourPupulerSection from '@/components/sections/home/package-tour.populer-section';
import ReviewOverviewSection from '@/components/sections/home/review-overview-section';
import WhyChooseUsSection from '@/components/sections/home/why-choose-us-section';

import UseHomes from '@/_hooks/homes/use-homes';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  const { isLoading, listCars, listTourPackages } = UseHomes();
  return (
    <div>
      <NavBar />
      <HeroSection />
      <div className='xl:h-[12rem] sm:h-[8rem] h-[4rem]'></div>
      <FM.AnimatePresence>
        {isLoading ? (
          <FM.motion.div
            key='skeleton'
            className='animate-pulse px-4 layout '
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          ></FM.motion.div>
        ) : (
          <>
            <PackageTourPupulerSection
              listTourPackage={listTourPackages?.data ?? []}
            />
            <div className='xl:h-[12rem] sm:h-[8rem] h-[4rem]'></div>
            <WhyChooseUsSection />
            <div className='xl:h-[12rem] sm:h-[8rem] h-[4rem]'></div>
            <CarRentalOverview listCar={listCars?.data ?? []} />
            <div className='xl:h-[12rem] sm:h-[8rem] h-[4rem]'></div>
            <OwnerSection />
            <div className='xl:h-[12rem] sm:h-[8rem] h-[4rem]'></div>
            <DriverOverviewSection />
            <div className='xl:h-[12rem] sm:h-[8rem] h-[4rem]'></div>
            <ReviewOverviewSection />
            <div className='xlh-[20rem] sm:h-[12rem] h-[6rem]'></div>
            <EndSection />
          </>
        )}
      </FM.AnimatePresence>
    </div>
  );
}
