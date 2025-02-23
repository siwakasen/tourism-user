// utils/apiService.ts
import {
  GetDetailCarResI,
  ListCarsResI,
  PaginationI,
} from '@/__interfaces/car-tour.interface';
import { CheckoutCarsReqI } from '@/__interfaces/checkout.interface';

import { api } from '../api';

export const fetchCars = async (
  pagination: PaginationI
): Promise<ListCarsResI> => {
  const response: ListCarsResI = await api.get(
    `/user-cars?limit=${pagination.limit}&page=${pagination.page}`
  );
  return response; // Data dari API
};

export const getDetailCar = async (id: string): Promise<GetDetailCarResI> => {
  const response: GetDetailCarResI = await api.get(`/user-cars/${id}`);
  return response; // Data dari API
};

export const checkoutCars = async (data: CheckoutCarsReqI): Promise<void> => {
  await api.post(`/user-cars/create`, data);
};
