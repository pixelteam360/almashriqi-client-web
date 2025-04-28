import baseApi from "@/redux/api/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    calculatePrice: builder.mutation({
      query: (data) => ({
        url: "/users/calculate-price",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {useCalculatePriceMutation} = authApi;
