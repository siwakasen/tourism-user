import { useEffect, useState } from 'react';
import React from 'react';

import { Car } from '@/__interfaces/car-tour.interface';
import { PaginationI } from '@/__interfaces/package-tour.interface';
import { fetchCars } from '@/_services/cars';

export const UseListCars = () => {
  const [data, setData] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isFetching, setisFetching] = useState<boolean>(true);
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
      const cars = await fetchCars(paginationParams);

      // Update data dengan menambahkan hasil fetch baru
      setData((prev) => [...(prev || []), ...cars.data]);

      // Increment halaman
      setPaginationParams((prev) => ({ ...prev, page: prev.page + 1 }));
    } finally {
      setIsLoading(false);
      setisFetching(false);
      isProcessing.current = false; // Reset flag setelah selesai
    }
  };

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
