import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// const localToken = useSelector((state) => state.persistedReducer.token);

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
  keepUnusedDataFor: 60 * 60 * 60,
  endpoints: (builder) => ({
    getAllVespas: builder.query({
      query: () => '/rooms',
    }),
  }),
});

export const { useGetAllVespasQuery } = vespaApi;
