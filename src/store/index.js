import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {},
});

export const useAppDispatch = () => useDispatch();

export default store;
