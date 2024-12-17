import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';

export interface ApiResponseI<T> {
  data: T;
}

export interface ApiErrorResponseI {
  message: string;
  statusCode: number;
}

export const baseQuery = fetchBaseQuery({
  baseUrl: process.env.REACT_APP_REST_HOST,

  prepareHeaders: (headers, { getState, endpoint }) => {
    headers.set('Content-Type', 'application/json');
    return headers;
  },
});

const baseQueryWithInterceptor: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  if (process.env.NODE_ENV === 'development') {
    console.info('[RTK Api fetch]:', args);
  }
  const result = await baseQuery(args, api, extraOptions);

  if (process.env.NODE_ENV === 'development') {
    console.info('[RTK Api result]:', result);
  }
  return result;
};

export const Api = createApi({
  baseQuery: baseQueryWithInterceptor,
  reducerPath: 'api',
  endpoints: () => ({}),
});
