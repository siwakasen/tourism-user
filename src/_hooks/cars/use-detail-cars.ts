import { useEffect, useState } from 'react';

import { Car } from '@/__interfaces/car-tour.interface';
import { fetchCars, getDetailCar } from '@/_services/cars';

const UseDetailCar = (id: string) => {
  const [data, setData] = useState<Car>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [listCars, setListCars] = useState<Car[]>();

  const fetchDetailCar = async () => {
    try {
      setIsLoading(true);
      const car = await getDetailCar(id);
      const dataListCars = await fetchCars({
        limit: 5,
        page: 1,
        search: '',
      });
      setData(car.data);
      const modifiedListCars = dataListCars.data.filter((car) => car.id !== id);
      setListCars(modifiedListCars);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDetailCar();
  }, []);

  return {
    data,
    isLoading,
    listCars,
  };
};

export default UseDetailCar;
