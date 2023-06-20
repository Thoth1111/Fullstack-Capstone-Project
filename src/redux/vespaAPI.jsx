import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const vespaApi = createApi({
  reducerPath: 'vespaApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://booking-api-nhmg.onrender.com',
	
	prepareHeaders: (headers, { getState }) => {
		const token = "eyJhbGciOiJIUzI1NiJ9.eyJpZCI6MTEsImV4cCI6MTY5MjQ0NjY4NX0.GSxx3d-nRwi0swsNYQ25oy_v9VMLZL-Noxe7VdGmcOU"
		if (token) {
			headers.set('Authorization', `${token}`);
		}
		return headers;
	}
}),
  endpoints: (builder) => ({
		getAllVespas: builder.query({
			query: () => '/rooms',

  }),
}),
});

export const { useGetAllVespasQuery } = vespaApi;
