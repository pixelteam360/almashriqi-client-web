import { RootState } from "@/redux/store";
import { createSlice } from "@reduxjs/toolkit";

type TdeliveryDetails = {
  totalPrice: string;
  totalDistance: string;
  deliveryPostCode: string[];
  pickupPostCode: string;
  service: string;
};
const initialState: TdeliveryDetails = {
  totalPrice: "",
  totalDistance: "",
  deliveryPostCode: [],
  pickupPostCode: "",
  service: "",
};

const commonSlice = createSlice({
  name: "deliveryDetails",
  initialState,
  reducers: {
    setDeliveryData: (state, action) => {
      const {
        totalPrice,
        totalDistance,
        deliveryPostCode,
        pickupPostCode,
        service,
      } = action.payload;
      state.totalPrice = totalPrice;
      state.totalDistance = totalDistance;
      state.deliveryPostCode = deliveryPostCode;
      state.pickupPostCode = pickupPostCode;
      state.service = service;
    },
  },
});

export const { setDeliveryData } = commonSlice.actions;

export default commonSlice.reducer;

export const getdeliveryData = (state: RootState) => state.deliveryData;
