import { PaginationI } from '@/__interfaces/package_tour.interface';
import axios from 'axios';

const API_URL = 'http://localhost:3002';
export const getTourPackages = async (pagination: PaginationI) => {
  try {
    const response = await axios.get(`${API_URL}/user-tour-packages`, {
      params: {
        limit: pagination.limit,
        page: pagination.page,
        search: pagination.search,
      },
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};
