// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const StudentsApi = createApi({
  reducerPath: 'StudentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4400/Students' }),
  endpoints: (builder) => ({
    getStudents: builder.query({
      query: () => `/`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetStudentsQuery } = StudentsApi