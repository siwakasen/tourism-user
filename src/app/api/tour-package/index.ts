import {
  ListTourPackageResI,
  PaginationI,
} from '@/__interfaces/package_tour.interface';

import { Api } from '../api';

export const TourPackageApi = Api.injectEndpoints({
  endpoints: (build) => ({
    listTourPackage: build.query<ListTourPackageResI, PaginationI>({
      keepUnusedDataFor: 0,
      query: (params) => {
        const page = Number(params.page);
        const limit = Number(params.limit);
        const search = params.search;
        return {
          url: `/tour-package`,
          params: { page, limit, search },
        };
      },
    }),
  }),
  overrideExisting: false,
});

export const { useListTourPackageQuery } = TourPackageApi;
