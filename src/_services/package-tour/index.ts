// utils/apiService.ts

import { CheckoutPackageTourReqI } from '@/__interfaces/checkout.interface';
import {
  GetDetailTourPackageResI,
  ListTourPackageResI,
  PaginationI,
} from '@/__interfaces/package-tour.interface';

import api from '../api';

export const fetchTourPackages = async (
  pagination: PaginationI
): Promise<ListTourPackageResI> => {
  try {
    const response: ListTourPackageResI = await api.get(
      `/user-tour-packages?limit=${pagination.limit}&page=${pagination.page}`
    );
    return response; // Data dari API
  } catch (error) {
    handleError('Error fetching tour packages:', error);
    throw error;
  }
};

export const getDetailTourPackage = async (
  id: string
): Promise<GetDetailTourPackageResI> => {
  try {
    const response: GetDetailTourPackageResI = await api.get(
      `/user-tour-packages/${id}`
    );
    return response; // Data dari API
  } catch (error) {
    handleError('Error getting tour package details:', error);
    throw error;
  }
};

export const checkoutPackageTour = async (
  data: CheckoutPackageTourReqI
): Promise<void> => {
  try {
    await api.post(`/user-tour-packages/create`, data);
  } catch (error) {
    handleError('Error checking out package tour:', error);
    throw error;
  }
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const handleError = (message: string, _error: unknown) => {};
