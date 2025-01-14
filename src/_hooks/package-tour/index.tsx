import {
  ListTourPackageResI,
  PaginationI,
} from '@/__interfaces/package_tour.interface';
import { getTourPackages } from '@/_services/package-tour';
import { useEffect, useState } from 'react';

export const useGetTourPackages = (pagination: PaginationI) => {
  const [tourPackages, setTourPackages] = useState<ListTourPackageResI | null>(
    null
  );
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTourPackages = async () => {
      try {
        const response = await getTourPackages(pagination);
        setTourPackages(response);
        setLoading(false);
      } catch (error: any) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchTourPackages();
  }, [pagination]);

  return { tourPackages, loading, error };
};
