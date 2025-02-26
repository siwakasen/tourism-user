import { useEffect, useState } from 'react';

import { Driver } from '@/__interfaces/driver.interface';
import { fetchDriver } from '@/_services/drivers';

const UseListDriver = () => {
  const [drivers, setDrivers] = useState<Driver[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleFetchDrivers = async () => {
    try {
      setIsLoading(true);
      const drivers = await fetchDriver({
        limit: 100,
        page: 1,
        search: '',
      });

      setDrivers(drivers?.data ?? []);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleFetchDrivers();
  }, []);

  return { drivers, isLoading };
};

export default UseListDriver;
