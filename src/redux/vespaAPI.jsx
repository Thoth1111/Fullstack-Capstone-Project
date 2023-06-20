import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const vespaApi = createApi({
  reducerPath: 'vespaApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://booking-api-nhmg.onrender.com',
	
	prepareHeaders: (headers, { getState }) => {
		const token =  getState().auth.token;
		if (token) {
			headers.set('Authorization', `${token}`);
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
