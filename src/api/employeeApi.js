import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const employeeApi = createApi({
  reducerPath: "employeeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000" }),

  endpoints: (builder) => ({
    getAllEmployee: builder.query({
      query: () => "/employees",
    }),
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
    addEmployee: builder.mutation({
      query: (data) => ({
        url: `/employees`,
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

export const { useGetAllEmployeeQuery, useSignUpMutation, useGetAllUserQuery } =
  employeeApi;
