import { useEffect, useState } from 'react';

import { PackageTour } from '@/__interfaces/package-tour.interface';
import {
  fetchTourPackages,
  getDetailTourPackage,
} from '@/_services/package-tour';

const UseDetailPackageTour = (id: string) => {
  const [data, setData] = useState<PackageTour>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [listTourPackages, setListTourPackages] = useState<PackageTour[]>();

  const fetchDetailPackageTour = async () => {
    try {
      setIsLoading(true);
      const tourPackage = await getDetailTourPackage(id);
      const dataListTourPackage = await fetchTourPackages({
        limit: 5,
        page: 1,
        search: '',
      });
      setData(tourPackage.data);
      const modifiedListTourPackages = dataListTourPackage.data.filter(
        (packageTour) => packageTour.id !== id
      ); // Remove the first item as an example
      setListTourPackages(modifiedListTourPackages);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDetailPackageTour();
  }, []);

  return {
    data,
    isLoading,
    listTourPackages,
  };
};

export default UseDetailPackageTour;
