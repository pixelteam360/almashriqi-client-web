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

    payment: builder.mutation({
      query: (data) => ({
        url: "/deliveryInfo/payment",
        method: "POST",
        body: data,
      }),
    }),

    afterPayment: builder.mutation({
      query: (data) => ({
        url: "/deliveryInfo/after-payment",
        method: "POST",
        body: data,
      }),
    }),

    delivery: builder.mutation({
      query: (data) => ({
        url: "/deliveryInfo",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {
  useCalculatePriceMutation,
  usePaymentMutation,
  useDeliveryMutation,
  useAfterPaymentMutation,
} = authApi;
