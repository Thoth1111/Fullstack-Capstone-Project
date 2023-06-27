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
  tagTypes: ['Vespa', 'Reservation' , 'Comment'],
  endpoints: (builder) => ({
    getAllVespas: builder.query({
      query: () => '/vespas',
      providesTags: (result)=>
      result
      ? [...result.map(({ id }) => ({ type: 'Vespa', id })), { type: 'Vespa', id: 'LIST' }]
      : [{ type: 'Vespa', id: 'LIST' }],
    }),

    createNewVespa: builder.mutation({
      query: (body) => ({
        url: '/vespas',
        method: 'POST',
        body,
      }),

      invalidatesTags: [{ type: 'Vespa', id: 'LIST' }],
    }),

    deleteVespa: builder.mutation({
      query: (id) => ({
        url: `/vespas/${id}`,
        method: 'DELETE',
      }),

      invalidatesTags: (result, error, id) => [{ type: 'Vespa', id }],
    }),

    getAllReservations: builder.query({
      query: () => '/reservations',
      providesTags: (result) => (result
        ? [...result.map(({ id }) => ({ type: 'Reservation', id })), { type: 'Reservation', id: 'LIST' }]
        : [{ type: 'Reservation', id: 'LIST' }]),

    }),

    createReservation: builder.mutation({
      query: (body) => ({
        url: '/reservations',
        method: 'POST',
        body,
      }),

      invalidatesTags: [{ type: 'Reservation', id: 'LIST' }],

    }),

    getAllComments: builder.query({
      query: () => '/comments',
      providesTags: (result) => (result
        ? [...result.map(({ id }) => ({ type: 'Comment', id })), { type: 'Comment', id: 'LIST' }]
        : [{ type: 'Comment', id: 'LIST' }]),  
        
        transformResponse: (response) => {
          //change order of comments
          const comments = response.reverse();
          return comments;
        },

  }),

  createComment: builder.mutation({
    query: (body) => ({
      url: '/comments',
      method: 'POST',
      body,
    }),

    invalidatesTags: [{ type: 'Comment', id: 'LIST' }],
  }),

}),
  
});

export const {
  useGetAllVespasQuery, useCreateReservationMutation, useGetAllReservationsQuery, useCreateNewVespaMutation, useDeleteVespaMutation, useGetAllCommentsQuery, useCreateCommentMutation,
} = vespaApi;