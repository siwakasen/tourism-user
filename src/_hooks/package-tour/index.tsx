import { useEffect, useState } from 'react';
import React from 'react';

import {
  PackageTour,
  PaginationI,
} from '@/__interfaces/package-tour.interface';
import { fetchTourPackages } from '@/_services/package-tour';

export const useGetTourPackages = () => {
  const [data, setData] = useState<PackageTour[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFetching, setisFetching] = useState<boolean>(false);
  const [paginationParams, setPaginationParams] = useState<PaginationI>({
    limit: 5,
    page: 1,
    search: '',
  });
  const isProcessing = React.useRef(false);
  const fetchTourPakcages = async () => {
    try {
      setIsLoading(true);
      if (isProcessing.current) return; // Jika sedang processing, return
      isProcessing.current = true; // Tandai sebagai processing
      // Ambil data baru berdasarkan paginationParams
      const tourPackage = await fetchTourPackages(paginationParams);

      // Update data dengan menambahkan hasil fetch baru
      setData((prev) => [...(prev || []), ...tourPackage.data]);

      // Increment halaman
      setPaginationParams((prev) => ({ ...prev, page: prev.page + 1 }));
    } finally {
      setIsLoading(false);
      setisFetching(false);
      isProcessing.current = false; // Reset flag setelah selesai
    }
  };

  const initial = async () => {
    try {
      setIsLoading(true);
      if (isProcessing.current) return; // Jika sedang processing, return
      isProcessing.current = true; // Tandai sebagai processing
      // Ambil data baru berdasarkan paginationParams
      const tourPackage = await fetchTourPackages(paginationParams);

      // Update data dengan menambahkan hasil fetch baru
      setData(tourPackage.data);

      // Increment halaman
      setPaginationParams((prev) => ({ ...prev, page: prev.page + 1 }));
    } finally {
      setIsLoading(false);
      setisFetching(false);
      isProcessing.current = false; // Reset flag setelah selesai
    }
  };

  useEffect(() => {
    initial();
  }, []);

  useEffect(() => {
    if (isFetching) {
      fetchTourPakcages();
    }
  }, [isFetching]);

  return {
    data,
    isLoading,
    paginationParams,
    setPaginationParams,
    setisFetching,
  };
};
