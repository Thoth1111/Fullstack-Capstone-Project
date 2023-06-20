import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const vespaApi = createApi({
  reducerPath: 'vespaApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://booking-api-nhmg.onrender.com',
	prepareHeaders: (headers, { getState }) => {
		const token = getState().token;
		if (token) {
			headers.set('authorization', `Bearer ${token}`);
		}
		return headers;
	}
}),
  endpoints: (builder) => ({
		getAllVespas: builder.query({
			query: () => '/comments',

  }),
}),
});

export const { useGetAllVespasQuery } = vespaApi;
