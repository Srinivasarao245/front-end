// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const EventsApi = createApi({
  reducerPath: 'EventsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4400/events' }),
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: () => `/`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetEventsQuery } = EventsApi