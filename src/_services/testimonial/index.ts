// utils/apiService.ts

import { PaginationI } from '@/__interfaces/car-tour.interface';
import { ListTestimonialResI } from '@/__interfaces/testimonial.interface';

import { createApiInstance } from '@/_services/api';

const api = createApiInstance(
  process.env.NEXT_PUBLIC_API_URL_TESTI || 'https://api.example.com'
);

export const fetchTestimonials = async (
  pagination: PaginationI
): Promise<ListTestimonialResI> => {
  const response: ListTestimonialResI = await api.get(
    `/testimonials/user?limit=${pagination.limit}&page=${pagination.page}`
  );
  return response; // Data dari API
};
