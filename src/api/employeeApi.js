import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const EmployeeApi = createApi({
  reducerPath: "employeeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),

  endpoints: (builder) => ({
    getAllEmployee: builder.query({
      query: () => "/employees",
    }),
    // getProduct: builder.query({
    //   query: (productName) => `products/search?q=${productName}`,
    // }),
  }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (data) => ({
        url: `/signUp`,
        method: "POST",
        body: data,
      }),
    }),
  }),
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => "/signUp",
    }),
  }),
});

export const {
  useLazyGetAllEmployeeQuery,
  useSignUpMutation,
  useGetAllUserQuery,
} = EmployeeApi;
