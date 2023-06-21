import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const reservationApi = createApi({
  reducerPath: 'reservationApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://booking-api-nhmg.onrender.com',

    prepareHeaders: (headers, { getState }) => {
      const { token } = getState().persistedReducer;
      if (token) {
        headers.set('Authorization', `${token}`);
      }
      return headers;
    },
  }),
  keepUnusedDataFor: 60 * 60 * 60,
  endpoints: (builder) => ({
    getAllReservations: builder.query({
      query: () => '/reservations',
    }),
  }),
});

export const { useGetAllReservationsQuery } = reservationApi;
