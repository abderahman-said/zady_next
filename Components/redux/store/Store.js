import { configureStore } from "@reduxjs/toolkit";
import loremSlice from "../reducers/lorem/loremSlice";
import AuthSlice from "../reducers/AuthSlice";
import ShopSlice from "../reducers/ShopSlice";
const store = configureStore({
  reducer: {
    lorem: loremSlice.reducer,
    AuthSlice,
    ShopSlice,
  },
});

export default store;





