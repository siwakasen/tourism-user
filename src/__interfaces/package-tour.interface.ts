export interface ListTourPackageResI {
  data: PackageTour[];
  meta: Meta;
}

export interface PackageTour {
  id: string;
  package_name: string;
  description: string;
  images: string[];
  package_price: number;
  duration: number;
  max_group_size: number;
  children_price: number;
  itineraries: string[];
  includes: string[];
  pickup_areas: string[];
  terms_conditions: string[];
  status: boolean;
  created_at: string;
  updated_at: string;
  deleted_at?: string;
}

export interface Meta {
  totalItems: number;
  currentPage: number;
  totalPages: number;
  limit: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface PaginationI {
  limit: number;
  page: number;
  search: string;
}

export interface GetDetailTourPackageResI {
  data: PackageTour;
  message: string;
}
