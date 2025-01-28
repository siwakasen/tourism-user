export interface ListCarsResI {
  data: Car[];
  meta: Meta;
}

export interface PaginationI {
  limit: number;
  page: number;
  search: string;
}

export interface Car {
  id: string;
  car_name: string;
  car_image: string;
  description: string;
  min_person: number;
  max_person: number;
  price: number;
  includes: string[];
  status: boolean;
  created_at: string;
  updated_at: string;
  deleted_at: string;
  brand: Brand;
}

export interface Brand {
  id: string;
  brand_name: string;
  created_at: string;
  updated_at: string;
  deleted_at: string;
}

export interface Meta {
  totalItems: number;
  currentPage: number;
  totalPages: number;
  limit: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface GetDetailCarResI {
  data: Car;
  message: string;
}
