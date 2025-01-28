import { useEffect, useState } from 'react';

import { ListCarsResI } from '@/__interfaces/car-tour.interface';
import { ListTourPackageResI } from '@/__interfaces/package-tour.interface';
import { fetchCars } from '@/_services/cars';
import { fetchTourPackages } from '@/_services/package-tour';

const UseHomes = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [listTourPackages, setListTourPackages] =
    useState<ListTourPackageResI>();
  const [listCars, setListCars] = useState<ListCarsResI>();

  const fetchHomesData = async () => {
    try {
      setIsLoading(true);

      const dataListTourPackage = await fetchTourPackages({
        limit: 3,
        page: 1,
        search: '',
      });
      const dataListCars = await fetchCars({
        limit: 3,
        page: 1,
        search: '',
      });
      setListTourPackages(dataListTourPackage);
      setListCars(dataListCars);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchHomesData();
  }, []);

  return {
    isLoading,
    listTourPackages,
    listCars,
  };
};

export default UseHomes;
