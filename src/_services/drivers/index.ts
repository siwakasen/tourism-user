// utils/apiService.ts

import { PaginationI } from '@/__interfaces/car-tour.interface';
import { ListDriverResI } from '@/__interfaces/driver.interface';
import { createApiInstance } from '@/_services/api';

const api = createApiInstance(
  process.env.NEXT_PUBLIC_API_URL_DRIVER || 'https://api.example.com'
);

export const fetchDriver = async (
  pagination: PaginationI
): Promise<ListDriverResI> => {
  const response: ListDriverResI = await api.get(
    `/drivers/user?limit=${pagination.limit}&page=${pagination.page}`
  );
  return response; // Data dari API
};
