import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const vespaApi = createApi({
  reducerPath: 'vespaApi',
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
    getAllVespas: builder.query({
      query: () => '/rooms',
    }),

    createNewVespa: builder.mutation({
      query: (body) => ({
        url: '/rooms',
        method: 'POST',
        body,
      }),
    }),

    getAllReservations: builder.query({
      query: () => '/reservations',
    }),

    createReservation: builder.mutation({
      query: (body) => ({
        url: '/reservations',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useGetAllVespasQuery, useCreateReservationMutation, useGetAllReservationsQuery ,useCreateNewVespaMutation } = vespaApi;
