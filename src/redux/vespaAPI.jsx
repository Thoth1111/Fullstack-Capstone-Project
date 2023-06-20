import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { useSelector } from 'react-redux';

// const localToken = useSelector((state) => state.auth.token);

export const vespaApi = createApi({
  reducerPath: 'vespaApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://booking-api-nhmg.onrender.com',

    prepareHeaders: (headers, { getState }) => {
      const token = getState().persistedReducer.token;
      if (token) {
        headers.set('Authorization', `${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllVespas: builder.query({
      query: () => '/rooms',

    }),
  }),
});

export const { useGetAllVespasQuery } = vespaApi;
