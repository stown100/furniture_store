import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import sumReducer from "./slices/cartSlice";
import dataReducer from "./slices/dataSlice";

// Хранилище
export const store = configureStore({
  reducer: {
    sumReducer,
    dataReducer,
  },
});

export const useAppDispatch = () => useDispatch();
