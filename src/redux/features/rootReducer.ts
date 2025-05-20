import { combineReducers } from "@reduxjs/toolkit";
import baseApi from "../api/baseApi";
import authReducer from "@/redux/features/auth/authSlice";
import deliveryDataReducer from "@/redux/features/common/commonSlice";

const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  auth: authReducer,
  deliveryData: deliveryDataReducer,
});

export default rootReducer;
